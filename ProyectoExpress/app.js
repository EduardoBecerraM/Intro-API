
const express = require('express');
const port = 3002;

const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log('Error: ${error}');

        console.log('El servidor escucha en el puerto ${server.address().port}');
});

/*
var express = require('express');
var app = express();

app.get('/hola', function(req, res) {
    res.send('Hola Mundo!');
});

app.get('/adios', function(req, res) {
    res.send('Adios Mundo!');
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!')
});
*/