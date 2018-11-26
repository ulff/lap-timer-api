const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
const connection = mongoose.connect('mongodb://mongo:27017/LapTimerApi');

module.exports = { connection };
