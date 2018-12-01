const mongoose = require('../db/connection');

const Lap = mongoose.model('Lap', {
  time: {
    type: Number,
    required: true,
  },
});

module.exports = { Lap };
