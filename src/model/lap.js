const { connection } = require('mongoose');

const Lap = connection.model('Lap', {
  time: {
    type: Number,
    required: true,
  },
});

module.exports = { Lap };
