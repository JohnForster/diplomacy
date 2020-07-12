import { IMove } from '@shared/types'
import { ActionType, Action } from '../actions'
import type { GameStateReducer, IGameState } from '../gameReducer'

export const ordersReducer: GameStateReducer = (state, action) => {
  const orders = new Map(state.orders)
  switch (action.type) {
    case ActionType.loadMoves: {
      const moves = action.payload.players.map(p => p.moves).flat(1)
      moves.forEach(m => orders.set(m.from, m))
      return {...state, orders}
    }
    case ActionType.addMove: {
      const location = action.payload.location
      const newMove = state.playerOrders.get(location) as IMove
      orders.set(newMove.from, newMove)
      return {...state, orders}
    }
    case ActionType.deleteMove: {
      orders.delete(action.payload.location)
      return {...state, orders}
    }
    default: {
      return state
    }
  }
}