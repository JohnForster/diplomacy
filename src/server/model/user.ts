import * as mongoose from 'mongoose'
import * as crypto from 'crypto'

//? Might need to use require here
import uniqueValidator from 'mongoose-unique-validator'
import * as jwt from 'jsonwebtoken'

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
  salt: String
}, {timestamps: true})

userSchema.plugin(uniqueValidator, { message: 'is already taken' })

const generateHash = (password: string, salt: string) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
}

userSchema.methods.setPassword = function(password: string){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = generateHash(password, this.salt);
}

userSchema.methods.validatePassword = function(password: string){
  const hash = generateHash(password, this.salt)
  return this.hash === hash
}

mongoose.model('User', userSchema)

// Can now be accessed anywhere by using mongoose.model('User')