const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  tournament_stage: { type: String, required: true },
  category: { type: String, required: true },
  players: [
    {
      name: { type: String, required: true },
      country: { type: String, required: true },
      is_winner: { type: Boolean, required: true },
      score: [Number],
      points_per_set: [Number]
    }
  ],
  duration: { type: String, required: true },
  match_highlights_link: { type: String }
});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;
