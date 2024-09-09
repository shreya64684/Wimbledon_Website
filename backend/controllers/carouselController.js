const Carousel = require('../models/carousel');

const getCarouselItems = async (req, res) => {
  try {
    const items = await Carousel.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


const addCarouselItem = async (req, res) => {
  const newItem = new Carousel(req.body);
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding carousel item' });
  }
};


module.exports = {
  getCarouselItems,
  addCarouselItem,
};
