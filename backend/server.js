const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const morgan = require("morgan");
const workoutRoutes = require("./routes/workouts");

// middleware
app.use(express.json())
app.use(morgan("dev"));


// routes
app.use("/api/workouts", workoutRoutes);


app.listen(port, () => {
  console.log(`✅ Listening for client requests on Port: ${port} ✅`);
});
