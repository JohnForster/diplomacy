import {Component, h} from 'preact'
import './territory.scss'
// Move tile type into shared types folder?
export interface ITerritoryProps {
  tile: {
    title: string;
    id: string;
    tileType: string;
    path: string;
    textLocation?: {
      x: string,
      y: string,
    }
  }
}

interface ITerritoryState {
  
}

export default class Territory extends Component <ITerritoryProps, ITerritoryState> {
  doSomething = (title:string) => () => {
    console.log(title)
  }

  public render(props: ITerritoryProps, state: ITerritoryState) {
    return (
      <g title={props.tile.title} class={props.tile.tileType}>
        <path class={props.tile.id} d={props.tile.path} onClick={this.doSomething(props.tile.title)}/>
        {props.tile.textLocation && <text {...props.tile.textLocation} className='countryText'>{props.tile.title}</text>}
      </g>
    )
  }
}