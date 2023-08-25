const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionBody: { type: String, required: true },
  // Other fields
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
