const mongoose = require("../connection");

const schema = mongoose.Schema({
  title: { type: String, require: true },
  description: String,
  author: {type:mongoose.Types.ObjectId,ref:"users"},
  thumbnail:String,
  file:String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("podcast", schema);

module.exports = model;