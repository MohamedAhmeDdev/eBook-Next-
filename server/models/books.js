const { DataTypes } = require("sequelize")
const database = require("../database")


const Book = database.define('ebook', {
    bookImage: {
        type: DataTypes.STRING
    },
    bookName: {
        type: DataTypes.STRING
    },
    BookAuthor: {
        type: DataTypes.STRING
    },
    BookDescription: {
        type: DataTypes.STRING
    },
    BookPrice: {
        type: DataTypes.STRING
    },
    BookType: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

module.exports = Book