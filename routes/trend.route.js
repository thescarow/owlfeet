const express = require('express')
const router = express.Router()
// const Book = require('../models/post')

router.get('/', async (req, res) => {
  // let books
  // try {
  //   books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec()
  // } catch {
  //   books = []
  // }
  // res.render('index', { books: books })
 
  res.render('index')
})

module.exports = router