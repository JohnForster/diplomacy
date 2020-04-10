import { IPlayerStateDB, IPlayerStateJSON } from './IPlayerState.d'
import Nation from './enums/Nation';
import { IApiStateJSON, IApiStateDB } from './IApiState';
import { IOrder } from './IOrder';
import ProvinceId from './enums/ProvinceId';

export interface IGameTurn {
  info: {
    timeStarted: number,
    timeEnds: number,
    isComplete: boolean,
  },
}

export type IGameTurnJSON = IGameTurn & {
  _id: string,
  info: {
    players: {[n in Nation]: string},
  }
  state: IApiStateJSON,
  ownedTerritories: {[n in Nation]: ProvinceId[]}
  orders: {
    [n in Nation]?: IOrder[]
  }
}

export type IGameTurnDB = IGameTurn & {
  info: {
    players: Map<Nation, string>,
  }
  state: IApiStateDB,
  ownedTerritories: Map<Nation, ProvinceId[]>,
  orders: Map<Nation, IOrder[]>, // If we change this array to a map, all checking is easier
}
