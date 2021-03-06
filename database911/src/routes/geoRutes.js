'use strict'

var express = require('express');
// const router = Router(); 

var GeoController = require('../controllers/geoController');

var verytoken = require( '../controllers/verifytoken' );

var api = express.Router();

api.post('/prueba-registro', GeoController.pruebas);
api.post('/geo-registro', GeoController. saveGeolocalizacion);
api.get('/get-registro', GeoController.getLocalizacion);  //agregar verytoken
api.get('/item-grupo', GeoController.getItemGeo);
api.post('/search', GeoController.getSearchGeo);

module.exports = api;
