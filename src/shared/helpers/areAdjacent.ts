import adjacentByLandTilesData from '@shared/resources/landTilesData'
import adjacentBySeaTilesData from '@shared/resources/seaTilesData'

export default (unitType: 'Army' | 'Fleet') => (territoryA: string) => (territoryB: string) => {
  const data = unitType === 'Army' ? adjacentByLandTilesData : adjacentBySeaTilesData
  console.log('inside areAdjacent...')
  console.log(unitType, data)
  return data[territoryA].includes(territoryB)
}