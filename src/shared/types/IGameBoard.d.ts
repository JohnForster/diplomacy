export interface IBoardTerritory {
  title: string
  name: string
  tileType: string
  id: string
  path: string
  textLocation?: {
    x: number,
    y: number,
    rotate?: number,
  }
}

export interface IGameBoard {
  mapTitle: string
  viewBox: string
  territories: IBoardTerritory[]
}
