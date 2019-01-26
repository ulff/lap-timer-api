const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const aboutController = require('./controllers/about');
const inputController = require('./controllers/input');
const resultsController = require('./controllers/results');
const sessionsController = require('./controllers/sessions');

const app = express();
app.disable('x-powered-by');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());

app.use(aboutController);
app.use(inputController);
app.use(resultsController);
app.use(sessionsController);

module.exports = app;
