const express = require('express');
const { Lap } = require('../model/lap');

const router = express.Router();

router.get('/laps', (req, res) => {
  Lap.find().then((allLaps) => {
    res.status(200).json(allLaps);
  }, (e) => {
    res.status(400).send(e);
  });
});

module.exports = router;
