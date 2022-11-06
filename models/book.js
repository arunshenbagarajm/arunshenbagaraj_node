const Sequelize = require('sequelize');

const sequelize = require('../util/databse');

const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    isbn: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER
    },
    author: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    }
});

module.exports = Book;