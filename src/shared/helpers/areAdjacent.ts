import adjacentByLandTilesData from '../resources/landTilesData'
import adjacentBySeaTilesData from '../resources/seaTilesData'

export default (unitType: 'Army' | 'Fleet') => (territoryA: string) => (territoryB: string) => {
  const data = unitType === 'Army' ? adjacentByLandTilesData : adjacentBySeaTilesData
  return data[territoryA].includes(territoryB)
}