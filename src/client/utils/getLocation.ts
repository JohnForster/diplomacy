import { IGameBoard } from '@shared/types'

export const getLocation = (boardData: IGameBoard, territoryName: string): {x: number, y: number} => {
  const territory = boardData.territories.find(t => t.title === territoryName)
  const {x, y} = territory.textLocation
  return {x, y}
}