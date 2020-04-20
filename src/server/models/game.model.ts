import mongoose, {Schema, Types} from 'mongoose'

import TurnService from '@server/services/turn.service'
import {IGameDB} from '@shared/types'
import TurnModel, { ITurnModel } from './turn.model'
import { types } from 'node-sass'
import Nation from '@shared/types/enums/Nation'
import shuffle from 'lodash.shuffle'

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
  addPlayer: (this: IGameModel, playerId: string, {empire, colour}: {empire?: Nation, colour?: string}) => void,
  setPlayerDetails: (this: IGameModel, playerId: string, {empire, colour}: {empire?: Nation, colour?: string}) => void,
  randomiseEmpires: (this: IGameModel) =>  void, 
}

const playerSchema = new Schema({
  playerId: Schema.Types.ObjectId,
  Nation: String,
  colour: String,
})

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
  // combine these?
  players: [playerSchema]
  // currentPlayerIds: [Schema.Types.ObjectId],
  // colours: {
  //   type: Map,
  //   of: String,
  //   default: new Map()
  // }, // colours: {'playerId1': '15', 'playerId2': '16'}
}, {timestamps: true, toJSON: {virtuals: true}})

// Duplicate the ID field.
gameSchema.virtual('id').get(function() {
  return this._id.toHexString()
})

//? How to set empires
gameSchema.methods.addPlayer = async function(playerId: string, {colour, empire}: {colour?: string, empire?: Nation}) {
  console.log('Adding player... playerId, colour:', playerId, colour)
  const playerIdObj = mongoose.Types.ObjectId(playerId)
  if(this.players.find(p => p.playerId.toHexString() === playerId)) return Promise.reject(`This player is already in the game`)
  this.players.push({
    playerId: playerIdObj,
    colour,
    empire,
  })
  await this.save()
}

gameSchema.methods.randomiseEmpires = async function() {
  console.log('Randomising empires...')
  const empires: Nation[] = shuffle(['England', 'France', 'Germany', 'Italy', 'Austria', 'Russia', 'Turkey'])
  // this.players.forEach(p => {
  //   console.log('setting p.empire')
  //   p.empire = empires.pop()
  //   console.log(p.empire)
  // })
  // this.players = this.players.map(p => ({...p, empire: empires.pop()}))
  this.players.forEach(p => {
    console.log(p.colour)
    p.empire = empires.pop()
  })
  console.log(JSON.stringify(this.players, null, 2))
  await this.save()
}

gameSchema.methods.setPlayerDetails = async function(playerId: string, {colour, empire}: {colour?: string, empire?: Nation} = {}) {
  const player = this.players.find(p => p.id.toHexString() === playerId)
  if (!player) return Promise.reject(`No player found with id ${playerId} in game ${this.id}`)
  player.colour = colour
  player.empire = empire
  await this.save()
}

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

gameSchema.methods.setTurn = async function(turnID: string): Promise<void> {
  if (this.currentTurn) throw new Error('Game already has a turn in progress')
  this.currentTurn = turnID
  await this.save()
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
  await this.save()
}

export default mongoose.model<IGameModel>('Game', gameSchema)
