const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  // ... other fields
  reactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reaction'
    }
  ]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
