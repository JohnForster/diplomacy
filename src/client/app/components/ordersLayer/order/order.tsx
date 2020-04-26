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
      case 'move': return 'lightgray'
      case 'support': return 'brown'
      case 'retreat': return 'blue'
      default: return ''
    }
  }

  calculateLocation = (fromLocation: string, toLocation: string) => {
    const distanceFromEnd = 10
    const [fromX, fromY] = fromLocation.split(',').map(n => parseInt(n, 10))
    const [toX, toY] = toLocation.split(',').map(n => parseInt(n, 10))
    const lineLength = Math.sqrt(Math.pow((fromX-toX), 2) + Math.pow((fromY-toY), 2))
    const t = distanceFromEnd / lineLength
    console.log('fromLocation, toLocation:', fromLocation, toLocation)
    console.log('fromX, fromY, toX, toY:', fromX, fromY, toX, toY)
    const x = ((1 - t) * toX) + (t * fromX)
    const y = ((1 - t) * toY) + (t * fromY)
    return `${x},${y}`
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
              d={`M${this.calculateLocation(toLocation, fromLocation)} Q${supportFromLocation} ${this.calculateLocation(supportFromLocation, toLocation)}`}
            />
            <path
              stroke-width='4' fill='transparent' stroke='#FF000088'
              d={`M${this.calculateLocation(toLocation, supportFromLocation)} L ${this.calculateLocation(supportFromLocation, toLocation)}`}
            />
          </ Fragment>
        )}
        {props.moveType === 'move' && (
          <path
            marker-end='url(#head-move)'
            stroke-width='2' stroke='lightgray'
            d={`M${this.calculateLocation(toLocation, fromLocation)} L${this.calculateLocation(fromLocation, toLocation)}`}
          />
        )}
      </Fragment>
    )
  }
}