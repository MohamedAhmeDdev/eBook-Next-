const sequelize = require('sequelize');

const database = new sequelize('ebook', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = database