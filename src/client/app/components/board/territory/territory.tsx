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
  onMoveSelect: (orderType: OrderType) => () => void
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
        <svg xmlns='http://www.w3.org/2000/svg' viewBox={props.viewBox} className={`territorySquare `} width='100%'>
          <g title={props.tile.title} class={props.tile.tileType}>
            <path class={`${props.tile.id} ${props.colour}-light`} d={props.tile.path} onClick={props.onSelect}/>
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
          </g>
        </svg>
        {props.isSelected &&
          <div className='orderBox'>
            <span className='orderTitle'>{props.tile.title}</span><br/>
            <span onClick={props.onMoveSelect('move')}>Move</span><br/>
            <span onClick={props.onMoveSelect('support')}>Support</span><br/>
            <span onClick={props.onMoveSelect('hold')}>Hold</span><br/>
            <span onClick={props.onMoveSelect(null)}>Cancel</span><br/>
          </div>
        }
      </Fragment>
    )
  }
}
