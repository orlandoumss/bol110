'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//var cors = require('cors');
// cargar rutas
var user_rutes = require('./src/routes/user');
var geo_rutes = require('./src/routes/geoRutes');

// middlewares body-parser
 //app.use(cors());  // para agregar cabeceras para comunicarse con otros servidores
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());

// configuracion de cabeceras  y cors

const cors = require('cors');
app.use(cors());

// rutas base
app.use('/api', user_rutes);
app.use('/geopol', geo_rutes);


// app.use('/api', (req, res) => res.send('hola'));

// app.get('/probando', (req, res) => {
//     res.status(200).send({message:'este es el metodo probando'});
// })
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

module.exports = app;

