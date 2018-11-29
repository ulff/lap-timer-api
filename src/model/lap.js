const mongoose = require('../db/mongoose');

const Lap = mongoose.model('Lap', {
  time: {
    type: Number,
    required: true,
  },
});

module.exports = { Lap };
