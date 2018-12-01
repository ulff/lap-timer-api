const connection = require('mongoose');

connection.Promise = global.Promise;
connection.connect('mongodb://mongo:27017/LapTimerApi');

module.exports = connection;
