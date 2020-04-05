import {Component, h} from 'preact'

import { IBoardTerritory, IGameBoard, IGameTurnJSON, IMove, OrderType } from '@shared/types'

import Territory from './territory/territory'
import Unit from './unit/unit'

import './board.scss'
import Order from '../ordersLayer/order/order'
import OrdersLayer from '../ordersLayer/ordersLayer'

// ? Recieve boardData as props or import?
// ? Import is simpler, prop;s allows for extending in the future.
export interface IBoardProps {
  boardData: IGameBoard,
  turnData: IGameTurnJSON,
  activeTerritory: string,
  onTileSelect: (title: string) => () => void,
  onMoveSelect: (move: OrderType) => () => void,
  newOrders: IMove[]
}

interface IBoardState {

}

export default class Board extends Component <IBoardProps, IBoardState> {
  get activeTileData(): IBoardTerritory {
    if (!this.props.activeTerritory) return null
    return this.props.boardData.territories
      .find(t => t.title === this.props.activeTerritory)
  }

  getLocation = (territoryName: string): {x: number, y: number} => {
    const territory = this.props.boardData.territories.find(t => t.title === territoryName)
    const {x, y} = territory.textLocation
    return {x, y}
  }

  getColour = (territoryName: string): string => {
    if (!this.props.turnData) return null
    const player = this.props.turnData.players.find(p => p.ownedTerritories.includes(territoryName))
    if (!player) return null
    return player.colour
  }

  render(props: IBoardProps, state: IBoardState) { 
    return (
      <div className='gameBoard' id='gameBoard'>
        {/* Draw Territories */}
        <svg xmlns='http://www.w3.org/2000/svg' viewBox={props.boardData.viewBox} className={`territorySquare `} width='100%'>
          {props.boardData.territories.map(tile => (
            <Territory
              tile={tile}
              isSelected={tile.title === props.activeTerritory}
              onSelect={props.onTileSelect(tile.title)}
              viewBox={props.boardData.viewBox}
              colour={this.getColour(tile.title)}
            />
          ))}
          {/* Draw Units */}
          {props.turnData && props.turnData.players.map(player => (
            player.ownedUnits.map(unit => (
              <Unit
                unitType={unit.unitType}
                viewBox={props.boardData.viewBox}
                location={this.getLocation(unit.location)}
                empire={player.empire}
                colour={player.colour}
              />
            ))
          ))}
          {/* Draw Orders */}
          {/* Extract later into separate component */}
          <OrdersLayer boardData={props.boardData} newOrders={props.newOrders} turnData={props.turnData}/>
        </svg>
        {/* Draw Order Box */}
        {props.activeTerritory && (
          <div className='orderBox'>
            <span className='orderTitle'>{props.activeTerritory}</span><br/>
            <span onClick={props.onMoveSelect('move')}>Move</span><br/>
            <span onClick={props.onMoveSelect('support')}>Support</span><br/>
            <span onClick={props.onMoveSelect('hold')}>Hold</span><br/>
            <span onClick={props.onMoveSelect(null)}>Cancel</span><br/>
          </div>
        )}
      </div>
    )
  }
}