const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//create workout
const createWorkout = async (req, res) => {
  const { name, reps, sets, load, description } = req.body;

  try {
    const workout = await Workout.create({
      name,
      reps,
      sets,
      load,
      description,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// get all workouts in the db

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 }); // sorts by created time and dates, the latest will be on top of the stack
    console.log({ workouts: workouts, message: "fetch successful" });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// getting a single workout from the db
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "id not found, so workout no in the database" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res
      .status(404)
      .json({ error: "no workout like that found in the database" });
  }
  res.status(200).json(workout);

  try {
  } catch (error) {
    res.status();
  }
};

// delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "no such workout found in the database reevaluate your request",
    });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "no workout like that found here" });
  }
  res.status(200).json(workout);
};

// Update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "there no workout like this here" });
  }
  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    return res
      .status(404)
      .json({ error: "no workout like that found in this database" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
