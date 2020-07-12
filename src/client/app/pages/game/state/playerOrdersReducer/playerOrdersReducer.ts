import { getPlayer } from '@client/utils/getPlayer'
import { ActionType } from '../actions'
import type { GameStateReducer } from '../gameReducer'
import { changeMoveType } from './changeMoveType'

export const playerOrdersReducer: GameStateReducer = (state, action) => {
  const newPlayerOrders = new Map(state.playerOrders)
  switch (action.type) {
    case ActionType.setOrderType: {
      const order = newPlayerOrders.get(action.payload.location)
      const newMove = changeMoveType(action.payload.orderType, order)
      newPlayerOrders.set(newMove.from, newMove)
      return {...state, playerOrders: newPlayerOrders}
    }
    case ActionType.setLocation: {
      const order = newPlayerOrders.get(action.payload.location) || {}
      const newOrder = {
        ...order,
        [action.payload.destinationType]: action.payload.destination
      }
      newPlayerOrders.set(order.from, newOrder)
      return {...state, playerOrders: newPlayerOrders}
    }
    default: {
      return state
    }
  }
}