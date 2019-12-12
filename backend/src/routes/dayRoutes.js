const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Day = mongoose.model("Day");

const router = express.Router();

router.use(requireAuth);

router.get("/days", async (req, res) => {
  const days = await Day.find({ userId: req.user._id });

  res.send(days);
});

router.post("/days", async (req, res) => {
  const { goal, date } = req.body;
  console.log(req.body);
  if (!goal || !date) {
    return res.status(422).send({ error: "dayz error" });
  }

  try {
    const day = new Day({ goal, date, userId: req.user._id });
    await day.save();
    res.send(day);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.put("/day", async (req, res) => {
  const { goal, completed, goalId } = req.body;
  console.log(req.body);
  if (!goal || !completed) {
    return res.status(422).send({ error: "dayz error" });
  }

  try {
    const day = await Day.updateOne({ _id: goalId }, { completed, goal });
    res.send(day);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
