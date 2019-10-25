const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AllTasks = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("tasks", AllTasks);
