const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const CustomerData = mongoose.model("users", userSchema);

module.exports = CustomerData;
