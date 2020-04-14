const Tasks = require("../models/Tasks");
const Joi = require("joi");
const validateMessage = require("../utils/authValidation").validateMessage;
const createNewTask = {
  title: Joi.string().required(),
  description: Joi.string().required()
};
const updateTask = {
  id: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required()
};
const all = (req, res) => {
  Tasks.find()
    .exec()
    .then(tasks => {
      res.json(tasks);
    });
};

const create = (req, res) => {
  const data = req.body;
  Joi.validate(data, createNewTask, async (err, value) => {
    if (err) {
      const str = err.details[0].path[0]
      return res.status(500).json({ message: `${validateMessage(str)} is required` });
    } else {
      let createdTack = {
        data, status: 1
      }
      await Tasks.create(createdTack);
      res.status(201).json({
        status: "success",
        message: "Task successfully created"
      });
    }
  });
};
const update = (req, res) => {
  const data = req.body;
  Joi.validate(data, updateTask, async (err, value) => {
    if (err) {
      return res.status(500).json({ message: err.details });
    } else {
      await Tasks.findOneAndUpdate({ _id: req.params.id }, data);
      res.status(200).json({
        status: "success",
        data
      });
    }
  });
};

const remove = (req, res) => {
  const removeUser = Tasks.findOneAndDelete({ _id: req.params.id }).exec();
  if (!removeUser) {
    return res.status(500).json({ message: "not exist" });
  }
  res.status(200).json({ message: "Deleted successfully" });
};

module.exports = { all, create, update, remove };
// todo, in progress, po approve, done
