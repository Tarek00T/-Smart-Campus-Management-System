const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: String,
  course: String,
  date: { type: Date, default: Date.now },
  status: String
});

module.exports = mongoose.model("Attendance", attendanceSchema);