const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },

    time: { type: String, required: true },
  },
  {
    collection: "user-data",
  }
);
const model = mongoose.model("Userdata", User);
module.exports = model;
