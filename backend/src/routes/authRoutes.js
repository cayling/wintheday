const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    const { current, best, goal, completed, _id } = user;

    res.send({ token, current, best, _id, goal, completed });
  } catch (err) {
    return res.status(422).send({ error: "User already exists" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Email and password required" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).send({ error: "Invalid email or password" });
  }
  try {
    await user.comparePassword(password);
    const { current, best, completed, goal, date } = user;
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token, current, best, completed, goal, date });
  } catch (err) {
    return res.status(422).send({ error: "invalid email or password" });
  }
});

router.put("/completeGoal", requireAuth, async (req, res) => {
  const { completed } = req.body;
  let { _id, current, best } = req.user;

  if (!completed || !_id) {
    return res.status(422).send({ error: "dayz error" });
  }
  current = current + 1;
  if (current >= best) {
    best = current;
  }

  try {
    const user = await User.updateOne({ _id }, { completed, current, best });
    res.send({ completed, current, best });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.put("/setGoal", requireAuth, async (req, res) => {
  const { completed, goal, date } = req.body;
  const { _id } = req.user;

  if (completed || !goal || !date) {
    return res.status(422).send({ error: "dayz error" });
  }

  try {
    const user = await User.updateOne({ _id }, { completed, goal, date });

    res.send({ completed, goal, date });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.put("/resetStreak", requireAuth, async (req, res) => {
  const { _id } = req.user;

  if (!_id) {
    return res.status(422).send({ error: "resetStreak error" });
  }

  try {
    const user = await User.updateOne({ _id }, { current: 0 });

    res.send({ current: 0 });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
