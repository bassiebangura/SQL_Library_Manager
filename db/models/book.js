const Sequelize = require("sequelize");

//books model
module.exports = sequelize => {
  class Book extends Sequelize.Model {}
  Book.init(
    {
      title: {
        type: String,
        allowNull: false
      },
      author: {
        type: String,
        allowNull: false
      },
      genre: Sequelize.STRING,
      year: Sequelize.INTEGER
    },
    { sequelize }
  );

  return Book;
};
