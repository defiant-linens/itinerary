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
  }
});

/************************************************
// User table
************************************************/
var User = sequelize.define('User', {
  name: { 
    type: Sequelize.STRING(25),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
});

/************************************************
// Itinerary table
************************************************/
var Itinerary = sequelize.define('Itinerary', {
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

/************************************************
// Events table
************************************************/
var Event = sequelize.define('Event', {
  day: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false    
  },
  slot: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  snippet: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  review: {
    type: Sequelize.DECIMAL(1,1),
    allowNull: true
  }
});

/************************************************
// Add foreign keys
************************************************/
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
