const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AllTasks = new Schema({
  data: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("tasks", AllTasks);
