const yup = require('yup')

const bookSchema = yup
  .object({
    name: yup.string().trim().min(2).required(),
    author: yup.string().trim().min(2).required(),
    pages: yup.number().positive().required(),
  })
  .required()

const schema = {
  bookSchema,
}

module.exports = schema
