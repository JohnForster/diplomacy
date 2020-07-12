import { OrderType, IMove } from '@shared/types'

export const changeMoveType = (moveType: OrderType, move: Partial<IMove>): Partial<IMove> => {
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