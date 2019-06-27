import { Types } from 'mongoose'
import { IPlayerStateDB, IPlayerStateJSON } from './IPlayerState'

export interface IGameTurn {
  info: {
    phaseNumber: number,
    year: number,
    season: string,
    phase: string,
    timeStarted: number,
    timeEnds: string,
    isComplete: boolean,
  },
}

export interface IGameTurnJSON extends IGameTurn {
  _id: string,
  players: IPlayerStateJSON[],
}

export interface IGameTurnDB extends IGameTurn {
  players: IPlayerStateDB[],
}
