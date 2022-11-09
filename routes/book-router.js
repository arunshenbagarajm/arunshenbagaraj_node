const express = require('express');

const bookController = require('../controller/book-controller');

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.get('/title/:title', bookController.findByTitle);
router.get('/author/:author', bookController.findByAuthor);

module.exports = router;