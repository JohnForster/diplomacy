import { Types } from 'mongoose'
import { IOrder, IUnit } from '.'

interface IPlayerState {
  colour: string,
  empire: string,
  ownedTerritories: string[],
  ownedUnits: IUnit[],
  moves: IOrder[],
}

export interface IPlayerStateJSON extends IPlayerState {
  playerID: string
}

export interface IPlayerStateDB extends IPlayerState {
  playerID: Types.ObjectId
}
