import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import checkTag from '@client/app/_helpers/checkTag'
import { provinces } from '@shared/resources/countryData'
import { IUnit, OrderType, IMove } from '@shared/types'
import UnitType from '@shared/types/enums/UnitType'

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
  order: Partial<IMove>
  updateOrderType: (location: string, moveType: string) => void
  updateLocation: (location: string, destination: string, destinationType: 'to' | 'supportFrom' | 'convoyFrom') => void
  completeOrder: (location: string) => void
  removeOrder: (location: string) => void
}

const OrderDropdown = (props: IOrderDropdownProps) => {
  const [order, setOrder] = useState<Partial<IMove>>(props.order || {moveType: 'hold'})
  const orderTypes = getOrderTypes(props.unit)

  const handleMoveTypeChange = (event: Event) => {
    props.removeOrder(props.unit.location)
    const orderType = (event.target as HTMLSelectElement).value
    props.updateOrderType(props.unit.location, orderType)
    console.log('orderType:', orderType)
    if (['hold', 'disband'].includes(orderType)) {
      props.completeOrder(props.unit.location)
    }
  }

  const handleDestinationChange = (destinationType: 'to' | 'supportFrom' | 'convoyFrom') => (event: Event) => {
    const destination = (event.target as HTMLSelectElement).value
    props.updateLocation(props.unit.location, destination, destinationType)
    if (destinationType === 'to') {
      props.completeOrder(props.unit.location)
    }
  }

  const text: {[key in 'support' | 'convoy']: string} = {
    support: 'support unit at',
    convoy: 'convoy unit at',
  }

  const fromType: {[key in 'support' | 'convoy']: 'supportFrom' | 'convoyFrom'} = {
    support: 'supportFrom',
    convoy: 'convoyFrom',
  }
  
  console.log('Rendering Order Dropdown. order.moveType:', order.moveType)
  return (
    <Fragment>
      {/* SELECT MOVE TYPE (HOLD or DISBAND) */}
      {`${props.unit.unitType} in ${props.unit.location} will `}
      <select type='select' onChange={handleMoveTypeChange}>
        {orderTypes.map((orderType, i) => (
          <option value={orderType} key={`ordertype-${i}`} >
            {orderType}
          </option>
        ))}
      </select>

      {/* MOVE, RETREAT, OR MOVEVIACONVOY */}
      {['move', 'retreat', 'moveViaConvoy'].includes(order.moveType) && (
        <Fragment>
          to
          <select type='select' onChange={handleDestinationChange('to')}>
            {provinces.map((province, i) => (
              <option value={province} key={`ordertype-${i}`} >
                {province}
              </option>
            ))}
          </select>
        </Fragment>
      )}

      {/* SUPPORT OR CONVOY */}
      {(order.moveType === 'support' || order.moveType === 'convoy') && (
        <Fragment>
          {text[order.moveType]}
          <select type='select' onChange={handleDestinationChange(fromType[order.moveType])}>
            {provinces.map((province, i) => (
              <option value={province} key={`ordertype-${i}`} >
                {province}
              </option>
            ))}
          </select>
          to
          <select type='select' onChange={handleDestinationChange(fromType[order.moveType])}>
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

export default OrderDropdown