const User = require("../models/User");
const createToken = require("../utils/jwtToken").createToken;
const Joi = require("joi");
const bCrypt = require("bcrypt");
const validateEmail = require("../utils/authValidation").validateEmail;
const validateMessage = require("../utils/authValidation").validateMessage;

const registerSchema = {
  name: Joi.string().required(),
  email: Joi.string()
    .required(),
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
    return res.status(500).json({ message: "user not found" });
  return res.status(200).json(user);
};
const editUser = (req, res) => {
  const data = req.body;
  const { name, email, password, id } = req.body
  Joi.validate(data, updateUserData, async (err, value) => {
    if (err) {
      const str = err.details[0].path[0]
      res.status(500).json({ message: `${validateMessage(str)} is required` });
      return null
    }
    if (!validateEmail(email)) {
      res.status(500).json({ message: "Email must be valid"});
      return null
    }
    const hasEmail = await User.findOne({ email: data.email });
    const equalEmail = await User.findOne({ _id: data.id });

    let salt = bCrypt.genSaltSync(5);
    let hash = bCrypt.hashSync(data.password, salt)
    data.password = hash
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
        .json({ message: "Email already exsist" });
    }
  });
}
const login = (req, res) => {
  const data = req.body;
  const { email, password } = req.body;
  Joi.validate(data, loginSchema, async (err, value) => {
    if (err) {
      const str = err.details[0].path[0]
      res.status(500).json({ message: `${validateMessage(str)} is required` });
      return null;
    }
    if (!validateEmail(email)) {
      res.status(500).json({ message: "Email must be valid" });
      return null
    }
    await User.find({ email }, async (err, user) => {
      const match = await bCrypt.compare(password, user[0].password);
      if (user.length === 0) {
        res
          .status(401)
          .json({ message: "User does not exist!" });
      } else if (match) {
        res.status(200).json({
          token: createToken({ id: user[0]._id }),
          id: user[0]._id,
          message: "Authenticated successfully"
        });
      } else {
        res
          .status(401)
          .json({ message: "Incorrect password" });
      }
    })
  });
};
const register = (req, res) => {
  const data = req.body;
  const { name, email, password } = req.body;
  Joi.validate(data, registerSchema, async (err) => {
    if(password.length < 6){
      res.status(500).json({ message: `Password no less than symbols` });
    }
    if (err) {
      const str = err.details[0].path[0]
      res.status(500).json({ message: `${validateMessage(str)} is required` });
      return null
    }

  
    if (!validateEmail(email)) {
      res.status(500).json({ message: "Email must be valid"});
      return null
    }

    await User.find({ email }, (err, user) => {
      if (user.length !== 0) {
        return res
          .status(409)
          .json({ message: "User already exsist"});
      }
    });
      
    let salt = bCrypt.genSaltSync(5);
    let hash = bCrypt.hashSync(password, salt)
    const newUser = new User({
      name,
      email,
      password: hash
    });
    await newUser.save();
    return res.status(200).json({
      auth: "success",
      token: createToken({ id: newUser.id }),
      id: newUser.id,
      message: "Successful registration"
    });
  });
};

module.exports = { login, register, allUsers, findCurrent, editUser };




