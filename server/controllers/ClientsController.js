const Clients = require("../models/Clients");
const Joi = require("joi");
const createNewClient = {
  name: Joi.string().required(),
  surname: Joi.string().required()
};
const updateUser = {
  id: Joi.string().required(),
  name: Joi.string().required(),
  surname: Joi.string().required()
};

const all = (req, res) => {
  Clients.find()
    .exec()
    .then(clients => res.json(clients));
};

const create = (req, res) => {
  const data = req.body;
  Joi.validate(data, createNewClient, (err, value) => {
    if (err) {
      return res.status(422).json({ error: err.details });
    } else {
      Clients.create(req.body);
      res.status(201).json({
        status: "success",
        data
      });
    }
  });
};
const update = (req, res) => {
  const data = req.body;
  Joi.validate(data, updateUser, (err, value) => {
    if (err) {
      return res.status(500).json({ message: err.details });
    } else {
      Clients.findOneAndUpdate({ _id: req.params.id }, data);
      res.status(200).json({
        status: "success",
        data
      });
    }
  });
};

const remove = (req, res) => {
  const removeUser = Clients.findOneAndDelete({ _id: req.params.id }).exec();
  if (!removeUser) {
    return res.status(500).json({ error: { message: "not exist" } });
  }
  res.status(200).json({ error: { message: "Deleted successfully" } });
};
module.exports = { all, create, update, remove };
