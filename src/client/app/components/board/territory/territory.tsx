import {Component, h} from 'preact'
import './territory.scss'
import Tank from '../unit/tank/tank'
// Move tile type into shared types folder?
export interface ITerritoryProps {
  tile: {
    title: string;
    name: string;
    id: string;
    tileType: string;
    path: string;
    textLocation?: {
      x: string,
      y: string,
      rotate?: string,
    }
    transform?: string
  }
  // unit: 'army' | 'fleet' | null
  isSelected: boolean
  viewBox: string
  onSelect: () => void
}

interface ITerritoryState {

}

export default class Territory extends Component <ITerritoryProps, ITerritoryState> {
  handleClick = (title:string) => () => {
    console.log(title)
  }

  public render(props: ITerritoryProps, state: ITerritoryState) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} className='territorySquare' width='100%'>
        <g title={props.tile.title} class={props.tile.tileType}>
          <path class={props.tile.id} d={props.tile.path} onClick={props.onSelect}/>
          {props.tile.textLocation &&
            <g
              transform={`
                translate(${props.tile.textLocation.x} ${props.tile.textLocation.y})
                rotate(${props.tile.textLocation.rotate || '0'})
              `}
            >


              <text>{props.tile.name.split('\n').map(line => <tspan  x='0' text-anchor='middle' dy='10px'>{line}</tspan>)}</text>
            </g>
          }
          {props.tile.textLocation &&
            <Tank
              viewBox={props.viewBox}
              location={`${parseInt(props.tile.textLocation.x, 10) - 10} ${parseInt(props.tile.textLocation.y, 10) - 18}`}
              empire='England'
              colour='e10'
            />
          }
        </g>
      </svg>
    )
  }
}