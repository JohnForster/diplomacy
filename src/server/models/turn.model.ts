import mongoose, {Schema, Types} from 'mongoose'
import {startingTerritories, startingUnits, defaultColours} from '../../../data/initialState'
import { IMove, IPlayerState } from './types'

import shuffle from 'lodash/shuffle'

export interface ITurnModel extends mongoose.Document {
  info: {
    phaseNumber: number,
    year: number,
    season: string,
    phase: string,
    timeStarted: number,
    timeEnds: string,
    isComplete: boolean,
  },
  players: IPlayerState[],
  isReadyToStart: () => boolean,
  getMoves: (id: any) => IMove[],
  addMoves: (playerID: any, moves: IMove[]) => void,
  addPlayer: (playerID: string, empire?: string) => void,
  start: () => void,
  randomiseEmpires: () => void,
}

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
  players: [{
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
  }],
})

turnSchema.methods.isReadyToStart = function(): boolean {
  // Make more complex, to specify the reason the game cannot begin.
  if (
    this.players.length === 7
    && this.players.every((player: IPlayerState) => !!player.empire)
  ) return true
  return false
}

turnSchema.methods.getMoves = function(playerID: any): IMove[] {
  const player: IPlayerState = this.players.find((p: IPlayerState) => {
    return p.playerID === playerID
  })
  return player.moves
}

turnSchema.methods.addMoves = function(playerID: any, moves: IMove[]): void {
  const player = this.players.find((p: IPlayerState) => p.playerID === playerID)
  moves.forEach((move) => {
    player.moves.push(move)
  })
  this.save()
}

// Will need separate replace player function?
// Will need to edit this function to accept choosing a color.
turnSchema.methods.addPlayer = function(playerID: string, colour?: string) {
  if (this.players.length > 7) throw new Error ('Game is full!')
  if (colour && this.players.find((player: IPlayerState) => player.colour === colour)) {
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
  this.players.forEach((player: IPlayerState) => {
    player.ownedTerritories = startingTerritories[player.empire]
    player.ownedUnits = startingUnits[player.empire]
    player.colour = player.colour || defaultColours[player.empire]
  })
  this.phaseNumber = 0
  this.year = 1901
  this.season = 'Spring'
  this.phase = 'Move'
  this.save()
}

turnSchema.methods.randomiseEmpires = async function() {
  console.log('Randomising empires...')
  const empires = shuffle(['England', 'France', 'Germany', 'Italy', 'Austria', 'Russia', 'Turkey'])
  this.players.forEach((player: IPlayerState) => {
    player.empire = empires.pop()
  })
  return this.save()
}

export default mongoose.model<ITurnModel>('Turn', turnSchema)
