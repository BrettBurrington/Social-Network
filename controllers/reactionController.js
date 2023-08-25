const Reaction = require('../models/Reaction');

const reactionController = {
  getAllReactions: async (req, res) => {
    try {
      const reactions = await Reaction.find();
      res.json(reactions);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve reactions.' });
    }
  },

  // Other controller methods for CRUD operations
};

module.exports = reactionController;
