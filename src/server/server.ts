import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import config from './config'
import routes from './routes.ignore'

const isDev = process.env.NODE_ENV !== 'production'

// Connect to mongoDB
mongoose.connect(config.MONGO_URI)
mongoose.connection.on('error', (err) => {
  console.log('Something went wrong connecting to mongoDB!')
  console.log(err)
})

// Start the App
const app = express()

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())

// Set up routes
routes(app, isDev)

app.listen(config.LISTEN_PORT, () => {
  console.log(`App listening to ${config.LISTEN_PORT}...`)
  console.log('Press Ctrl+C to quit.')
})

export default app
