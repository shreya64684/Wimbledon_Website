const Match = require('../models/match');

const getMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (error) {
    console.error('Error fetching matches:', error);  // Added logging
    res.status(500).json({ message: 'Server Error' });
  }
};

const addMatch = async (req, res) => {
  console.log('Request Body:', req.body);  
  const newMatch = new Match(req.body);
  try {
    const savedMatch = await newMatch.save();
    res.json(savedMatch);
  } catch (error) {
    console.error('Error adding match:', error);  
    res.status(400).json({ message: 'Error adding match' });
  }
};

module.exports = {
  getMatches,
  addMatch,
};
