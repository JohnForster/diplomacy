import { IGameBoard } from '@shared/types'
import {Component, Fragment, h} from 'preact'
import './territory.scss'
import ProvinceId from '@shared/types/enums/ProvinceId'
// Move tile type into shared types folder?
export interface ITerritoryProps {
  id: ProvinceId,
  tile: IGameBoard['territories'][keyof IGameBoard['territories']]
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
        <g title={props.id} class={props.tile.tileType}>
          <path class={`${props.tile.id} ${props.colour}-light`} d={props.tile.path} onClick={props.onSelect}/>
          {props.tile.textLocation && (
          <Fragment>
            <circle stroke='white' cx={props.tile.textLocation.x} cy={props.tile.textLocation.y} r="1"/>
            <g
              transform={`
              translate(${props.tile.textLocation.x} ${props.tile.textLocation.y})
              rotate(${props.tile.textLocation.rotate || '0'})
              `}
            >
              <text>{props.tile.name.split('\n').map(line => <tspan  x='0' text-anchor='middle'>{line}</tspan>)}</text>
            </g>
          </Fragment>
          )}
        </g>
      </Fragment>
    )
  }
}
