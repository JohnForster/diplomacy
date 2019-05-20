import bcrypt from 'bcrypt'
import mongoose, {Schema} from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

// Need to include timestamps in interface?
export interface IUserModel extends mongoose.Document {
  username: string,
  email: string,
  name: string,
  hash: string,
  validatePassword: (password: string) => Promise<boolean>,
}

const userSchema = new Schema({
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
}, {timestamps: true})

userSchema.plugin(uniqueValidator, { message: 'is already taken' })

userSchema.methods.validatePassword = async function(password: string) {
  console.log('INSIDE USER.MODEL.VALIDATEPASSWORD')
  const comparison = bcrypt.compare(password, this.hash)
  return comparison
}

// Should possibly move authentication/password setting methods to the usermodel?

// Means that any virtual properties (eg. full name) will be included in when converting to JSON
// Probably not necessary for this schema, but useful elsewhere.
userSchema.set('toJSON', { virtuals: true })

export default mongoose.model<IUserModel>('User', userSchema)
