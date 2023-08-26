const Reaction = require('../models/Reaction'); // Adjust the import path based on your project structure

const reactionController = {
  createReaction: async (req, res) => {
    try {
      const newReaction = await Reaction.create(req.body);
      res.status(201).json(newReaction);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create reaction' });
    }
  },

  deleteReaction: async (req, res) => {
    try {
      const deletedReaction = await Reaction.findByIdAndDelete(req.params.reactionId);
      if (deletedReaction) {
        res.json(deletedReaction);
      } else {
        res.status(404).json({ error: 'Reaction not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete reaction' });
    }
  }
};

module.exports = reactionController;
