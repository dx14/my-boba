const express = require("express");
const router = express.Router();
const Topping = require("../models/topping");

// Get All Toppings
router.get("/getAllToppings", (req, res) => {
  Topping.getAllToppings((err, toppings) => {
    res.json({ success: true, data: toppings });
  });
});

module.exports = router;
