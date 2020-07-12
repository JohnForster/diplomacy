import { FunctionalComponent , h} from 'preact'

import { IMove, IUnit } from '@shared/types'
import OrderDropdown from './orderDropdown'

interface IOrdersBoxProps {
  playerUnits: IUnit[]
  playerOrders: Map<string, Partial<IMove>>
  updateLocation: (location: string, destination: string, destinationType: 'to' | 'supportFrom' | 'convoyFrom') => void
  updateOrderType: (location: string, moveType: string) => void
  completeOrder: (location: string) => void
  removeOrder: (location: string) => void
}

const OrdersBox: FunctionalComponent<IOrdersBoxProps> = (props) => {
  console.log('props.playerOrders:', props.playerOrders)
  return (
    <div style="border: 1px black; font-family: 'palantino';">
      <h3>THE PROBLEM IS THAT THE PLAYERORDERS AREN'T BEING SET WHEN THE MOVES ARE BEING LOADED</h3>
      {props.playerUnits.map((unit, i) => (
        <div key={`ownedUnits-${i}`}>
          <OrderDropdown
            unit={unit}
            order={props.playerOrders.get(unit.location)}
            updateLocation={props.updateLocation}
            updateOrderType={props.updateOrderType}
            completeOrder={props.completeOrder}
            removeOrder={props.removeOrder}
          />
        </div>
      ))}
    </div>
  )
}

export default OrdersBox