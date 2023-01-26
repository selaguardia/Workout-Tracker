const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const workoutRoutes = require("./routes/workouts");
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "\x1b[36m%s\x1b[0m",
      `🟢 🙌  [${new Date().toLocaleTimeString()}] - MongoDB connected ...  🙌 🟢`
    );
  })
  .catch((err) => {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `❌😥❌ [${new Date().toLocaleTimeString()}] - MongoDB connection error ❌😥❌`
    );
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`✅ Listening for client requests on Port: ${port} ✅`);
});
