const express = require('express');

var integrationRouter = require('./routes/integration');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/integration', integrationRouter);

app.listen(3000);
console.log('http://localhost:3000/')

module.exports = app;