import mongoose, {Schema, Types} from 'mongoose'
import { IGameTurnDB, IOrder } from '@shared/types'

import Nation from '@shared/types/enums/Nation';

export interface ITurnModel extends mongoose.Document, IGameTurnDB {
  isReadyToStart: (this: ITurnModel) => boolean,
  getEmpireByPlayerId: (this: ITurnModel, id: string) => Nation
  getMovesByEmpire: (this: ITurnModel, empire: string) => IOrder[],
  addMovesByEmpire: (this: ITurnModel, empire: Nation, moves: IOrder[]) => Promise<void>,
  addMoves: (this: ITurnModel, playerID: any, moves: IOrder[]) => void,
  addPlayer: (this: ITurnModel, playerID: string, empire?: string) => void,
  setPlayer: (this: ITurnModel, empire: string, playerId: string) => Promise<void>
  start: (this: ITurnModel) => void,
  randomiseEmpires: (this: ITurnModel) => void,
}


const gameStateSchema = new Schema<IGameTurnDB['state']>({
  Units: {
    type: Map, // ProvinceId
    of: {
      Type: String,
      Nation: String,
    }
  },
  Orders: {
    type: Map, // Nation
    of: {
      type: Map, // ProvinceId
      of: [String] // Order
    }
  },
  SupplyCenters: {
    type: Map, // ProvinceId
    of: String, // Nation
  },
  Dislodgeds: {
    type: Map, // ProvinceId
    of: String, // Nation
  },
  Dislodgers: {
    type: Map, // ProvinceId
    of: String, // Nation
  },
  Bounces: {
    type: Map, // ProvinceId
    of: Boolean,
  },
  Resolutions: {
    type: Map, // ProvinceId
    of: String, // OK || Reason
  }
})

const turnSchema = new Schema<ITurnModel>({
  info: {
    // TODO Convert all Mixed schema types to Map e.g. players: {type: Map, of: String}.
    players: {
      type: Map,
      of: String
    }, // players: {'England': 'someId', 'Germany': 'somOtherId'}
    timeStarted: {
      type: Date,
      default: Date.now(),
    },
    timeEnds: {
      type: Date,
      default: Date.now() + (2880 * 60),
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  state: gameStateSchema,
  // See above for schema
  orders: {
    type: Map, // Empire
    of: [{
      unitType: String,
      moveType: String,
      from: String,
      to: String,
      supportFrom: String,
      wasSuccessful: Boolean,
    }],
  },
  ownedTerritories:  {
    type: Map,
    of: [String]
  } // ownedTerritories: {'England': ['lon', 'lvp', 'edi', 'yor', 'wal'], 'Germany': ...[]}
}, {toJSON: {virtuals: true}})

// TODO move into service, this is business logic.
// TODO Shouuld probably be in Game model rather than turn.
// turnSchema.methods.isReadyToStart = function(): boolean {
//   // Make more complex, to specify the reason the game cannot begin.
//   if (
//     this.players.length === 7
//     // && this.players.every((player: IPlayerStateDB) => !!player.empire) // Game should be in charge of this.
//   ) return true
//   return false
// }

turnSchema.methods.getEmpireByPlayerId = function (playerId: string) {
  const playerArray = Array.from<[string, string]>(this.info.players)
  const [empire] = playerArray.find(([, id]) => id === playerId)
  return empire as Nation
}

turnSchema.methods.getMovesByEmpire = function(empire: Nation): IOrder[] {
  return this.orders.get(empire)
}

// TODO move this business logic into turn.service
// turnSchema.methods.addMoves = function(playerID: Types.ObjectId, moves: IOrder[]): void {
//   if (!moves.every((move) => {
//     return validateMove(toJSON(this), move, playerID.toString())
//   })) {
//     console.error('Submitted move is not valid!')
//     console.error(moves.filter(move => !validateMove(toJSON(this), move, playerID.toString())))
//     return
//   }

//   const player = this.players.find((p: ITurnModel['players'][0]) => {
//     return p.playerID.equals(playerID)
//   })
//   player.moves = moves
//   this.save()
// }

turnSchema.methods.addMovesByEmpire = async function(empire: Nation, moves: IOrder[]) {
  // If we deal with moves: Map<ProvinceId, IOrder> this would be a lot simpler.
  const empireOrders = this.orders.get(empire)
  const filteredOrders = empireOrders.filter(o => moves.map(m => m.from).includes(o.from))
  const newOrders = filteredOrders.concat(moves)
  this.orders.set(empire, newOrders)
  await this.save()
}

// // Will need separate replace player function?
// // Will need to edit this function to accept choosing a color.
// // TODO This will no longer  work, functionality needs to move to game model/service
// turnSchema.methods.addPlayer = function(playerID: string, colour?: string) {
//   if (this.players.length > 7) throw new Error ('Game is full!')
//   if (colour && this.players.find((player: IPlayerStateDB) => player.colour === colour)) {
//     throw new Error (`Colour ${colour} is already taken`)
//   }
//   this.players.push({
//     playerID,
//     colour,
//   })
//   this.save()
// }

turnSchema.methods.setPlayer = async function(empire: Nation, playerId: string){
  this.info.players.set(empire, playerId)
  await this.save()
}

// TODO move into turn service.
// turnSchema.methods.start = function() {
//   this.timeStarted = Date.now()
//   // set end date? Maybe make end date a virtual?
//   this.players.forEach((player: IPlayerStateDB) => {
//     player.ownedTerritories = startingTerritories[player.empire]
//     player.ownedUnits = startingUnits[player.empire]
//     player.colour = player.colour || defaultColours[player.empire]
//   })
//   this.info.phaseNumber = 0
//   this.info.year = 1901
//   this.info.season = 'Spring'
//   this.info.phase = 'movement'
//   console.log('saving turn...')
//   this.save()
// }

// TODO Move into turn service.
// turnSchema.methods.randomiseEmpires = async function() {
//   console.log('Randomising empires...')
//   const empires = shuffle(['England', 'France', 'Germany', 'Italy', 'Austria', 'Russia', 'Turkey'])
//   this.players.forEach((player: IPlayerStateDB) => {
//     player.empire = empires.pop()
//   })
//   return this.save()
// }

export default mongoose.model<ITurnModel>('Turn', turnSchema)
