import { Types } from 'mongoose'
import { IMove, IUnit } from '.'

interface IPlayerState {
  colour: string,
  empire: string,
  ownedTerritories: string[],
  ownedUnits: IUnit[],
  moves: IMove[],
}

// ? Move these into their respective folders (server/client)?
// ? Currently, will mongoose be bundled into the front end?
export interface IPlayerStateJSON extends IPlayerState {
  playerID: string
}

export interface IPlayerStateDB extends IPlayerState {
  playerID: Types.ObjectId
}
