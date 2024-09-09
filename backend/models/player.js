const mongoose = require('mongoose');


const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },          
  country: { type: String, required: true },     
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  ranking: { type: Number, required: true },
  profile_image_url: { type: String, required: true }, 
  grand_slam_results: [{
    tournament: { type: String, required: true }, 
    result: { type: String, required: true },       
    year: { type: Number, required: true }          
  }],    
  bio: { type: String } ,      
  more_info_link: {type: String} 
});

// Creating the Player model
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
