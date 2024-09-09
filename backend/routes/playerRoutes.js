const express = require('express');
const { getPlayers,  addPlayer} = require('../controllers/playerController');

const router = express.Router();

router.get('/', getPlayers);
router.post('/', addPlayer);


module.exports = router;
