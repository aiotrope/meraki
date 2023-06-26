const express = require('express')

const bookController = require('../controllers/book')

const router = express.Router()

router.get('/', bookController.getAllBooks)

router.post('/', bookController.createBook)

router.get('/:name', bookController.getBook)

module.exports = router
