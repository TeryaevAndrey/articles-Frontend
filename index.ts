const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const mongoUrl = config.get("mongoUrl");
const PORT = config.get("port") || 5000;

const app = express();

app.use(express.json({ extended: true }))
app.use("/api/auth", require("./routes/auth.route"));

const start = async() => {
  try {
    await mongoose.connect(mongoUrl);
    
    app.listen(PORT, () => {
      console.log(`Server Started port ${PORT}`);
    });
  } catch(err) {
    console.log("Server Error", err);
  }
};

start();