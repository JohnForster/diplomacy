import * as crypto from 'crypto'
import * as mongoose from 'mongoose'

// ? Might need to use require here
import * as jwt from 'jsonwebtoken'

import config from '../config'

const secret = 'secret' // Get from env variable in production
let uniqueValidator
// ? Get Schema from ES6 class?
// https://mongoosejs.com/docs/advanced_schemas.html

//? Second opinion on creating users
// https://dzone.com/articles/using-mongodb-and-mongoose

const Schema: mongoose.Schema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, 'Can\'t be blank'],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Can\'t be blank'],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    unique: true,
  },
  name: String,
  hash: String,
  salt: String,
}, {timestamps: true})

Schema.plugin(uniqueValidator, { message: 'is already taken' })

export default mongoose.model('User', Schema)
// Can now be accessed anywhere by using mongoose.model('User')

// ! Ignore the below, compare later with services/user
// ! Remove when no longer of interest

const userSchema: any = {}
const generateHash = (password: string, salt: string) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
}

userSchema.methods.setPassword = function(password: string) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = generateHash(password, this.salt)
}

userSchema.methods.validatePassword = function(password: string) {
  const hash = generateHash(password, this.salt)
  return this.hash === hash
}

userSchema.methods.generateJWT = function() {
  const today = new Date()
  const exp = new Date(today)
  exp.setDate(today.getDate() + 60)
  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: exp.getTime() / 1000,
  }, config.TOKEN_SECRET)
}

userSchema.methods.toAuthJSON = function() {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    image: this.image,
  }
}
