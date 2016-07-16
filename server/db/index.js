var Sequelize = require('sequelize');
var sequelize = new Sequelize('wonderwander', 'root', null, {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 1000
  },
  define: {
    timestamps: false,
    // allowNull: false // Adds NOT NULL to all values by default
    // notNull: true
  }
});

// var db = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// Router
// var router = require('./routes.js');

// var app = express();
// module.exports.app = app;


// app.set('port', 3000);

// // Clarification on routing -- what does this do?
// // app.use('./', router);

// // Serve the client files
// app.use(express.static('public'));

// Define Tables
var User = sequelize.define('User', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   unique: true,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  name: { 
    type: Sequelize.STRING(25),
    allowNull: false
  }
});

var Itinerary = sequelize.define('Itinerary', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   unique: true,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  location: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  numDays: { 
    type: Sequelize.INTEGER,
    allowNull: false
  },
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
  // id: {
  //   type: Sequelize.INTEGER,
  //   unique: true,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  day: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
});

User.hasMany(Itinerary);

Itinerary.belongsTo(User);

Itinerary.hasMany(Event);

Event.belongsTo(Itinerary);

User.sync();
Event.sync();
Itinerary.sync();

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
});

exports.User = User;
exports.Itinerary = Itinerary;
exports.Event = Event;
// sequelize.sync();

// var mysql = require('mysql');

// var connect = function() {
//   return mysql.createConnection({
//     user: 'root',
//     password: '',
//     database: 'wonderwander'
//   });
// };

// connection.connect();

// module.exports = connection;
// module.exports = {
//   users: {
//     get: function() {
//       var queryStr = 'select name from users';
//       connect().query(queryStr, function(err, results) {
//         if (err) {
//           // do something
//         }
//         res.send(results);
//       });
//     },
//     post: function(params) {
//       var queryStr = 'insert into users(name) value (?)';
//       connect().query(queryStr, params, function(err, results) {
//         if (err) {
//           // do something
//         }
//         res.send('Post for users worked!');
//       });
//     }
//   },
//   itineraries: {
//     get: function() {
//       var queryStr = 'select * from itineraries';
//       connect().query(queryStr, function(err, results) {
//         if (err) {
//           // do something
//         }
//         res.send(results);
//       });
//     },
//     post: function(params) {
//       var queryStr = 'insert into itineraries(name) value (?)';
//       connect().query(queryStr, params, function(err, results) {
//         if (err) {
//           // do something
//         }
//         res.send('Post for users worked!');
//       });
//     }
//   }
// };