import { Types } from 'mongoose'
import Nation from './enums/Nation';

interface IGame {
  timeStarted: Date,
  isPaused: boolean,
  isComplete?: boolean,
  turnLengthMinutes: number,
  currentTurn: string,
  randomEmpires: boolean,
}

export interface IGameJSON extends IGame {
  _id: string
  winner?: string,
  createdBy: string,
  history: string[]
  players: {playerId: string, colour: string, empire: Nation}[]
  colours: {[id: string]: string},
}

export interface IGameDB extends IGame {
  winner?: Types.ObjectId,
  createdBy: Types.ObjectId,
  history: Types.ObjectId[]
  players: {playerId: Types.ObjectId, colour: string, empire: Nation}[]
}
