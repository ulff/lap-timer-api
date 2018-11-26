const express = require('express');

const router = express.Router();

router.post('/times',  (req, res) => {
  console.log(`Received time: ${req.body.time}`);
  res.status(201).json({
    id: 'e86556be-ef86-4a6e-92f3-2013da9aa5b2',
    time: req.body.time,
  });
});

module.exports = router;
