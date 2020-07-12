import { IGameTurnJSON } from '@shared/types'

export const getPlayer = (gameTurn: IGameTurnJSON, playerID: string) => {
  return gameTurn.players.find(p => p.playerID === playerID)
}