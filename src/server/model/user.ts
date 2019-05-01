import * as crypto from 'crypto'
import * as mongoose from 'mongoose'

// ? Might need to use require here
import * as jwt from 'jsonwebtoken'
import uniqueValidator from 'mongoose-unique-validator'

const secret = 'secret' // Get from env variable in production

// ? Get Schema from ES6 class?
// https://mongoosejs.com/docs/advanced_schemas.html

const userSchema: mongoose.Schema = new mongoose.Schema({
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

userSchema.plugin(uniqueValidator, { message: 'is already taken' })

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
  }, secret)
}

userSchema.methods.toAuthJSON = function() {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    image: this.image,
  }
}

mongoose.model('User', userSchema)

// Can now be accessed anywhere by using mongoose.model('User')
