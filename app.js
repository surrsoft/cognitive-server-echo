const express = require('express');
const routes = require('./routes/index');
const exampleRoute = require('./routes/example');

const app = express();
app.use('/', routes);
app.use('/example', exampleRoute);
app.use('/static', express.static('public'));

module.exports = app;

