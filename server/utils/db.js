const config = require('./config.js')
const mongoose = require('mongoose')
const logger = require('./logger.js')

const opts = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const dbConnection = () => {
  mongoose.set('strictQuery', false)

  const dbURL = config.mongo_url

  mongoose.connect(dbURL, opts)

  const conn = mongoose.connection

  conn.once('open', () => {
    logger.debug(`Database connected: ${dbURL}`)
  })

  conn.on('error', (error) => {
    logger.error(`connection error: ${error}`)
  })
}

module.exports = dbConnection
