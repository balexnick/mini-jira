const User = require("../models/User");
const createToken = require("../utils/jwtToken").createToken;
const Joi = require("joi");
const bCrypt = require("bcrypt").compare

const registerSchema = {
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email(),
  password: Joi.string()
    .required()
    .min(6)
};

const loginSchema = {
  email: Joi.string().required(),
  password: Joi.string().required()
};

const updateUserData = {
  id: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email(),
  password: Joi.string()
    .required()
    .min(6)
}


const allUsers = (req, res) => {
  User.find().exec().then(users => res.json(users));
};

const findCurrent = async (req, res) => {
  const user = await User.find({ _id: req.body.id });
  if (!user)
    return res.status(500).json({ error: { message: "user not found" } });
  return res.status(200).json(user);
};

const editUser = (req, res) => {
  const data = req.body;
  const { name, email, password, id } = req.body
  console.log(data)
  Joi.validate(data, updateUserData, async (err, value) => {
    if (err) {
      return res.status(500).json({ error: err.details[0] });
    } else {
      const hasEmail = await User.findOne({ email: data.email });
      const equalEmail = await User.findOne({ _id: data.id });
      if (equalEmail.email === data.email || !hasEmail) {
        await User.updateOne({ _id: data.id }, data);
        res.status(200).json({
          status: "success",
          message: "Your data has changed",
          data: {
            name, email, password, _id: id
          }
        });
      } else if (hasEmail) {
        return res
          .status(409)
          .json({ error: { message: "Email already exsist" } });
      }
    }
  });
}

const login = (req, res) => {
  const data = req.body;
  const { email, password } = req.body;
  Joi.validate(data, loginSchema, async (err, value) => {
    if (err) {
      res.status(500).json({ error: err.details[0] });
    } else {
      await User.findOne({ email })
        .exec()
        .then(user => {
          if (!user) {
            res
              .status(401)
              .json({ error: { message: "User does not exist!" } });
          }

          if (password === user.password) {
            res.status(200).json({
              token: createToken({ id: user._id }),
              id: user._id,
              name: user.name,
              message: "Authenticated successfully"
            });
          } else {
            res
              .status(401)
              .json({ error: { message: "Incorrect password" } });
          }
        });
    }
  });
};
const register = (req, res) => {
  const data = req.body;
  Joi.validate(data, registerSchema, async (err, value) => {
    if (err) {
      res.status(500).json({ error: err.details[0] });
    } else {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(409)
          .json({ error: { message: "user already exsist" } });
      }

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      await newUser.save();
      return res.status(200).json({
        auth: "success",
        token: createToken({ id: newUser.id }),
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        message: "Successful registration"
      });
    }
  });
};

module.exports = { login, register, allUsers, findCurrent, editUser };




