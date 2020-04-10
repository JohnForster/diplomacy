

import Season from './enums/Season'
import PhaseType from './enums/PhaseType'
import ProvinceId from './enums/ProvinceId'
import Nation from './enums/Nation'
import OrderType from './enums/OrderType'
import UnitType from './enums/UnitType'

interface IApiState {
  Season: Season,
  Year: number,
  Type: PhaseType,

}

export interface IApiStateJSON extends IApiState {
  Units: {
    [p in ProvinceId]?: {
      Type: UnitType,
      Nation: Nation,
    }
  }
  Orders: {
    [n in Nation]?: {
      [p in ProvinceId]?: ApiOrder
    }
  }
  SupplyCenters: { [p in ProvinceId]?: Nation },
  Dislodgeds: { [p in ProvinceId]?: Nation }, // ! Presumably required for retreat phases
  Dislodgers: { [p in ProvinceId]?: Nation }, // ! Required for retreat - dislodged unit cannot come from attackers place
  Bounces: {
    [p in ProvinceId]?: {
      [q in ProvinceId]?: boolean
    }
  },
  Resolutions: { [p in ProvinceId]?: string }
}
export interface IApiStateDB extends IApiState{
  Units: Map<ProvinceId, {Type: UnitType, Nation: Nation}>,
  Orders: Map<Nation, Map<ProvinceId, ApiOrder>>,
  SupplyCenters: Map<ProvinceId, Nation>,
  Dislodgeds: Map<ProvinceId, Nation>,
  Dislodgers: Map<ProvinceId, Nation>,
  Bounces: Map<ProvinceId, Map<ProvinceId, boolean>>,
  Resolutions: Map<ProvinceId, string>
}

export type ApiOrder = BuildOrder | MoveOrder | SupportOrder | HoldOrder | RetreatOrder | ConvoyOrder | MoveViaConvoyOrder | DisbandOrder

type BuildOrder = ['Build', UnitType]
type MoveOrder = ['Move', ProvinceId]
type SupportOrder = ['Support', ProvinceId, ProvinceId]
type HoldOrder = ['Hold']
type RetreatOrder = ['Retreat', ProvinceId]
type ConvoyOrder = ['Convoy', ProvinceId, ProvinceId]
type MoveViaConvoyOrder = ['MoveViaConvoy', ProvinceId, ProvinceId]
type DisbandOrder = ['Disband']

// TODO Convert into map.
export interface IApiStateDB extends IApiState{
  Units: Map<ProvinceId, {Type: UnitType, Nation: Nation}>,
  SupplyCenters: Map<ProvinceId, Nation>,
  Dislodgeds: Map<ProvinceId, Nation>,
  Dislodgers: Map<ProvinceId, Nation>,
  Bounces: Map<ProvinceId, Map<ProvinceId, boolean>>,
  Orders: Map<Nation, Map<ProvinceId, ApiOrder>>,
}

