const express = require('express');
const { Lap } = require('../model/lap');

const router = express.Router();

router.post('/laps',  (req, res) => {
  console.log(`Received time: ${req.body.time}`);

  const lap = new Lap({
    time: parseInt(req.body.time, 10),
  });

  console.log('Created lap');
  console.log(lap);

  // const { MongoClient } = require('mongodb');
  //
  // MongoClient.connect('mongodb://mongo:27017/LapTimerApi', (err, db) => {
  //   if (err) {
  //     return console.log('Unable to connect to mongodb server.');
  //   }
  //   console.log('Connected to mongodb server');
  //
  //   db.close();
  // });

  lap.save().then((document) => {
    console.log('saved lap');
    console.log(lap);
    res.status(201).json(document);
  }, (err) => {
    console.log('Error!');
    console.log(err.message);
    res.status(400).send(err);
  });
});

module.exports = router;
