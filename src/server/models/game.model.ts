import mongoose, {Schema, Types} from 'mongoose'

import TurnModel, { ITurnModel } from './turn.model'
export interface IGameModel extends mongoose.Document {
  timeStarted: Date,
  isPaused: boolean,
  isComplete?: boolean,
  winner?: Types.ObjectId,
  turnLengthMinutes: number,
  currentTurn: Types.ObjectId,
  history: Types.ObjectId[]
  createdBy: Types.ObjectId,
  randomEmpires: boolean,
  start: () => void,
  setTurn: (turn: ITurnModel) => void,
}

const gameSchema = new Schema({
  timeStarted: {
    type: Date,
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
    ref: 'User',
  },
  turnLengthMinutes: {
    type: Number,
    default: 2880, // 48 hours
  },
  randomEmpires: {
    type: Boolean,
    default: true,
  },
  currentTurn: {
    type: Schema.Types.ObjectId,
    ref: 'Turn',
  }, // gameStateID
  history: [{
    type: Schema.Types.ObjectId,
    ref: 'Turn',
  }], // array of past gameStateIDs
}, {timestamps: true})

gameSchema.methods.start = async function(turn: ITurnModel): Promise<boolean> {
  if (turn.isReadyToStart()) {
    this.isPaused = false
    this.currentTurn = turn.id
    this.timeStarted = Date.now()
    return true
  }
  throw new Error('Game is not ready to start')
}

gameSchema.methods.setTurn = function(turnID: string): void {
  if (this.currentTurn) throw new Error('Game already has a turn in progress')
  this.currentTurn = turnID
}

export default mongoose.model<IGameModel>('Game', gameSchema)
