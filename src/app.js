const express = require('express');
const app = express();


const index = require('./route/index');
const filmes = require('./route/filmesRoute')
const musician = require('./route/musicianRoute')
app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/filmes', filmes);
app.use('/musician', musician);

module.exports = app;