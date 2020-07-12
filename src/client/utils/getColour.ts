import { IGameTurnJSON } from '@shared/types'

export const getColour = (turnData:  IGameTurnJSON, territoryName: string): string => {
  if (!turnData) return null
  const player = turnData.players.find(p => p.ownedTerritories.includes(territoryName))
  if (!player) return null
  return player.colour
}