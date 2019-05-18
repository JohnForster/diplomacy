import mongoose, {Schema, Types} from 'mongoose'

export interface IGame extends mongoose.Document {
  timeStarted: Date,
  isPaused: boolean,
  isComplete?: boolean,
  winner?: Types.ObjectId,
  turnLength: number,
  currentState: Types.ObjectId,
  history: Types.ObjectId[]
}

const gameSchema = new Schema({
  timeStarted: {
    type: Date,
    default: Date.now()
  },
  isPaused: {
    type: Boolean,
    default: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  winner: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  turnLengthMinutes: {
    type: Number,
    default: 2880, // 48 hours
  },
  currentState: Schema.Types.ObjectId, // gameStateID
  history: [Schema.Types.ObjectId], // array of past gameStateIDs
})

const turnSchema = {
  id: String,
  info: {
    phaseNumber: Number,
    year: Number,
    season: String,
    phase: String,
    timeStarted: String,
    timeEnds: String,
    isComplete: Boolean,
  },
  players: {
    0: {
      playerID: String,
      color: String,
      empire: String,
      ownedTerritories: [String],
      ownedUnits: [{
        type: String,
        location: String,
        status: String,
      }],
      moves: [{
        unit: String,
        moveType: String,
        from: String,
        to: String,
        supportFrom: String,
        wasSuccessful: String,
      }], // Array of moveIDs
    },
  },
}

// const gameSchema: mongoose.Schema = new mongoose.Schema({
//   territories: [{
//     empire: String,
//     ownedTerritories: [String],
//   }],
// })

export default mongoose.model<IGame>('game', gameSchema)

// Example Schema:

// const userSchema: Schema = new Schema({
//   email: { type: String, index: { unique: true }, required: true },
//   name: { type: String, index: { unique: true }, required: true },
//   password: { type: String, required: true }
// });


