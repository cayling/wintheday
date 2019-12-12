const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  goal: {
    type: String,
    default: "My goal for today"
  },
  date: {
    type: Date
  },
  completed: {
    type: Boolean,
    default: false
  }
});

mongoose.model("Day", daySchema);
