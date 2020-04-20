import {Component, h} from 'preact'

import { IBoardTerritory, IGameBoard, IGameTurnJSON, IOrder, IGameJSON } from '@shared/types'

import Territory from './territory/territory'
import Unit from './unit/unit'

import './board.scss'
import Order from '../ordersLayer/order/order'
import OrdersLayer from '../ordersLayer/ordersLayer'
import OrderType from '@shared/types/enums/OrderType'
import ProvinceId from '@shared/types/enums/ProvinceId'
import Nation from '@shared/types/enums/Nation'
import UnitType from '@shared/types/enums/UnitType'

// ? Recieve boardData as props or import?
// ? Import is simpler, prop;s allows for extending in the future.
export interface IBoardProps {
  boardData: IGameBoard,
  players: IGameJSON['players']
  turnData: IGameTurnJSON,
  activeTerritory: ProvinceId,
  onTileSelect: (title: string) => () => void,
  onMoveSelect: (move: OrderType) => () => void,
  newOrders: IOrder[]
}

interface IBoardState {

}

export default class Board extends Component <IBoardProps, IBoardState> {
  get activeTileData(): IBoardTerritory {
    if (!this.props.activeTerritory) return null
    return this.props.boardData.territories[this.props.activeTerritory]
  }

  getLocation = (territoryId: ProvinceId): {x: number, y: number} => {
    const territory = this.props.boardData.territories[territoryId]
    const {x, y} = territory.textLocation
    return {x, y}
  }

  getColour = (territoryId: ProvinceId): string => {
    if (!this.props.turnData) return null
    const ownedTerritories = Object.entries(this.props.turnData.ownedTerritories) as  [Nation, ProvinceId[]][]
    // Terrible performance, is there a better way?
    const empireTerritories = ownedTerritories.find(([empire, territories]) => {
      return territories.includes(territoryId)
    })
    if (!empireTerritories) {
      console.log(`${territoryId} is not owned`)
      return null
    }
    const empire = empireTerritories[0]
    console.log('this.props.players:', this.props.players)
    const colour = this.props.players.find(p => p.empire === empire).colour

    console.log('Colour found:', colour)
    return colour
  }

  render(props: IBoardProps, state: IBoardState) {
    type UnitsByProvince = [ProvinceId, {Type: UnitType, Nation: Nation}][]
    type TerritoriesByProvince = [ProvinceId, IGameBoard['territories']['nat']][]
    console.log('props.turnData:', props.turnData)
    const unitsByProvince  = (props.turnData ? Object.entries(props.turnData.state.Units) : []) as UnitsByProvince
    const territories = (props.boardData ? Object.entries(props.boardData.territories) : []) as TerritoriesByProvince
    return (
      <div className='gameBoard' id='gameBoard'>
        {/* Draw Territories */}
        <svg xmlns='http://www.w3.org/2000/svg' viewBox={props.boardData.viewBox} className={`territorySquare `} width='100%'>
          {territories.map(([id, tile]) => (
            <Territory
              id={id}
              tile={tile}
              isSelected={id === props.activeTerritory}
              onSelect={props.onTileSelect(id)}
              viewBox={props.boardData.viewBox}
              colour={this.getColour(id as ProvinceId)}
            />
          ))}
          {/* Draw Units */}
          {unitsByProvince.map(([id, unitData]) => (
            <Unit
              unitType={unitData.Type}
              viewBox={props.boardData.viewBox}
              location={this.getLocation(id)}
              empire={unitData.Nation}
              colour={props.colours[unitData.Nation]}
            />
          ))}
          {/* Draw Orders */}
          {/* Extract later into separate component */}
          <OrdersLayer boardData={props.boardData} newOrders={props.newOrders} turnData={props.turnData}/>
        </svg>
        {/* Draw Order Box */}
        {props.activeTerritory && (
          <div className='orderBox'>
            <span className='orderTitle'>{props.activeTerritory}</span><br/>
            <span onClick={props.onMoveSelect('Move')}>Move</span><br/>
            <span onClick={props.onMoveSelect('Support')}>Support</span><br/>
            <span onClick={props.onMoveSelect('Hold')}>Hold</span><br/>
            <span onClick={props.onMoveSelect(null)}>Cancel</span><br/>
          </div>
        )}
      </div>
    )
  }
}