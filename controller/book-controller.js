const Book = require('../models/book');

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