const express = require("express");
const router = express.Router();
const Tea = require("../models/tea");

// Get All Teas
router.get("/getAllTeas", (req, res) => {
  Tea.getAllTeas((err, teas) => {
    res.json({ success: true, data: teas });
  });
});

module.exports = router;
