const express = require('express');
const { Lap } = require('../model/lap');

const router = express.Router();

router.post('/laps',  (req, res) => {
  const lap = new Lap({
    session: req.body.session,
    identifier: req.body.identifier,
    date: new Date(req.body.date*1000),
    time: parseInt(req.body.time, 10),
  });

  lap.save().then((document) => {
    res.status(201).json(document);
  }, (err) => {
    res.status(400).send(err);
  });
});

module.exports = router;
