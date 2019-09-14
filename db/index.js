const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "library.db",
  logging: false
});

const db = {
  sequelize,
  Sequelize,
  Models: {}
};

db.Models.Book = require('./models/book.js')(sequelize);

module.exports = db;
