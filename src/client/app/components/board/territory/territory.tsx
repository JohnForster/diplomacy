import { OrderType } from '@shared/types'
import {Component, Fragment, h} from 'preact'
import './territory.scss'
// Move tile type into shared types folder?
export interface ITerritoryProps {
  tile: {
    title: string;
    name: string;
    id: string;
    tileType: string;
    path: string;
    textLocation?: {
      x: number,
      y: number,
      rotate?: number,
    }
    transform?: string
  }
  // unit: 'army' | 'fleet' | null
  isSelected: boolean
  viewBox: string
  onSelect: () => void
  colour: string
}

interface ITerritoryState {

}

export default class Territory extends Component <ITerritoryProps, ITerritoryState> {
  handleClick = (title: string) => () => {
    console.log(title)
  }

  render(props: ITerritoryProps, state: ITerritoryState) {
    return (
      <Fragment>
        <g title={props.tile.title} class={props.tile.tileType}>
          <path class={`${props.tile.id} ${props.colour}-light`} d={props.tile.path} onClick={props.onSelect}/>
          {props.tile.textLocation && (
          <Fragment>
            {process.env.NODE_ENV === 'development' && (
              <circle stroke='white' cx={props.tile.textLocation.x} cy={props.tile.textLocation.y} r='1'/>
            )}
            <g
              transform={`
              translate(${props.tile.textLocation.x} ${props.tile.textLocation.y})
              rotate(${props.tile.textLocation.rotate || '0'})
              `}
            >
              <text>{props.tile.name.split('\n').map((line, i) => <tspan dy={i?'8':'0'} x='0' text-anchor='middle'>{line}</tspan>)}</text>
            </g>
          </Fragment>
          )}
        </g>
      </Fragment>
    )
  }
}
