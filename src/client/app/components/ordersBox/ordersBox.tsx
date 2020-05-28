import {Component, h, FunctionalComponent} from 'preact'

import { IUnit, IPlayerStateJSON, IMove } from '@shared/types'
import OrderType from '@shared/types/enums/OrderType'
import UnitType from '@shared/types/enums/UnitType'

import checkTag from '@client/app/_helpers/checkTag'

interface IOrdersBoxProps {
  playerData: IPlayerStateJSON
  newNewOrders: Partial<IMove>[]
}

interface IOrderDropdownProps {
  unit: IUnit
}

const getOrderTypes = (unit: IUnit): OrderType[] => {
  const orderTypes: OrderType[] = ['Hold', 'Move', 'Support',]

  if (unit.unitType  === UnitType.FLEET && checkTag(unit.location, 'sea')) {
    orderTypes.push(OrderType.CONVOY)
  }

  if (unit.unitType  === UnitType.ARMY && checkTag(unit.location, 'coastal')) {
    orderTypes.push(OrderType.MOVEVIACONVOY)
  }
  return orderTypes
}

const OrderDropdown = (props: IOrderDropdownProps) => {
  const orderTypes = getOrderTypes(props.unit)

  return (
    <select type='select'>
      {orderTypes.map((orderType, i) => (
        <option key={`ordertype-${i}`}>
          {orderType}
        </option>
      ))}
    </select>
  )
}

const OrdersBox: FunctionalComponent<IOrdersBoxProps> = (props) => (
  <div style="border: 1px black; font-family: 'palantino';">
    {props.playerData.ownedUnits.map((unit, i) => (
      <div key={`ownedUnits-${i}`}>{unit.unitType} in {unit.location} will <OrderDropdown unit={unit}/></div>
    ))}
  </div>
)

export default OrdersBox