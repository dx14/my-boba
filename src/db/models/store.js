const mongoose = require("mongoose");

// Store Schema
const StoreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  teas: {
    type: Array,
    required: true
  },
  toppings: {
    type: Array,
    required: true
  }
});

const Store = (module.exports = mongoose.model("Store", StoreSchema, "stores"));

module.exports.getAllStores = function(callback) {
  Store.find({}, callback);
};
