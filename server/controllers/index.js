var db = require('../db');
var util = require('../lib/util.js')
var parser = require('body-parser');
// var express = require('express');
// var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var cipher = Promise.promisify(bcrypt.hash);

// var createSession = function(req, res, newUser) {
//   return req.session.regenerate(function() {
//     console.log(req.session);
//     req.session.user = newUser;
//     res.redirect('/');
//   })
// }

module.exports = {
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
    // getAll: function(req, res) {
    //   db.User.findAll({})
    //   .then(function(users) {
    //     res.json(users);
    //   });
    // },
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
      })
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
        console.log(user.dataValues.id);
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
