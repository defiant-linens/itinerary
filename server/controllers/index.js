var db = require('../db');
var util = require('../lib/util.js');
var parser = require('body-parser');
// var express = require('express');
// var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var requestYelp = require('./yelp').requestYelp;
var cipher = Promise.promisify(bcrypt.hash);

// var createSession = function(req, res, newUser) {
//   return req.session.regenerate(function() {
//     console.log(req.session);
//     req.session.user = newUser;
//     res.redirect('/');
//   })
// }

module.exports = {
  
  /************************************************
  // Requests to /users
  ************************************************/
  users: {
    login: function(req, res) {
      db.User.findOne({ where: { name: req.body.username } })
      .then(function(user) {
        if (!user) {
          console.log('user does not exist!');
          return;
        }
        bcrypt.compare(req.body.password, user.dataValues.password, function(err, match) {
          if (match) {
            console.log('login successful');
            util.createSession(req, res, user);
          } else {
            console.log('password incorrect');
          }
        });
      });
    },

    signup: function(req, res) {
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
            util.createSession(req, res, user);
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
    },

    logout: function(req, res) {
      req.session.destroy(function(err) {
        if (err) { console.log(err); }
        else {
          console.log('logout', req.session);
          console.log('logout successful');
          res.sendStatus(200);
        }
      });
    }
  },


  /************************************************
  // Requests to /itineraries
  ************************************************/
  itineraries: {
    get: function(req, res) {
      db.Itinerary.findAll({include: [db.User]})
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
      .then(function(itinerary) {
        var resObj = {
          id: itinerary.dataValues.id
        };
        res.send(resObj);
      });
    },
    getUserItineraries: function(req, res) {
      console.log('in userItins', req.body);
      db.User.findOne({
        where: {
          name: req.body.user
        }
      })
      .then(function(user) {
        console.log('user', user);
        db.Itinerary.findAll({
          where: {
            UserId: user.dataValues.id
          },
          include: [db.User]
        })
        .then(function(itineraries) {
          res.json(itineraries);
        });
      })
    }
  },

  /************************************************
  // Requests to /itinerary
  ************************************************/
  itinerary: {
    post: function(req, res) {
      db.Itinerary.findOne({where: {id: req.body.id}})
      .then(function(itinerary) {
        res.json(itinerary);
      });
    }
  },

  /************************************************
  // Requests to /events
  ************************************************/
  events: {
    get: function(req, res) {
      db.Event.findAll({}).then(function(events) {
        res.json(events);
      });
    },
    post: function(req, res) {
      var response = {};
      var location = req.body.location.trim().split(' ').join('+');
      console.log(location);
      var options = {
        location: location,
        limit: 20,
        category_filter: 'landmarks,tours,arts'
      };
      requestYelp(options, function(err, resp, body) {
        response.eventsFromYelp = JSON.parse(body).businesses;
        db.Event.findAll({where: {location: req.body.location}})
        .then(function(dbEvents) {
          response.eventsFromDb = dbEvents.dataValues;
          res.json(response);
        });
      });
    }
  },

  /************************************************
  // Requests to /save
  ************************************************/  
  save: {
    post: function(req, res) {
      db.Itinerary.findOne({where: {id: req.body.id}})
      .then(function(itinerary) {
        req.body.events.forEach(function(event) {
          return db.Event.create({
            day: event.day,
            location: event.location,
            name: event.name,
            slot: event.slot,
            image: event.image,
            url: event.url,
            snippet: event.snippet,
            review: event.review,
            ItineraryId: itinerary.dataValues.id
          });
        });
      })
      .then(function() {
        res.send('Events posted!');
      });
    }
  }
};
