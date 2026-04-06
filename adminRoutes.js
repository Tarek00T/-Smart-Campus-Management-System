const router = require("express").Router();
const User = require("../models/User");

router.get("/users", async (req, res) => {
  res.json(await User.find());
});

router.delete("/user/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;