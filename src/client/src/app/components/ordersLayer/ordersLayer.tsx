import {Component, Fragment, h} from 'preact'

import { IGame, IGameBoard, IGameTurnJSON, IMove } from '@shared/types'

import Order from './order/order'

export interface IOrdersLayerProps {
  turnData: IGameTurnJSON
  boardData: IGameBoard
  newOrders: IMove[]
}

interface IOrdersLayerState {

}

export default class OrdersLayer extends Component <IOrdersLayerProps, IOrdersLayerState> {
  markerColours = {
    support: 'brown',
    move: 'black',
    retreat: 'blue',
  }

  render(props: IOrdersLayerProps, state: IOrdersLayerState) {
    return (
      <Fragment>
        <defs>
          {Object.entries(this.markerColours).map(([moveType, colour]) => (
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
        {props.turnData && props.turnData.players.map(player => (
          player.moves.map(order => <Order {...order} boardData={props.boardData}/>)
        ))}
        {props.newOrders && props.newOrders.map(order => (
          <Order {...order} boardData={props.boardData} />
        ))}
      </Fragment>
    )
  }
}
