const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("workout", workoutSchema);
