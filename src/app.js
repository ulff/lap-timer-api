const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const helloController = require('./controllers/hello');
const inputController = require('./controllers/input');
const resultsController = require('./controllers/results');

const app = express();
app.disable('x-powered-by');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());

app.use(helloController);
app.use(inputController);
app.use(resultsController);

module.exports = app;
