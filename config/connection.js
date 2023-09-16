const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/userDB');

module.exports = connection;
