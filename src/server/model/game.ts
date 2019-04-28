import * as mongoose from 'mongoose'

interface IGame extends mongoose.Document {
  territories: {empire: string, ownedTerritories: string[]}[]
}

const gameSchema: mongoose.Schema = new mongoose.Schema({
  territories:[{
    empire: String,
    ownedTerritories: [String]
  }]
})

export default mongoose.model<IGame>('game', gameSchema)


// Example Schema:

// const userSchema: Schema = new Schema({
//   email: { type: String, index: { unique: true }, required: true },
//   name: { type: String, index: { unique: true }, required: true },
//   password: { type: String, required: true }
// });
