var db = require('./db');
var router = require('express').Router();

// Connect dbs methods to their corresponding routes
router.get('/users', db.users.get);

router.post('/users', db.users.post);

router.get('/itineraries', db.itineraries.get);

router.post('/itineraries', db.itineraries.post);

router.get('/events', db.events.get);

router.post('/events', db.events.post);

module.exports = router;