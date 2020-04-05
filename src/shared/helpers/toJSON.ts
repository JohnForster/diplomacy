import { IGameTurnDB, IGameTurnJSON } from '../types'

export default (turn: IGameTurnDB): IGameTurnJSON => {
  return JSON.parse(JSON.stringify(turn))
}