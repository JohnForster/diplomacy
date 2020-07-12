import {Fragment, FunctionalComponent, h} from 'preact'

import { IGameBoard, IMove } from '@shared/types'

import Order from './order/order'

export interface IOrdersLayerProps {
  boardData: IGameBoard
  orders: Map<string, IMove>
}

const OrdersLayer: FunctionalComponent <IOrdersLayerProps> = (props) =>  {
  const markerColours = {
    support: 'brown',
    move: 'lightgray',
    retreat: 'blue',
  }

  const orders = Array.from(props.orders.values())
  return (
    <Fragment>
      <defs>
        {Object.entries(markerColours).map(([moveType, colour]) => (
          <marker
            id={`head-${moveType}`}
            orient='auto'
            markerWidth='2'
            markerHeight='4'
            refX='0.1'
            refY='2'
          >
            <path d='M0,0 V4 L2,2 Z' fill={colour} />
          </marker>
        ))}
      </defs>
      {orders.map(order => (
        <Order
          key={`order-from-${order.from}`}
          order={order}
          boardData={props.boardData}
        />
      ))}
      {/* {props.turnData && props.turnData.players.map(player => (
        player.moves
          .sort((a, b) => this.order[a.moveType] - this.order[b.moveType])
          .map((order, i) => <Order key={`order-a-${i}-${Date.now()}`} {...order} boardData={props.boardData}/>)
      ))}
      {props.newOrders && props.newOrders
        .sort((a, b) => this.order[a.moveType] - this.order[b.moveType])
        .map((order, i) => (
          <Order key={`order-b-${i}-${Date.now()}`}{...order} boardData={props.boardData} />
        ))
      } */}
    </Fragment>
  )
}

export default OrdersLayer
