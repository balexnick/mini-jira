const User = require("../models/User");
const createToken = require("../utils/jwtToken").createToken;
const Joi = require("joi");
const bCrypt = require("bcrypt").compare;

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

const findCurrent = async (req, res) => {
  // console.log(req.body.id);
  const user = await User.find({ _id: req.body.id });
  if (!user)
    return res.status(500).json({ error: { message: "user not found" } });
  return res.status(200).json(user);
};

const allUsers = (req, res) => {
  User.find()
    .exec()
    .then(users => {
      res.json(users);
    });
};
const login = (req, res) => {
  const data = req.body;
  const { email, password } = req.body;
  Joi.validate(data, loginSchema, (err, value) => {
    if (err) {
      res.status(500).json({ error: err.details[0] });
    } else {
      User.findOne({ email })
        .exec()
        .then(user => {
          if (!user) {
            res
              .status(401)
              .json({ error: { message: "User does not exist!" } });
          }
          const isValid = bCrypt(password, user.password);
          if (isValid) {
            res.status(200).json({
              token: createToken({ id: user._id }),
              id: user._id,
              name: user.name
            });
          } else {
            res
              .status(401)
              .json({ error: { message: "User does not exist!" } });
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
        email: newUser.email
      });
    }
  });
};

module.exports = { login, register, allUsers, findCurrent };
