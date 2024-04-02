import { Router } from "express";
import {
  createWorkout,
  getSingleWorkout,
  getAllWorkout,
} from "../controllers/workout.controller.js";

const router = Router();

//Get all workouts
router.route("/").get(getAllWorkout);

//Post all workout
router.route("/").post(createWorkout);

//Get single workout
router.route("/:id").get(getSingleWorkout);

//Delete single workout
router.route("/:id").delete((req, res) => {
  res.json({ msg: "Delete a single workout" });
});

//Update single workout
router.route("/:id").patch((req, res) => {
  res.json({ msg: "Update a single workout" });
});

export default router;
