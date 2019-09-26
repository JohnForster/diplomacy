export type OrderType = 'move' | 'hold' | 'support' | 'retreat' | 'disband' | 'build'

export interface IMove {
  unit: 'Army' | 'Fleet',
  moveType: OrderType,
  from: string,
  to: string,
  supportFrom: string,
  wasSuccessful: boolean,
}
