
import bodyParser from 'body-parser'
import mongoDBStoreConstructor from 'connect-mongodb-session'
import express, {Request, Response} from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import path from 'path'

import gameController from './controllers/game.controller'
import turnController from './controllers/turn.controller'
import userController from './controllers/user.controller'

import setupPassport from './services/passport/passport'

import checkAuthentication, { confirmAuthentication } from './_helpers/checkAuthentication'
import config from './config'

const isDev = process.env.NODE_ENV !== 'production'

// Connect to mongoDB
console.log(config.MONGO_URI)
mongoose.connect(config.MONGO_URI, {useNewUrlParser: true})
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
  collection: 'userSessions',
}, console.log)

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
// Change to use '/api' as well?
setupPassport(app, isDev)

// API Routes
app.use('/api/auth', checkAuthentication, confirmAuthentication)
app.use('/api/game', gameController)
app.use('/api/turn', turnController)
app.use('/api/user', userController)
app.get('/logout', (req: Request, res: Response) => {
  req.logout()
  res.redirect('/')
})

// Front end routes
// const middlePath = isDev ? 'build' : ''
const clientPath = path.join(__dirname, '/client')
app.use(express.static(clientPath))

app.get('*', (req: Request, res: Response) => {
  res.sendFile(`${clientPath}/index.html`)
})

app.listen(config.PORT, () => {
  console.log(`App listening to ${config.PORT}...`)
  console.log(`App available at http://localhost:${config.PORT}`)
  console.log('Press Ctrl+C to quit.')
})

export default app