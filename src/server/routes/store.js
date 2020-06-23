const express = require("express");
const router = express.Router();
const Store = require("../models/store");

// Get All Stores
router.get("/getAllStores", (req, res) => {
  Store.getAllStores((err, store) => {
    res.json({ success: true, data: store });
  });
});

module.exports = router;
