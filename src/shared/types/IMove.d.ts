import UnitType from './enums/UnitType';

// TODO update moves to use api moveType
export type OrderType = 'move' | 'hold' | 'support' | 'retreat' | 'convoy' | 'moveViaConvoy' | 'disband' | 'build'

export interface IMove {
  unit?: UnitType,
  moveType: OrderType,
  from: string,
  to?: string,
  supportFrom?: string,
  convoyFrom?: string,
  buildType?: UnitType
  wasSuccessful: boolean,
}
