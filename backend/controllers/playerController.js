const Player = require('../models/player');

const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.error('Error fetching matches:', error);  // Added logging
    res.status(500).json({ message: 'Server Error' });
  }
};


const addPlayer = async (req, res) => {
  console.log('Request Body:', req.body); 
  const newPlayer = new Player(req.body);
  try {
    const savedPlayer = await newPlayer.save();
    res.json(savedPlayer);
  } catch (error) {
    console.error('Error adding match:', error);  // Added logging
    res.status(400).json({ message: 'Error adding player' });
  }
};


module.exports = {
  getPlayers,
  
  addPlayer,
  
};
