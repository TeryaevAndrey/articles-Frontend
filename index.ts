const express = require("express");
const mongoose = require("mongoose");
const PORT = 5000;
const dbKey = "mongodb+srv://admin:1479314ade777@cluster0.vog1u1h.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json({ extended: true }))
app.use("/api/auth", require("./routes/auth.route"));

mongoose.connect(dbKey);

const start = async() => {
  try {
    app.listen(PORT, () => {
      console.log("Server Started");
    });
  } catch(err) {
    console.log("Server Error", err);
  }
};

start();