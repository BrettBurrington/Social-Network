const router = require('express').Router();
const thoughtController = require('../controllers/thoughtController');
const reactionController = require('../controllers/reactionController');

router.get('/thoughts', thoughtController.getAllThoughts);
router.get('/reactions', reactionController.getAllReactions);

module.exports = router;
