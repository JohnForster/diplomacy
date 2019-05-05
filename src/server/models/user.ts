import mongoose, {Schema} from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

// Need to include timestamps in interface?
// Create Schema from ES6 class instead of interface?
export interface IUserModel extends mongoose.Document {
  username: string,
  email: string,
  name: string,
  hash: string,
  salt: string,
}

const schema = new Schema({
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

schema.plugin(uniqueValidator, { message: 'is already taken' })

// Means that any virtual properties (eg. full name) will be included in when converting to JSON
// Probably not necessary for this schema, but useful elsewhere.
schema.set('toJSON', { virtuals: true })

export default mongoose.model<IUserModel>('User', schema)
