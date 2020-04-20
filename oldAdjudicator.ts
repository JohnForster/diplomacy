// import { IApiStateJSON, IGameTurnDB, IGameTurn, IOrder, IApiState, ApiOrder, IPlayerStateJSON } from '@shared/types'
// import {territoriesByAbbreviation, abbreviationsByTerritory} from '@shared/resources/territories'
// import { ITurnModel } from '@server/models/turn.model'
// import { Season, Resolution, ProvinceId, Nation } from '@shared/types/enums/enums'
// import axios from 'axios'
// import allSupplyCenters from '@shared/resources/supplyCenters'
// import to from 'await-to-js'

// const getAbbreviation = (territoryName: string): ProvinceId => {
//   return abbreviationsByTerritory[territoryName]
// }

// class AdjudicateService {
//   convertToApiFormat = (turn: ITurnModel): IApiStateJSON => {
//     // If I include stringified previous turn in the turnModel, this would be as simple as:
//     /*
//     const newState = JSON.parse(turn.previousTurn) as IApiStateJSON
//     return {
//       ...newState,
//       Orders: this.getOrders(turn)
//     }
//     */
//     return {
//       Season: turn.info.season,
//       Year: turn.info.year,
//       Type: turn.info.phase,
//       Units: this.getUnits(turn),
//       SupplyCenters: this.getSupplyCenters(turn),
//       Dislodgers: {},
//       Dislodgeds: {},
//       Bounces: {},
//       Orders: this.getOrders(turn),
//       Resolutions: {},
//     }
//   }

//   getUnits = (turn: ITurnModel) => {
//     const units: IApiStateJSON['Units'] = {}
//     turn.players.forEach(p => {
//       p.ownedUnits.forEach(u => {
//         // TODO Extract get & error handling into separate method
//         const abbreviation = abbreviationsByTerritory[u.location]
//         if (!abbreviation) {
//           throw new Error(`No abbreviation found for location '${u.location}'. Turn id: No turn ids? Add IDs to turns now!`)
//         }
//         units[abbreviation] = { Type: u.unitType, Nation: p.empire}
//       })
//     })
//     return units
//   }

//   getSupplyCenters = (turn: ITurnModel) => {
//     const supplyCenters: IApiStateJSON['SupplyCenters'] = {}
//     turn.players.forEach(p => {
//       p.ownedTerritories.forEach(t => {
//         if (!allSupplyCenters.includes(t)) return
//         const abbreviation = abbreviationsByTerritory[t]
//         supplyCenters[abbreviation] = p.empire
//       })
//     })
//     return supplyCenters
//   }

//   getOrders = (turn: ITurnModel): IApiStateJSON['orders'] => {
//     const orders: IApiStateJSON['Orders'] = {}
//     turn.players.forEach(p => {
//       p.moves.forEach(m => {
//         const [from, to, supportFrom, convoyFrom] = [m.from, m.to, m.supportFrom, m.convoyFrom].map(getAbbreviation)
//         let newOrder: ApiOrder
//         switch (m.moveType) {
//           case 'Build': newOrder = ['Build', m.unitTypeToBuild]
//           case 'Move': newOrder = ['Move', to]
//           case 'Support': newOrder = ['Support', supportFrom, to]
//           case 'Disband': newOrder = ['Disband']
//           case 'Hold': newOrder = ['Hold']
//           case 'Convoy': newOrder = ['Convoy', convoyFrom, to]
//           case 'MoveViaConvoy': newOrder = ['MoveViaConvoy', from, to]
//         }
//         orders[p.empire][from] = newOrder
//       })
//     })
//     return orders
//   }

//   adjudicate = async (turnInApiFormat: IApiStateJSON): Promise<IApiStateJSON> => {
//     const url = 'http://godip-adjudication.appspot.com/Classical' // Env variable?
//     const  [err, newTurn] = await to<IApiStateJSON>(axios.post(url, turnInApiFormat))
//     if(err) return Promise.reject(err)
//     return newTurn
//   }

//   calculateNewTurnData = (turnInApiFormat: IApiStateJSON, turn: ITurnModel): Partial<IGameTurn> => {
//   }
// }

// export default AdjudicateService

