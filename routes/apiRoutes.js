const router = require('express').Router();
const userController = require('../controllers/userController');
const thoughtController = require('../controllers/thoughtController');
const reactionController = require('../controllers/reactionController');

router.post('/users', userController.createUser);
router.post('/thoughts', thoughtController.createThought);
router.post('/thoughts/:thoughtId/reactions', reactionController.createReaction);


module.exports = router;
