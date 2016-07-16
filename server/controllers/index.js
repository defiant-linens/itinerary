var db = require('../db');
var parser = require('body-parser');

module.exports = {
  users: {
    get: function(req, res) {
      User.findAll({})
      .then(function(users) {
        res.send(users);
      });
    },
    post: function(req, res) {
      User.create({name: req.body.name})
      .then(function(users) {
        res.send(users);
      });
    }
  },
  itineraries: {
    get: function(req, res) {
      Itinerary.findAll({})
      .then(function(itineraries) {
        res.send(itineraries);
      });
    },
    post: function(req, res) {
      User.findOne({
        where: {
          name: req.body.user
        }
      })
      .then(function(user) {
        return Itinerary.create({
          location: req.body.location,
          userId: user.get('id'),
          numDays: req.body.numDays,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          overview: req.body.overview
        });
      })
      .then(function(users) {
        res.send(users);
      });
    }
  },
  events: {
    get: function(req, res) {
      Event.findAll({}).then(function(events) {
        res.send(events);
      });
    },
    post: function(req, res) {
      Itinerary.findOne({
        where: { 
          itinerary: req.body.itinerary
        }
      })
      .then(function(event) {
        Event.create({
          day: req.body.day,
          location: req.body.location,
          itineraryId: event.get('id')
        });
      })
      .then(function(users) {
        res.send(users);
      });
    }
  }
};