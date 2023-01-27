const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("user", UserSchema);
