import mongoose, {Schema, Types} from 'mongoose'
import {defaultColours, startingTerritories, startingUnits} from '../data/initialState'

import { IGameTurnDB, IMove, IPlayerStateDB } from 'jfdiplomacy-shared/types'

import shuffle from 'lodash.shuffle'
import validateMove from 'jfdiplomacy-shared/helpers/validateMove';
import toJSON from 'jfdiplomacy-shared/helpers/toJSON';

export interface ITurnModel extends mongoose.Document, IGameTurnDB {
  isReadyToStart: () => boolean,
  getMoves: (id: any) => IMove[],
  addMoves: (playerID: any, moves: IMove[]) => void,
  addPlayer: (playerID: string, empire?: string) => void,
  start: () => void,

  randomiseEmpires: () => void,
}

const playerSchema = new Schema({
  playerID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  colour: String,
  empire: String,
  ownedTerritories: [String],
  ownedUnits: [{
    unitType: String,
    location: String,
    status: String,
  }],
  moves: [{
    unitType: String,
    moveType: String,
    from: String,
    to: String,
    supportFrom: String,
    wasSuccessful: Boolean,
  }], // Array of moveIDs
}, {toJSON: {virtuals: true}})

const turnSchema = new Schema({
  info: {
    phaseNumber: Number,
    year: Number,
    season: String,
    phase: String, // 'Move', 'Retreat' or 'Build'
    timeStarted: {
      type: Date,
      default: Date.now(),
    },
    timeEnds: {
      type: Date,
      default: Date.now() + (2880 * 60),
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  players: [playerSchema],
}, {toJSON: {virtuals: true}})

turnSchema.methods.isReadyToStart = function(): boolean {
  // Make more complex, to specify the reason the game cannot begin.
  if (
    this.players.length === 7
    && this.players.every((player: IPlayerStateDB) => !!player.empire)
  ) return true
  return false
}

turnSchema.methods.getMoves = function(playerID: any): IMove[] {
  const player: IPlayerStateDB = this.players.find((p: any) => p.playerID.equals(playerID))
  return player.moves
}

turnSchema.methods.addMoves = function(playerID: Types.ObjectId, moves: IMove[]): void {
  if (!moves.every((move) => {
    return validateMove(toJSON(this), move, playerID.toString())
  })) {
    console.error('Submitted move is not valid!')
    console.error(moves.filter(move => !validateMove(toJSON(this), move, playerID.toString())))
    return
  }

  const player = this.players.find((p: ITurnModel['players'][0]) => {
    return p.playerID.equals(playerID)
  })
  player.moves = moves
  this.save()
}

// Will need separate replace player function?
// Will need to edit this function to accept choosing a color.
turnSchema.methods.addPlayer = function(playerID: string, colour?: string) {
  if (this.players.length > 7) throw new Error ('Game is full!')
  if (colour && this.players.find((player: IPlayerStateDB) => player.colour === colour)) {
    throw new Error (`Colour ${colour} is already taken`)
  }
  this.players.push({
    playerID,
    colour,
  })
  this.save()
}

turnSchema.methods.start = function() {
  this.timeStarted = Date.now()
  // set end date? Maybe make end date a virtual?
  this.players.forEach((player: IPlayerStateDB) => {
    player.ownedTerritories = startingTerritories[player.empire]
    player.ownedUnits = startingUnits[player.empire]
    player.colour = player.colour || defaultColours[player.empire]
  })
  this.info.phaseNumber = 0
  this.info.year = 1901
  this.info.season = 'Spring'
  this.info.phase = 'movement'
  console.log('saving turn...')
  this.save()
}

turnSchema.methods.randomiseEmpires = async function() {
  console.log('Randomising empires...')
  const empires = shuffle(['England', 'France', 'Germany', 'Italy', 'Austria', 'Russia', 'Turkey'])
  this.players.forEach((player: IPlayerStateDB) => {
    player.empire = empires.pop()
  })
  return this.save()
}

export default mongoose.model<ITurnModel>('Turn', turnSchema)
