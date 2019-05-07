import bodyParser from 'body-parser'
import mongoDBStoreConstructor from 'connect-mongodb-session'
import express, {Request, Response, RequestHandler} from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import path from 'path'

import jwt from './_helpers/jwt'
import config from './config'
import routes from './routes'

const isDev = process.env.NODE_ENV !== 'production'

// Connect to mongoDB
mongoose.connect(config.MONGO_URI)
mongoose.connection.on('error', (err) => {
  console.log('Something went wrong connecting to mongoDB!')
  console.log(err)
})

// Start the App
const app = express()

const MongoDBStore = mongoDBStoreConstructor(session)
const mongoDBStore = new MongoDBStore({
  uri: config.MONGO_URI,
  databaseName: 'diplomacy', 
  collection: 'userSessions',
}, (error) => { console.log(error) })

// TODO https://medium.com/@evangow/server-authentication-basics-express-sessions-passport-and-curl-359b7456003d
app.use(session({
  secret: config.TOKEN_SECRET,
  store: mongoDBStore,
  // ? Why the below options?
  resave: false,
  saveUninitialized: true,
}))

// Need to set up session store
// TODO https://www.npmjs.com/package/connect-mongodb-session

// Ensure JWT auth with app.use(jwt())
// app.use(jwt())

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
