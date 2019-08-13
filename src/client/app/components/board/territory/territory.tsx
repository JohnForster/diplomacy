import {Component, h} from 'preact'
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
      x: string,
      y: string,
      rotate?: string,
    }
    transform?: string
  }
  isSelected: boolean
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
      <g title={props.tile.title} class={props.tile.tileType}>
        <path class={props.tile.id} d={props.tile.path} onClick={props.onSelect}/>
        {props.tile.textLocation &&
          <g
            transform={`
              rotate(${props.tile.textLocation.rotate || '0'} ${props.tile.textLocation.x} ${props.tile.textLocation.y})
              translate(${props.tile.textLocation.x} ${props.tile.textLocation.y})
            `}
          >
            <text>{props.tile.name}</text>
          </g>
        }
      </g>
    )
  }
}