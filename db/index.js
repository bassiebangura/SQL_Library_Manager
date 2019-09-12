const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "library.db"
});

const db = {
  sequelize,
  Sequelize
};


module.exports = db;
