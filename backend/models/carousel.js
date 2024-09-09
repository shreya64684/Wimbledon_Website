const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image_url: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 } 
});

const Carousel = mongoose.model('Carousel', carouselSchema);
module.exports = Carousel;
