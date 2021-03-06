const express = require('express');
const { Lap } = require('../model/lap');

const router = express.Router();

router.get('/results', (req, res) => {
  Lap.find().then((results) => {
    res.format({
      "text/html"() {
        res.status(200).render("results", { results });
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

router.get('/results/sessions/:slug', (req, res) => {
  Lap.find({session: req.params.slug}).then((results) => {
    res.format({
      "text/html"() {
        res.status(200).render("results", { results });
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

router.get('/results/sessions/:sessionSlug/participants/:identifierSlug', (req, res) => {
  Lap.find({
    session: req.params.sessionSlug,
    identifier: req.params.identifierSlug
  }).then((results) => {
    res.format({
      "text/html"() {
        res.status(200).render("results", { results });
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
