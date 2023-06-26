const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'Books',
  }
)

BookSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book
