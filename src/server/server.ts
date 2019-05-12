import bodyParser from 'body-parser'
import mongoDBStoreConstructor from 'connect-mongodb-session'
import express from 'express' 
import session from 'express-session'
import mongoose from 'mongoose'
import path from 'path'

import config from './config'
import routes from './routes'
import setupPassport from './services/passport'

const isDev = process.env.NODE_ENV !== 'production'

// Connect to mongoDB
mongoose.connect(config.MONGO_URI)
mongoose.connection.on('error', (err) => {
  console.log('Something went wrong connecting to mongoDB!')
  console.log(err)
})

// Start the App
const app = express()

// Set up MongoDB for sessions
const MongoDBStore = mongoDBStoreConstructor(session)
const mongoDBStore = new MongoDBStore({
  uri: config.MONGO_URI,
  databaseName: 'diplomacy',
  collection: 'userSessions',
}, (err) => {
  if (err) console.log(err)
})

app.use(session({
  secret: config.TOKEN_SECRET,
  store: mongoDBStore,
  // ? Why the below options?
  resave: false,
  saveUninitialized: true,
}))

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())

// Setup passport
setupPassport(app, isDev)

// Set up routes
routes(app, isDev)

app.listen(config.LISTEN_PORT, () => {
  console.log(`App listening to ${config.LISTEN_PORT}...`)
  console.log('Press Ctrl+C to quit.')
})

export default app
