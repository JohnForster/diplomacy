import { getGame } from '@client/app/services/gameService';
import { IGameJSON, IGameTurnJSON, IMove } from '@shared/types';
import { Action, ActionType } from './actions';
import { ordersReducer } from './ordersReducer/ordersReducer';
import { playerOrdersReducer } from './playerOrdersReducer/playerOrdersReducer';

export interface IGameState {
  game: IGameJSON,
  turn: IGameTurnJSON,
  isInteractive: boolean,
  orders: Map<string, IMove>,
  playerOrders: Map<string, Partial<IMove>>
}

type Reducer<S, A> = (state: S, action: A) => S
export type GameStateReducer = Reducer<IGameState, Action>

const miscReducer: GameStateReducer = (state, action) => {
  switch (action.type) {
    case ActionType.setGame: {
      const game = action.payload
      return {...state, game}
    }
    case ActionType.setTurn: {
      const turn = action.payload
      return {...state, turn}
    }
    default: {
      return state
    }
  }
}

export const gameReducer: GameStateReducer = (state, action) => {
  const newState: IGameState = {
    ...state,
    ...ordersReducer(state, action),
    ...playerOrdersReducer(state, action),
    ...miscReducer(state, action)
  }

  return newState
}