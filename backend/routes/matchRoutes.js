const express = require('express');
const { getMatches, addMatch } = require('../controllers/matchController');

const router = express.Router();

router.get('/', getMatches);
router.post('/', addMatch);

module.exports = router;
