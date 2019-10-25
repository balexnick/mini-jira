const Tasks = require("../models/Tasks");
const Joi = require("joi");
const createNewTask = {
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.string().required()
};
const updateTask = {
  id: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.string().required()
};

const all = (req, res) => {
  Tasks.find()
    .exec()
    .then(tasks => res.json(tasks));
};

const create = (req, res) => {
  const data = req.body;
  Joi.validate(data, createNewTask, (err, value) => {
    if (err) {
      return res.status(422).json({ error: err.details });
    } else {
      Tasks.create(req.body);
      res.status(201).json({
        status: "success",
        message: 'Task successfully created'
      });
    }
  });
};
const update = (req, res) => {
  const data = req.body;
  Joi.validate(data, updateTask, (err, value) => {
    if (err) {
      return res.status(500).json({ message: err.details });
    } else {
      Tasks.findOneAndUpdate({ _id: req.params.id }, data);
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
    return res.status(500).json({ error: { message: "not exist" } });
  }
  res.status(200).json({ error: { message: "Deleted successfully" } });
};
module.exports = { all, create, update, remove };
