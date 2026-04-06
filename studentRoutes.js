const router = require("express").Router();
const Attendance = require("../models/Attendance");
const Grade = require("../models/Grade");
const Material = require("../models/Material");
const Announcement = require("../models/Announcement");

router.get("/attendance/:id", async (req, res) => {
  res.json(await Attendance.find({ studentId: req.params.id }));
});

router.get("/grades/:id", async (req, res) => {
  res.json(await Grade.find({ studentId: req.params.id }));
});

router.get("/materials", async (req, res) => {
  res.json(await Material.find());
});

router.get("/announcements", async (req, res) => {
  res.json(await Announcement.find());
});

module.exports = router;