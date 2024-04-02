import { Workout } from "../models/workout.model.js";
import mongoose from "mongoose";

// Get all workouts.
const getAllWorkout = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// Get a single workout.
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// Create a workout.
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// Delete a workout.

// Update a workout

export { createWorkout, getAllWorkout, getSingleWorkout };
