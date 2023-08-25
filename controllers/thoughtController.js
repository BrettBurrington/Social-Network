const Thought = require('../models/Thought');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve thoughts.' });
    }
  },

  // Other controller methods for CRUD operations
};

module.exports = thoughtController;
