const express = require('express');

var blingRouter = require('./routes/bling');
var pipeRouter = require('./routes/pipe');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.listen(3000);
console.log('http://localhost:3000/')


app.use('/pipe', pipeRouter);
app.use('/bling', blingRouter);

module.exports = app;