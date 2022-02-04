const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://postgres:postgres@localhost:5432/messenger",
  {
    dialect: "postgres",
    logging: false
  }
);

module.exports = db;
