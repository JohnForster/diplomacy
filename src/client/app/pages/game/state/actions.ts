import { IGameJSON, IGameTurnJSON, IMove, IUnit, OrderType } from '@shared/types'

interface GenericAction {
  type: ActionType,
  payload?: {[key: string]: any}
}

export enum ActionType {
  setOrderType,
  setLocation,
  loadMoves,
  addMove,
  deleteMove,
  setGame,
  setTurn,
}

interface LoadMovesAction extends GenericAction {
  type: ActionType.loadMoves,
  payload: IGameTurnJSON
}

interface SetOrderTypeAction extends GenericAction {
  type: ActionType.setOrderType,
  payload: {
    location: string,
    orderType: OrderType
  }
}

interface SetLocationAction extends GenericAction {
  type: ActionType.setLocation,
  payload: {
    location: string,
    destination: string,
    destinationType : 'to' | 'supportFrom' | 'convoyFrom'
  }
}

interface AddMoveAction extends GenericAction {
  type: ActionType.addMove,
  payload: {
    location: string;
  },
}

interface DeleteMoveAction extends GenericAction {
  type: ActionType.deleteMove,
  payload: {
    location: string
  },
}

interface SetGameAction extends GenericAction {
  type: ActionType.setGame,
  payload: IGameJSON
}

interface SetTurnAction extends GenericAction {
  type: ActionType.setTurn,
  payload: IGameTurnJSON
}

export type Action = SetOrderTypeAction
  | SetLocationAction
  | LoadMovesAction
  | AddMoveAction
  | DeleteMoveAction
  | SetGameAction
  | SetTurnAction