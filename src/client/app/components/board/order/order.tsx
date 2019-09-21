import {Component, h} from 'preact'

import { IGameBoard, IMove } from '@shared/types'

import './order.scss'

export interface IOrderProps extends IMove {
  boardData: IGameBoard
}

interface IOrderState {
  
}

export default class Order extends Component <IOrderProps, IOrderState> {
  getLocation = (property: 'from' | 'to' | 'supportFrom'): string => {
    const territory = this.props.boardData.territories.find(t => t.title === this.props[property])
    return `${territory.textLocation.x},${territory.textLocation.y}`
  }

  public render(props: IOrderProps, state: IOrderState) {
    console.log('rendering', props)
    const fromLocation = this.getLocation('from')
    const toLocation = this.getLocation('to')
    return (
      <svg viewBox={props.boardData.viewBox} xmlns='http://www.w3.org/2000/svg' class={`orderSquare ${props.moveType}-order`}>
        <defs>
          <marker
            id='head'
            orient='auto'
            markerWidth='2'
            markerHeight='4'
            refX='0.1'
            refY='2'
          >
            <path d='M0,0 V4 L2,2 Z' fill='black' />
          </marker>
        </defs>
        <path
          marker-end='url(#head)'
          stroke-width='2' fill='black' stroke='black'
          d={`M${fromLocation} L${toLocation}`}
        />
      </svg>
    )
  }
}