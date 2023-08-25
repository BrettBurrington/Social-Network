const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  // Other fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
