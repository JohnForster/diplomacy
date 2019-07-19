import { IMove } from '@shared/types'

export default class Order {
  static from(move: IMove) {
    return new Order('', move.from, move.to, move.moveType, move.supportFrom)
  }

  unit: 'Army' | 'Fleet'
  moveType: string
  from: string
  to: string
  supportFrom: string
  wasSuccessful: boolean

  constructor(unit: string, origin: string, destination: string, moveType: string, supportFrom?: string) {
    Object.assign(this, {unit, from: origin, to: destination, moveType, supportFrom })
  }

  toObject() {
    return {
      unit: this.unit,
      moveType: this.moveType,
      from: this.from,
      to: this.to,
      supportFrom: this.supportFrom,
      wasSuccessful: this.wasSuccessful,
    }
  }
}
