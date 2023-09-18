const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../Controllers/workoutController");

// get all workouts
router.get("/", getAllWorkouts);
// router.route('/').get(getAllWorkouts).post(createWorkout);

//get single workout

router.get("/:id", getWorkout);

//post a workout

router.post("/", createWorkout);

//delete a workout

router.delete("/:id", deleteWorkout);

//delete a workout

router.patch("/:id", updateWorkout);

module.exports = router;
