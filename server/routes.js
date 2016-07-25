var controllers = require('./controllers');
var router = require('express').Router();
var util = require('./lib/util.js');

// Connect dbs methods to their corresponding routes

router.post('/signup', controllers.users.signup);

router.post('/login', controllers.users.login);

router.get('/logout', controllers.users.logout);

router.get('/itineraries', util.checkUser, controllers.itineraries.get);

router.post('/itineraries', util.checkUser, controllers.itineraries.post);

router.get('/userItineraries', util.checkUser, controllers.itineraries.getUserItineraries);

router.post('/itinerary', util.checkUser, controllers.itinerary.post);

router.post('/save', util.checkUser, controllers.save.post);

router.get('/events', util.checkUser, controllers.events.get);

router.post('/events', util.checkUser, controllers.events.post);

module.exports = router;
