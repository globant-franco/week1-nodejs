const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A User must have a name"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    required: [true, "A user must have an email"],
  },
  role: String,
  active: Boolean,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
