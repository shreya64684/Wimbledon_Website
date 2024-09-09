const express = require('express');
const { getCarouselItems, addCarouselItem } = require('../controllers/carouselController');

const router = express.Router();

router.get('/', getCarouselItems);
router.post('/', addCarouselItem);


module.exports = router;
