const Book = require('../models/book');
const sequelize = require('../util/databse');
const Op = sequelize.Sequelize.Op;

exports.getAllBooks = (req, res, next) => {
    Book.findAll().then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send("Error occured");
    });
};

exports.getBook = (req, res, next) => {
    const id = req.params.id;
    Book.findByPk(id).then(result => {
        if (result) {
            res.send(result);
          } else {
            res.status(404).send({
              message: `Cannot find Book with id=${id}.`
            });
        }
    }).catch(error => {
        console.log(error);
        res.send("Error occured");
    });
};

exports.createBook = (req, res, next) => {
    Book.create(req.body).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send("Error occured");
    });
};

exports.updateBook = (req, res, next) => {
    const id = req.params.id;
    Book.update(req.body, {
        where : {id: id}
    }).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send("Error occured");
    });
};

exports.deleteBook = (req, res, next) => {
    const id = req.params.id;

    Book.destroy({ where: {id: id}}).then(result => {
        if (result === 1) {
            res.send("Deleted successfully");
        } else {
            res.status(404).send({
                message: `Cannot find Book with id=${id}.`
            });
        }
    }).catch(error => {
        console.log(error);
        res.send("Error occured");
    });
};

exports.findByTitle = (req, res, next) => {
    const title = req.params.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Book.findAll({ where: condition }).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send("Error occured");
    });
};

exports.findByAuthor = (req, res, next) => {
    const author = req.params.author;
    var condition = author ? { author: { [Op.like]: `%${author}%` } } : null;
    Book.findAll({ where: condition }).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send("Error occured");
    });
};