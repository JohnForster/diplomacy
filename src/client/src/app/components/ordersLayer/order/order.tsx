import {Component, Fragment, h} from 'preact'

import { IGameBoard, IMove } from '@shared/types'

import './order.scss'
import { pathToFileURL } from 'url'

export interface IOrderProps extends IMove {
  boardData: IGameBoard
}

interface IOrderState {
  
}

export default class Order extends Component <IOrderProps, IOrderState> {
  getLocation = (property: 'from' | 'to' | 'supportFrom'): string => {
    const territory = this.props.boardData.territories.find(t => t.title === this.props[property])
    if (!territory) return ''
    return `${territory.textLocation.x},${territory.textLocation.y}`
  }

  getMarkerColour = <T extends string>(moveType: T) => {
    switch(moveType) {
      case 'move': return 'black';
      case 'support': return 'brown';
      case 'retreat': return 'blue';
      default: return ''
    }
  }

  render(props: IOrderProps, state: IOrderState) {
    const fromLocation = this.getLocation('from')
    const toLocation = this.getLocation('to')
    const supportFromLocation = this.getLocation('supportFrom')
    const markerColour = this.getMarkerColour(props.moveType)

    return (
      <Fragment>
        {props.moveType === 'support' && (
          <Fragment>
            <path
              marker-end='url(#head-support)'
              stroke-width='2' fill='transparent' stroke={markerColour}
              d={`M${fromLocation} Q${supportFromLocation} ${toLocation}`}
            />
            <path
              stroke-width='4' fill='transparent' stroke='#FF000088'
              d={`M${supportFromLocation} L ${toLocation}`}
            />
          </ Fragment>
        )}
        {props.moveType === 'move' && (
          <path
            marker-end='url(#head-move)'
            stroke-width='2' fill='black' stroke='black'
            d={`M${fromLocation} L${toLocation}`}
          />
        )}
      </Fragment>
    )
  }
}