import app from "./app.js";
import connectDb from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error in db connection Index then ", error);
      process.exit(1);
    });
    app.listen(process.env.PORT, () => {
      console.log("Server is running on Port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Connection Failed !! Index connectDb ", error);
  });
