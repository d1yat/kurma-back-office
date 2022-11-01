const { Sequelize } = require('sequelize');

const database = new Sequelize('kurmadb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { db: database }
