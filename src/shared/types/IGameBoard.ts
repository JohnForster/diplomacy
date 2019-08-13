interface ITerritory {
  title: string
  name: string
  tileType: string
  id: string
  path: string
  textLocation?: {
    x: string,
    y: string,
    rotate?: string,
  }
}

export default interface IGameBoard {
  mapTitle: string
  viewBox: string
  territories: ITerritory[]
}
