import Season from './enums/Season'
import PhaseType from './enums/PhaseType'
import ProvinceId from './enums/ProvinceId'
import Nation from './enums/Nation'
import OrderType from './enums/OrderType'
import UnitType from './enums/UnitType'

export interface IApiState {
  Season: Season,
  Year: number,
  Type: PhaseType,
  Units: {
    [p in ProvinceId]?: {
      Type: UnitType,
      Nation: Nation,
    }
  }
  SupplyCenters: {
    [p in ProvinceId]?: Nation
  },
  Dislodgeds: { // ! Presumably required for retreat phases
    [p in ProvinceId]?: Nation
  },
  Dislodgers: { // ! Not sure why this would be required
    [p in ProvinceId]?: Nation
  },
  Bounces: {
    [p in ProvinceId]?: {
      [q in ProvinceId]?: boolean
    }
  },
  Resolutions: {
    [p in ProvinceId]?: string
  }
  Orders: {
    [n in Nation]?: {
      [p in ProvinceId]?: [OrderType, ProvinceId, ProvinceId?]
    }
  }
}
