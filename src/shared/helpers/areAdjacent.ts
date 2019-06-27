import adjacentTilesData from '@shared/resources/tilesData'

export default (territoryA: string) => (territoryB: string) => {
  return adjacentTilesData[territoryA].includes(territoryB)
}
