var controllers = require('./controllers');
var router = require('express').Router();

// Connect dbs methods to their corresponding routes
// router.get('/users', controllers.users.get);

// router.post('/users', controllers.users.post);

router.post('/signup', controllers.users.signup);

router.post('/login', controllers.users.login);

router.get('/itineraries', controllers.itineraries.get);

router.post('/itineraries', controllers.itineraries.post);

router.get('/events', controllers.events.get);

router.post('/events', controllers.events.post);

module.exports = router;