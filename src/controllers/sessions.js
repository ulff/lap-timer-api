const express = require('express');
const { retrieveSessions } = require('../service/sessions');

const router = express.Router();

router.get('/', (req, res) => {
  retrieveSessions().then((sessions) => {
    res.format({
      "text/html"() {
        res.status(200).render("sessions", { sessions });
      },
      "application/json"() {
        res.status(200).json(results);
      },
      default() {
        res.status(200).json(results);
      }
    });
  }, (e) => {
    res.status(500).send(e);
  });
});

module.exports = router;
