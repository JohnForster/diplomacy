import OrderType from './enums/OrderType';
import UnitType from './enums/UnitType';
import Nation from './enums/Nation';

export interface IOrder {
  empire: Nation,
  unit: UnitType,
  moveType: OrderType,
  from: string,
  to: string,
  supportFrom?: string,
  convoyFrom?: string,
  wasSuccessful: boolean,
  unsuccessfulReason?: string,
}
