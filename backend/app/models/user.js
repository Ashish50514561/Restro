const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: Schema.Types.Mixed,
  },
});

const User = mongoose.model("User", newSchema);

module.exports = User;
