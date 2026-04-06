const router = require("express").Router();
const Attendance = require("../models/Attendance");
const Grade = require("../models/Grade");
const Material = require("../models/Material");
const Announcement = require("../models/Announcement");

router.post("/attendance", async (req, res) => {
  res.json(await Attendance.create(req.body));
});

router.post("/grades", async (req, res) => {
  res.json(await Grade.create(req.body));
});

router.post("/materials", async (req, res) => {
  res.json(await Material.create(req.body));
});

router.post("/announcements", async (req, res) => {
  res.json(await Announcement.create(req.body));
});

module.exports = router;