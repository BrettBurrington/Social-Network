const router = require('express').Router();
const reactionController = require('../controllers/reactionController');

router.post('/thoughts/:thoughtId/reactions', reactionController.createReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', reactionController.deleteReaction);

module.exports = router;
