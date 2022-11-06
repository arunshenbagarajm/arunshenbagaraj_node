const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./util/databse');

const bookRoutes = require('./routes/book-router');

const app = express();


app.use(bodyParser.json());
app.use('/book', bookRoutes);


sequelize.sync();

const server = app.listen(8080);