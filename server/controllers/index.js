var db = require('../db');
var parser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var cipher = Promise.promisify(bcrypt.hash);

module.exports = {
  users: {
    get: function(req, res) {
      db.User.findAll({})
      .then(function(users) {
        res.json(users);
      });
    },
    post: function(req, res) {
      cipher(req.body.password, null, null)
      .then(function(hashPassword) {
        db.User.findOrCreate({
          where: {name: req.body.username },
          defaults: {
            name: req.body.username,
            password: hashPassword
          }
        })
        .spread(function(user, created) {
          if(created) {
            console.log('created');
            res.sendStatus(201);
            // Redirect to index?
          } else {
            console.log('user already exists!', user);
            res.sendStatus(403);
            // Possible redirection?
          } 
        });
      })
      .catch(function(err) {
        if (err) {
          console.log('didn\'t work!', err);
        }
      }); // Needed?
    }
  },
  itineraries: {
    get: function(req, res) {
      db.Itinerary.findAll({})
      .then(function(itineraries) {
        res.json(itineraries);
      });
    },
    post: function(req, res) {
      console.log('Incoming post request!');
      db.User.findOne({
        where: {
          name: req.body.user
        }
      })
      .then(function(user) {
        return db.Itinerary.create({
          location: req.body.location,
          UserId: user.dataValues.id,
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
      db.Event.findAll({}).then(function(events) {
        res.json(events);
      });
    },
    post: function(req, res) {
      Itinerary.findOne({
        where: { 
          itinerary: req.body.itinerary
        }
      })
      .then(function(event) {
        db.Event.create({
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
