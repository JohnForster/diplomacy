import mongoose, {Schema, Types} from 'mongoose'

import TurnService from '@server/services/turn.service'
import {IGameDB} from '@shared/types'
import TurnModel, { ITurnModel } from './turn.model'
import { types } from 'node-sass'

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
  start: (this: IGameModel, turnId: string) => Promise<boolean>,
  setTurn: (this: IGameModel, turnId: string) => void,
  advanceTurn: (this: IGameModel) => void,
  addToHistory: (this: IGameModel, turnId: string) => void,
}

const gameSchema = new Schema<IGameModel>({
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
  }], // array of past gameTurnIDs
  currentPlayerIds: {
    type: [Schema.Types.ObjectId],
    default() { return [this.createdBy] },
  },
  colours: {
    type: Map,
    of: String
  }, // colours: {'England': '15', 'Germany': '16'}
}, {timestamps: true, toJSON: {virtuals: true}})

// Duplicate the ID field.
gameSchema.virtual('id').get(function() {
  return this._id.toHexString()
})

// TODO Move most logic to game service
// gameSchema.methods.start = async function(turn: ITurnModel): Promise<boolean> {
//   if (turn.isReadyToStart()) {
//     this.isPaused = false
//     this.currentTurn = turn.id
//     this.timeStarted = new Date()
//     return true
//   }
//   throw new Error('Game is not ready to start')
// }

gameSchema.methods.setTurn = function(turnID: string): void {
  if (this.currentTurn) throw new Error('Game already has a turn in progress')
  this.currentTurn = turnID
}

// // ? Move Turnservice calls into gameService and pass as args to avoid
// // ?   making this method async?
// gameSchema.methods.advanceTurn = async function(): Promise<ITurnModel> {
//   const turn = await TurnService.getByID(this.currentTurn)
//   // ! Phase is currently hard coded as 'Move'
//   const nextTurn = await TurnService.create({phase: 'movement'})
//   nextTurn.players = turn.players
//   nextTurn.players.forEach((player) => {
//     player.moves.forEach((move) => {
//       const unit = player.ownedUnits.find((u) => u.location === move.from)
//       if (unit) unit.location = move.to
//     })
//     player.moves = []
//   })
//   this.currentTurn = nextTurn.id
//   this.save()
//   return nextTurn
// }

gameSchema.methods.addToHistory = async function(id: string): Promise<void> {
  this.history.push(Types.ObjectId(id))
  this.save()
}

export default mongoose.model<IGameModel>('Game', gameSchema)
