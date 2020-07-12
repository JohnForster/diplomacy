import {Component, h, FunctionalComponent, Fragment} from 'preact'
import {useState} from 'preact/hooks'
import { IUnit, IPlayerStateJSON, IMove, OrderType } from '@shared/types'
// ! import OrderType from '@shared/types/enums/OrderType'
import UnitType from '@shared/types/enums/UnitType'

import checkTag from '@client/app/_helpers/checkTag'
import { EventHandler, FormEvent } from 'react'
import Order from '../ordersLayer/order/order'
import Unit from '../board/unit/unit'
import { provinces } from '@shared/resources/countryData'


// ! This is using the Api Style OrderTypes. Use this when changing to that type.
// const getOrderTypes = (unit: IUnit): OrderType[] => {
//   const orderTypes: OrderType[] = ['Hold', 'Move', 'Support',]

//   if (unit.unitType  === UnitType.FLEET && checkTag(unit.location, 'sea')) {
//     orderTypes.push(OrderType.CONVOY)
//   }

//   if (unit.unitType  === UnitType.ARMY && checkTag(unit.location, 'coastal')) {
//     orderTypes.push(OrderType.MOVEVIACONVOY)
//   }
//   return orderTypes
// }

const getOrderTypes = (unit: IUnit): OrderType[] => {
  const orderTypes: OrderType[] = ['hold', 'move', 'support',]

  if (unit.unitType  === UnitType.FLEET && checkTag(unit.location, 'sea')) {
    orderTypes.push('convoy')
  }

  if (unit.unitType  === UnitType.ARMY && checkTag(unit.location, 'coastal')) {
    orderTypes.push('moveViaConvoy')
  }
  return orderTypes
}

interface IOrderDropdownProps {
  unit: IUnit
  order?: IMove
  setOrder: (order:Partial<IMove>) => void
}

const OrderDropdown = (props: IOrderDropdownProps) => {
  const [order, setOrder] = useState<Partial<IMove>>(props.order || {moveType: 'hold'})
  const orderTypes = getOrderTypes(props.unit)

  const handleChange = (fieldName: keyof IMove) => (event: Event) => {
    const value = (event.target as HTMLSelectElement).value
    const newOrder = {
      unit: props.unit.unitType,
      from: props.unit.location,
      [fieldName]: value
    }
    setOrder(newOrder)
    props.setOrder(newOrder)
  }


  return (
    <Fragment>
      <select type='select' onChange={handleChange('moveType')}>
        {orderTypes.map((orderType, i) => (
          <option value={orderType} key={`ordertype-${i}`} >
            {orderType}
          </option>
        ))}
      </select>
      {order.moveType !== 'hold' && (
        <Fragment>
          to
          <select type='select' onChange={handleChange('to')}>
            {provinces.map((province, i) => (
              <option value={province} key={`ordertype-${i}`} >
                {province}
              </option>
            ))}
          </select>
        </Fragment>
      )}
    </Fragment>
  )
}

interface IOrdersBoxProps {
  playerData: IPlayerStateJSON
  newNewOrders: {[key: string]: Partial<IMove>}
  setOrder: (order: Partial<IMove>) => void
}
const OrdersBox: FunctionalComponent<IOrdersBoxProps> = (props) => {
  return (
    <div style="border: 1px black; font-family: 'palantino';">
      {props.playerData.ownedUnits.map((unit, i) => (
        <div key={`ownedUnits-${i}`}>{unit.unitType} in {unit.location} will <OrderDropdown unit={unit} setOrder={props.setOrder}/></div>
      ))}
    </div>
  )
}

export default OrdersBox