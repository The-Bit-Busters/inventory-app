const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Item = sequelize.define("items", {
  title: Sequelize.STRING,
  price: Sequelize.INTEGER,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item,
};
