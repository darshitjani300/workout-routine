import express from "express";
import cors from "cors";
import workoutRouter from "./routes/workout.routes.js";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());

//Initialize the routes.
app.use("/api/v1/workouts", workoutRouter);

export default app;
