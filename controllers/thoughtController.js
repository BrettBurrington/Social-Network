const Thought = require('../models/Thought');

module.exports = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get thoughts' });
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (thought) return res.json(thought);
      res.status(404).json({ error: 'Thought not found' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get thought' });
    }
  },

  createThought: async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);
      res.status(201).json(newThought);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create thought' });
    }
  },

  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
      if (updatedThought) return res.json(updatedThought);
      res.status(404).json({ error: 'Thought not found' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update thought' });
    }
  },

  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (deletedThought) return res.json(deletedThought);
      res.status(404).json({ error: 'Thought not found' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete thought' });
    }
  }
};
