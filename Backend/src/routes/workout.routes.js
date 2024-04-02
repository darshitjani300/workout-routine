import { Router } from "express";

const router = Router();

//Get and Post all workouts
router
  .route("/")
  .get((req, res) => {
    res.json({ msg: "Get all workouts" });
  })
  .post((req, res) => {
    res.json({ msg: "Post a new workout" });
  });

//Get single workout
router.route("/:id").get((req, res) => {
  res.json({ msg: "Get a single workout" });
});

//Delete single workout
router.route("/:id").delete((req, res) => {
  res.json({ msg: "Delete a single workout" });
});

//Update single workout
router.route("/:id").patch((req, res) => {
  res.json({ msg: "Update a single workout" });
});

export default router;
