const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// connecting to our mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.use("/", taskRoutes);

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // move to the next route
});

app.listen(PORT, () => {
  console.log(`My server is running on port ${PORT}`);
});

// http://localhost:3000/
// http://localhost:3000/greet?name=Blessing
// http://localhost:3000/user/767
