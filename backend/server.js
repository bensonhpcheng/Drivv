const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // loads .env into process.env

const app = express();
app.use(cors());
app.use(express.json()); // Correct usage of express.json middleware

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("Connection error", err));

const User = require("./models/User.js");
const FuelLog = require("./models/FuelLog.js");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Root route serving index.html
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

// API route to handle fuel log creation
app.post("/api/fuellog", async (req, res) => {
  try {
    const { userId, amount, date, location } = req.body;
    const newFuelLog = new FuelLog({ userId, amount, date, location });
    await newFuelLog.save();
    res.status(201).json(newFuelLog);
  } catch (error) {
    res.status(500).json({ error: "Failed to create fuel log" });
  }
});

app.get("/api/test", async (req, res) => {
  const logs = await FuelLog.find().limit(1);
  res.status(200).json({ success: true, logs });
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
