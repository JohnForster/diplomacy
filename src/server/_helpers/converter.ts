import { IApiStateJSON, ApiOrder } from '@shared/types/IApiState'
import { IGameTurnJSON, IUnit, IGameTurnDB, IMove } from '@shared/types'
import Nation from '@shared/types/enums/Nation'
import ProvinceId from '@shared/types/enums/ProvinceId'
import OrderType from '@shared/types/enums/OrderType'
import getLocationFromId from '@shared/helpers/getLocationFromId'
import getIdFromLocation from '@shared/helpers/getIdFromLocation'
import UnitType from '@shared/types/enums/UnitType'
import countryData from '@shared/resources/countryData'

export interface IConversionData {
  phaseNumber: number,
  timeStarted: number,
  timeEnds: number,
  _id?: string
  players: {
    colour: string,
    empire: Nation,
    playerID: string
    ownedTerritories: string[]
  }[]
}

// TODO extract some of these into helpers? Or convert to class.

const getUnits = (empire: Nation, apiState: IApiStateJSON) => {
  const unitsInApiFormat = Object.entries(apiState.Units).filter(([, u]) => u.Nation === empire)
  const unitsInGameFormat: IUnit[] = unitsInApiFormat.map(([locationId, u]) => ({
    unitType: u.Type,
    location: getLocationFromId(locationId as ProvinceId),
    status: 'Active' // ! Hard coded for now
  }))
  return unitsInGameFormat
}

// Add functionality to change ownership of territories that aren't owned by anyone.
const updateOwnedTerritories = (apiState: IApiStateJSON, players: IConversionData['players']): IConversionData['players'] => {
  const units = Object.entries(apiState.Units) as ([ProvinceId, {Nation: Nation, Type: UnitType}])[]
  const convertedUnits = units.map(([id, unit]) => ([getLocationFromId(id), unit])) as ([string, {Nation: Nation, Type: UnitType}])[]
  const noUnitAtTerritory = (territory: string) => !convertedUnits.find(([location]) => location === territory)
  const notSeaTerritory = (territory: string) => countryData.territories.find(t => t.title === territory).tags.includes('sea')
  const newPlayers = players.map(p => {
    const playerUnits = convertedUnits
      .filter(([, unit]) => unit.Nation === p.empire)
      .map(([location]) => location)
    return {
      ...p,
      ownedTerritories: p.ownedTerritories // 1. Start with the players territories.
        .filter(noUnitAtTerritory)         // 2. Remove all territories that have a unit in them.
        .concat(playerUnits)               // 3. Add back in the locations of the player's units.
        .filter(notSeaTerritory)           // 4. Remove all sea territories.
    }
  })

  return newPlayers
}

export const apiToGameState = (
  apiState: IApiStateJSON, data: IConversionData
): IGameTurnJSON => {
  const players: IConversionData['players'] = apiState.Type === 'Adjustment'
    ? updateOwnedTerritories(apiState, data.players)
    : data.players
  // TODO Add key features from ApiState to game. i.e Dislodgeds, Resolutions, bounces?
  return {
    _id: data._id, // ! Maybe get from data, would need to create turn before doing conversion.
    info: {
      phaseNumber: data.phaseNumber,
      year: apiState.Year,
      season: apiState.Season,
      phase: apiState.Type.toLowerCase(),
      timeStarted: data.timeStarted,
      timeEnds: data.timeEnds,
      isComplete: false,
    },
    players: players.map(p => ({
      playerID: p.playerID,
      colour: p.colour,
      empire: p.empire,
      ownedTerritories: p.ownedTerritories, // Will need to work out a way of storing ownedTerritories
      ownedUnits: getUnits(p.empire, apiState),
      moves: [], // Always starts empty
    })),
    previousState: JSON.stringify(apiState),
  }
}

const convertOrder = (move: IMove): ApiOrder => {
  const locations = [move.from, move.to, move.supportFrom, move.convoyFrom]
  const [from, to, supportFrom, convoyFrom] = locations.map(getIdFromLocation)
  switch (move.moveType) {
    case 'build': return [OrderType.BUILD, move.buildType]
    case 'convoy': return [OrderType.CONVOY, convoyFrom,  to]
    case 'disband': return [OrderType.DISBAND]
    case 'hold': return [OrderType.HOLD]
    case 'move': return [OrderType.MOVE, to]
    case 'moveViaConvoy': return [OrderType.MOVEVIACONVOY, from, to] // Not certain about this
    case 'support': return [OrderType.SUPPORT, supportFrom, to]
  }
}
// TODO Use after conversion of moveTypes
// const convertOrder = (move: IMove): ApiOrder => {
//   switch (move.moveType) {
//     case OrderType.BUILD: return [OrderType.BUILD, move.buildType]
//     case OrderType.CONVOY: return [OrderType.CONVOY, move.convoyFrom,  move.convoyTo]
//     case OrderType.DISBAND: return [OrderType.DISBAND, move.from]
//     case OrderType.HOLD: return [OrderType.HOLD, move.from]
//     case OrderType.MOVE: return [OrderType.MOVE, move.to]
//     case OrderType.MOVEVIACONVOY: return [OrderType.MOVEVIACONVOY, move.from, move.to] // Not certain about this
//     case OrderType.SUPPORT: return [OrderType.SUPPORT, move.supportFrom, move.to]
//   }
// }

const getApiOrdersFromGame = (turn: IGameTurnJSON): IApiStateJSON['Orders'] => {
  const orders: IApiStateJSON['Orders'] = {}
  turn.players.forEach(p => {
    orders[p.empire] = {}
    p.moves.forEach(m => {
      const locationId = getIdFromLocation(m.from)
      const order = convertOrder(m)
      orders[p.empire][locationId] = order
    })
  })
  return orders
}

export const gameToApiState = (turn: IGameTurnJSON): IApiStateJSON => {
  console.log(turn)
  console.log(turn.previousState)
  const previousState = JSON.parse(turn.previousState) as IApiStateJSON
  return {
    ...previousState,
    Orders: getApiOrdersFromGame(turn),
  }
}