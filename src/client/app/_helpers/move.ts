import { IMove, OrderType } from '@shared/types'

class NewOrder {
  static isComplete = (move: Partial<IMove>): move is IMove => {
    if (!move.moveType || !move.unit || !move.from) return false
    switch (move.moveType) {
      case 'hold': 
      case 'disband':
        return true
      case 'move':
      case 'moveViaConvoy':
      case 'retreat': {
        if (move.to) return true
      }
      case 'support': {
        if (move.to && move.supportFrom) return true
      }
      case 'convoy': {
        if (move.to && move.convoyFrom) return true
      }
      case 'build': {
        if (move.buildType) return true
      }
      default: return false
    }
  }

  private order: Partial<IMove>

  constructor(order: Partial<IMove>) {
    this.order = {
      moveType: 'hold',
      ...order
    }
  }

  changeMoveType = (moveType: OrderType): Partial<IMove> => {
    const newMove = {
      ...this.order,
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

  setLocation = (locationType: 'to' | 'supportFrom' | 'convoyFrom', destination: string) => {
    this.order[locationType] = destination
  }

  isComplete = (): boolean => {
    return NewOrder.isComplete(this.order)
  }

  getFinal = (): IMove => {
    if (!NewOrder.isComplete(this.order)) {
      throw new Error('Move is not complete')
    }
    return this.order
  }
}