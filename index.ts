const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const mongoUrl = config.get("mongoUrl");
const PORT = config.get("port") || 5000;

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/downloads"));
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/posts", require("./routes/posts.route"));

const start = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server Started port ${PORT}`);
    });
  } catch (err) {
    console.log("Server Error", err);
    process.exit(1);
  }
};

start();
