const express = require('express');

const router = express.Router();

router.get('/about',  (req, res) => {

  const { MongoClient } = require('mongodb');

  MongoClient.connect('mongodb://mongo:27017/LapTimerApi', (err, db) => {
    if (err) {
      return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to mongodb server');

    db.db('LapTimerApi').collection('Tests').insertOne({
      text: 'Something',
      completed: false,
    }, (error, result) => {
      if (error) {
        return console.log('Unable to insert test.', error);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
  });

  res.send('Welcome to Lap Timer API!');
});

module.exports = router;
