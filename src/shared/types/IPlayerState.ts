import { Types } from 'mongoose'
import { IMove } from '.'

interface IPlayerState {
  colour: string,
  empire: string,
  ownedTerritories: string[],
  ownedUnits: {
    unitType: string,
    location: string,
    status: string,
  } [],
  moves: IMove[],
}

export interface IPlayerStateJSON extends IPlayerState {
  playerID: string
}

export interface IPlayerStateDB extends IPlayerState {
  playerID: Types.ObjectId
}
