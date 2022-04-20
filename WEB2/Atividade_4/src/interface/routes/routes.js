const Router = require('express').Router;

const router = Router();

const PollController = require('../controller/PollController');
const VoteController = require('../controller/VoteController');

router.post('/poll', PollController.create);
router.get('/poll/:id', PollController.getPoll);

router.post('/vote/:pollid', VoteController.addVote);

module.exports = router;