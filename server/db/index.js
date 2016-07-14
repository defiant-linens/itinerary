var mysql = require('mysql');

exports.connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'wonderwander'
});

connection.connect();

module.exports = connection;