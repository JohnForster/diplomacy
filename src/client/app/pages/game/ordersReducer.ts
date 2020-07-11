import { IMove, OrderType } from '@shared/types';

interface GenericAction {
  type: ActionType,
  payload?: {[key: string]: unknown}
}

enum ActionType {
  setMoveType,
  setLocation,
}

interface SetMoveTypeAction extends GenericAction {
  type: ActionType.setMoveType,
  payload: {
    location: string,
    moveType: OrderType
  }
}

interface SetLocationAction extends GenericAction {
  type: ActionType.setLocation,
  payload: {
    location: string,
    destination: string,
    locationType : 'to' | 'supportFrom' | 'convoyFrom'
  }
}

type Action = SetMoveTypeAction | SetLocationAction

const changeMoveType = (moveType: OrderType, move: Partial<IMove>): Partial<IMove> => {
  const newMove = {
    ...move,
    moveType,
  }
  switch (moveType) {
    case 'hold':
    case 'disband':
      return ({
        ...newMove,
        to: null,
        supportFrom: null,
        convoyFrom: null,
        buildType: null,
        wasSuccessful: null,
      })
    case 'move':
    case 'moveViaConvoy':
    case 'retreat':
      return ({
      ...newMove,
      supportFrom: null,
      convoyFrom: null,
      buildType: null,
      wasSuccessful: null,
    })
    case 'support': return ({
      ...newMove,
      convoyFrom: null,
      buildType: null,
      wasSuccessful: null,
    })
    case 'convoy': return ({
      ...newMove,
      to: null,
      supportFrom: null,
      buildType: null,
      wasSuccessful: null,
    })
    case 'build': return ({
      ...newMove,
      to: null,
      supportFrom: null,
      convoyFrom: null,
      wasSuccessful: null,
    })
  }
}

const ordersReducer = (state: Map<string, Partial<IMove>>, action: Action): Map<string, Partial<IMove>> => {
  const existingMove = state.get(action.payload.location)
  if (!existingMove) {
    console.error(`No move present at ${action.payload.location}`)
    return state
  }
  switch (action.type) {
    case ActionType.setMoveType: {
      const newMove = changeMoveType(action.payload.moveType, existingMove)
      return state.set(action.payload.location, newMove)
    }
    case ActionType.setLocation: {
      const {locationType, destination} = action.payload
      const newMove = {
        ...existingMove,
        [locationType]: destination
      }
      return state.set(action.payload.location, newMove)
    }
  }
}

export default ordersReducer