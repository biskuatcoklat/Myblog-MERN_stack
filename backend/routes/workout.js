const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "get all workouts" });
});
router.get("/:id", (req, res) => {
  res.json({ mssg: "get a single workouts" });
});
router.post("/", (req, res) => {
  res.json({ mssg: "Post a new workout" });
});
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a workouts" });
});
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});
module.exports = router;
