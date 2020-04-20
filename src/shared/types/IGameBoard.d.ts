import ProvinceId from './enums/ProvinceId';

export interface IBoardTerritory {
  name: string
  tileType: string
  id: string
  path: string
  textLocation?: {
    x: number,
    y: number,
    rotate?: number,
  }
  adjacentByLand: ProvinceId[]
  adjacentBySea: ProvinceId[]
}

export interface IGameBoard {
  mapTitle: string
  viewBox: string
  territories: {
    [p in ProvinceId]: IBoardTerritory}
}
