const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  title: String,
  fileUrl: String,
  uploadedBy: String
});

module.exports = mongoose.model("Material", materialSchema);