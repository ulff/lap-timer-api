const mongoose = require('../db/connection');

const Lap = mongoose.model('Lap', {
  session: {
    type: String,
    required: true
  },
  identifier: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

module.exports = { Lap };
