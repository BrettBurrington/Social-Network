const User = require('../models/User');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve users.' });
    }
  },

  // Other controller methods for CRUD operations
};

module.exports = userController;
