const db = require("./db");
const { Book } = db.Models;
(async () => {
  try {
    await db.sequelize.sync({ force: true });
    const booksInstances = await Promise.all([
      Book.create({
        title: "Bible",
        author: "God",
        genre: "Religious",
        year: "0000"
      }),
      Book.create({
        title: "JavaScript",
        author: "Bassie Bangura",
        genre: "Programming",
        year: "2019"
      }),
      Book.create({
        title: "CSS",
        author: "Shabreya Rhodes",
        genre: "Programming",
        year: "2020"
      })
    ]);

    const booksJSON = booksInstances.map(book => book.toJSON());
    console.log(booksJSON);
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();
