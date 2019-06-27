import mongoose, {Schema, Types} from 'mongoose'

import TurnService from '@server/services/turn.service'
import {IGameDB} from '@shared/types'
import TurnModel, { ITurnModel } from './turn.model'

// export interface IGame {
//   timeStarted: Date,
//   isPaused: boolean,
//   isComplete?: boolean,
//   winner?: Types.ObjectId,
//   turnLengthMinutes: number,
//   currentTurn: Types.ObjectId,
//   history: Types.ObjectId[]
//   createdBy: Types.ObjectId,
//   randomEmpires: boolean,
// }
export interface IGameModel extends IGameDB, mongoose.Document {
  start: () => void,
  setTurn: (turn: string) => void,
  advanceTurn: () => void,
}

const gameSchema = new Schema({
  timeStarted: {
    type: Date,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
}, {timestamps: true, toJSON: {virtuals: true}})

// Duplicate the ID field.
gameSchema.virtual('id').get(function() {
  return this._id.toHexString()
})

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

// ? Move Turnservice calls into gameService and pass as args to avoid
// ?   making this method async?
gameSchema.methods.advanceTurn = async function(): Promise<ITurnModel> {
  const turn = await TurnService.getByID(this.currentTurn)
  const nextTurn = await TurnService.create({})
  nextTurn.players = turn.players
  nextTurn.players.forEach((player) => {
    player.moves.forEach((move) => {
      const unit = player.ownedUnits.find((u) => u.location === move.from)
      if (unit) unit.location = move.to
    })
    player.moves = []
  })
  this.currentTurn = nextTurn.id
  this.save()
  return nextTurn
}

export default mongoose.model<IGameModel>('Game', gameSchema)
