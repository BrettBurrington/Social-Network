const Reaction = require('../models/Reaction');

module.exports = {
  createReaction: async (req, res) => {
    try {
      const newReaction = await Reaction.create(req.body);
      return res.status(201).json(newReaction);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to create reaction' });
    }
  },

  deleteReaction: async (req, res) => {
    try {
      const deletedReaction = await Reaction.findByIdAndDelete(req.params.reactionId);
      if (deletedReaction) {
        return res.json(deletedReaction);
      } else {
        return res.status(404).json({ error: 'Reaction not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete reaction' });
    }
  }
};
