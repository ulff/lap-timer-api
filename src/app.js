const express = require('express');
const bodyParser = require('body-parser');
const helloController = require('./controllers/hello');
const inputController = require('./controllers/input');
const statsController = require('./controllers/stats');

const app = express();
app.disable('x-powered-by');

app.use(bodyParser.json());

app.use(helloController);
app.use(inputController);
app.use(statsController);

module.exports = app;
