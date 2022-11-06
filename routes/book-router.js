const express = require('express');

const bookController = require('../controller/book-controller');

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);

module.exports = router;