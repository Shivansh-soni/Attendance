const express = require("express");

const { default: mongoose } = require("mongoose");
const app = express();
const port = 8080;
const cors = require("cors");
const User = require("./model/attendence-data");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
require("dotenv").config();

app.post("/data", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      rollNumber: req.body.rollNumber,

      time: req.body.time,
    });
    res.json({ status: "success" });
  } catch (error) {
    res.json({ status: "error", error: "duplicate roll numbers" });
  }
});

app.listen(8080, () => {
  console.log(`Server listening on port ${port}`);
});

mongoose.connect(process.env.LINK).then(() => {
  console.log("connected ");
});

app.post("/data", (req, res) => {
  res.send("Hello aanchal!");
});
