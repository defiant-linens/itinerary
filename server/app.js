var express = require('express');
var session = require('express-session');
var db = require('./db');

// Middleware
var parser = require('body-parser');

// Routes
var router = require('./routes.js');

var app = express();
module.exports.app = app;

app.use(parser.json());

app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../public'));

var url = process.env.PORT || 3000;
app.listen(url, function () {
  console.log('Example app listening on port 3000!');
});

// // GET - all users
// app.get('/user', function(req, res) {
//   User.findAll({}).then(function(users) {
//     res.send(users);
//   });
// });

// // POST - add user
// app.post('/user', function(req, res) {
//   User.create({name: req.body.name}).then(function(users) {
//     res.send(users);
//   });
// });

// // GET - all itineraries
// app.get('/itinerary', function(req, res) {
//   Itinerary.findAll({}).then(function(itineraries) {
//     res.send(itineraries);
//   });
// });

// app.post('/itinerary', function(req, res) {
//   User.findOne({
//     where: {
//       name: req.body.user
//     }
//   }).
//   then(function(user) {
//     return Itinerary.create({
//       location: req.body.location,
//       userId: user.get('id'),
//       numDays: req.body.numDays,
//       startDate: req.body.startDate,
//       endDate: req.body.endDate,
//       overview: req.body.overview
//     });
//   })
//   .then(function(users) {
//     res.send(users);
//   });
// });

// // GET - all events
// app.get('/event', function(req, res) {
//   Event.findAll({}).then(function(events) {
//     res.send(events);
//   });
// });

// // POST - add event
// app.post('/event', function(req, res) {
//   Itinerary.findOne({
//     where: { 
//       itinerary: req.body.itinerary }
//   })
//   .then(function(event) {
//     Event.create({
//       day: req.body.day,
//       location: req.body.location,
//       itineraryId: event.get('id')
//     });
//   })
//   .then(function(users) {
//     res.send(users);
//   });
// });

