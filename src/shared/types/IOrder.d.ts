import OrderType from './enums/OrderType';
import UnitType from './enums/UnitType';
import Nation from './enums/Nation';
import ProvinceId from './enums/ProvinceId';

export interface IOrder {
  empire: Nation,
  unit: UnitType,
  moveType: OrderType,
  from: ProvinceId,
  to: ProvinceId,
  supportFrom?: ProvinceId,
  convoyFrom?: ProvinceId,
  wasSuccessful: boolean,
  unsuccessfulReason?: string,
}
