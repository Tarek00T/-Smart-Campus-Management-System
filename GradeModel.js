const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  studentId: String,
  course: String,
  marks: Number
});

module.exports = mongoose.model("Grade", gradeSchema);