var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('wonderwander', 'root', null, {
  dialect: 'mysql',
  host: 'localhost',
  port: 3000,
  allowNull: false // Adds NOT NULL to all values by default
});

// Router
// var router = require('./routes.js');

var app = express();
module.exports.app = app;


app.set('port', 3000);

// Clarification on routing -- what does this do?
// app.use('./', router);

// Serve the client files
app.use(express.static('public'));

// Define Tables
var User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { 
    type: Sequelize.STRING(25)
  }
});

var Itinerary = sequelize.define('Itinerary', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  location: Sequelize.STRING(100),
  numDays: Sequelize.INTEGER,
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  overview: {
    type: Sequelize.TEXT('long'),
    allowNull: true
  }
});

var Event = sequelize.define('Event', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  day: Sequelize.INTEGER,
  location: Sequelize.STRING(100)
});

User.hasMany(Itinerary);

Itinerary.belongsTo(User);

Itinerary.hasMany(Event);

Event.belongsTo(Itinerary);




// Routes

// GET - all users
app.get('/user', function(req, res) {
  User.findAll({}).then(function(users) {
    res.send(users);
  });
});

// POST - add user
app.post('/user', function(req, res) {
  User.create({name: req.body.name}).then(function(users) {
    res.send(users);
  });
});

// GET - all itineraries
app.get('/itinerary', function(req, res) {
  Itinerary.findAll({}).then(function(itineraries) {
    res.send(itineraries);
  });
});

app.post('/itinerary', function(req, res) {
  User.findOne({
    where: {
      name: req.body.user
    }
  }).
  then(function(user) {
    return Itinerary.create({
      location: req.body.location,
      userId: user.get('id'),
      numDays: req.body.numDays,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      overview: req.body.overview
    })
  })
  .then(function(users) {
    res.send(users);
  });
});

// GET - all events
app.get('/event', function(req, res) {
  Event.findAll({}).then(function(events) {
    res.send(events);
  });
});

// POST - add event
app.post('/event', function(req, res) {
  Itinerary.findOne({
    where: { req.body.itinerary }
  })
  .then(function(event) {
    Event.create({
      day: req.body.day,
      location: req.body.location,
      itineraryId: event.get('id')
    })
  })
  .then(function(users) {
    res.send(users);
  });
});



var url = process.env.PORT || 3000;
app.listen(url, function () {
  app.listen(3000);
  console.log('Example app listening on port 3000!');
});


