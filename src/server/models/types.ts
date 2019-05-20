import {Types} from 'mongoose'

export interface IMove {
  unit: string,
  moveType: string,
  from: string,
  to: string,
  supportFrom: string,
  wasSuccessful: boolean,
}

export interface IPlayerState {
  playerID: Types.ObjectId,
  colour: string,
  empire: string,
  ownedTerritories: string[],
  ownedUnits: {
    type: string,
    location: string,
    status: string,
  }[],
  moves: IMove[],
}
