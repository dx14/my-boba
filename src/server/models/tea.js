const mongoose = require("mongoose");

// Tea Schema
const TeaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Tea = (module.exports = mongoose.model("Tea", TeaSchema));

module.exports.getAllTeas = function(callback) {
  return Tea.find({}, callback);
};
