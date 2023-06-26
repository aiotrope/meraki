const express = require('express')
require('express-async-errors')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')

const dbConnection = require('./utils/db')
const middlewares = require('./utils/middlewares')

const bookRouter = require('./routes/book')

const app = express()

dbConnection()

app.use(express.static('../client/build'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
  let options = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  }
  app.use(cors(options))
}

app.use(cors())

app.use(helmet())

app.use(require('sanitize').middleware)

app.use(mongoSanitize())

app.use(middlewares.loggingMiddleware)

app.use('/api/book', bookRouter)

app.use(middlewares.endPoint404)

app.use(middlewares.errorHandler)

module.exports = app
