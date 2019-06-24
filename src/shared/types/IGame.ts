import { Types } from 'mongoose'

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
}

export interface IGameDB extends IGame {
  winner?: Types.ObjectId,
  createdBy: Types.ObjectId,
  history: Types.ObjectId[]
}
