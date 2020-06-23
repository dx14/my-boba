const mongoose = require("mongoose");

// Topping Schema
const ToppingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Topping = (module.exports = mongoose.model("Topping", ToppingSchema));

module.exports.getAllToppings = function(callback) {
  Topping.find({}, callback);
};
