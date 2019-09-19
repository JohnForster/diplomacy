import { Types } from 'mongoose'
import { IMove, IUnit } from '.'

interface IPlayerState {
  colour: string,
  empire: string,
  ownedTerritories: string[],
  ownedUnits: IUnit[],
  moves: IMove[],
}

export interface IPlayerStateJSON extends IPlayerState {
  playerID: string
}

export interface IPlayerStateDB extends IPlayerState {
  playerID: Types.ObjectId
}
