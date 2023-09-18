require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const WorkoutRoutes = require("./Routes/WorkoutRoutes");

// the express app

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// our routes
app.use("/api/workouts", WorkoutRoutes);

// connection to the database

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listening for request from the server
    app.listen(process.env.PORT, () => {
      return console.log(
        `server is running on the port ${process.env.PORT} and the database is connected successfully`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
