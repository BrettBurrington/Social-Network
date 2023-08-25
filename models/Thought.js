const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  // Other fields
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
