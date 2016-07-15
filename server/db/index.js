var mysql = require('mysql');

var connect = function() {
  return mysql.createConnection({
    user: 'root',
    password: '',
    database: 'wonderwander'
  });
};

// connection.connect();

// module.exports = connection;
module.exports = {
  users: {
    get: function() {
      var queryStr = 'select name from users';
      connect().query(queryStr, function(err, results) {
        if (err) {
          // do something
        }
        res.send(results);
      });
    },
    post: function(params) {
      var queryStr = 'insert into users(name) value (?)';
      connect().query(queryStr, params, function(err, results) {
        if (err) {
          // do something
        }
        res.send('Post for users worked!');
      });
    }
  },
  itineraries: {
    get: function() {
      var queryStr = 'select * from itineraries';
      connect().query(queryStr, function(err, results) {
        if (err) {
          // do something
        }
        res.send(results);
      });
    },
    post: function(params) {
      var queryStr = 'insert into itineraries(name) value (?)';
      connect().query(queryStr, params, function(err, results) {
        if (err) {
          // do something
        }
        res.send('Post for users worked!');
      });
    }
  }
};