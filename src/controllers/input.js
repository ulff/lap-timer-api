const express = require('express');

const router = express.Router();

router.post('/times',  (req, res) => {
  console.log(`Received time: ${req.body.time}`);
  res.status(201).json({
    time: req.body.time,
  });
});

module.exports = router;
