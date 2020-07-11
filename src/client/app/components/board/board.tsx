import {Component, h, Fragment} from 'preact'
import { createRef } from 'preact/compat'

import { IBoardTerritory, IGameBoard, IGameTurnJSON, IMove, OrderType } from '@shared/types'

import Territory from './territory/territory'
import Unit from './unit/unit'

import OrdersLayer from '../ordersLayer/ordersLayer'
import OrderBox from './orderBox/orderBox'
import NeutralPattern from './neutralPattern/neutralPattern'

import * as Styled from './styled'

// ? Recieve boardData as props or import?
// ? Import is simpler, prop;s allows for extending in the future.
export interface IBoardProps {
  boardData: IGameBoard, // Yes
  turnData: IGameTurnJSON, // Yes
  activeTerritory: string, // Yes
  onTileSelect: (title: string) => () => void,
  onMoveSelect: (move: OrderType) => () => void, // No, pass to OrderBox instead
  newOrders: IMove[], // No, board should not distinguishh between existing and new orders
  newOrder: Partial<IMove>,
  orders: Map<string, IMove> // Yes
}

export default class Board extends Component <IBoardProps> {
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

  // Created once for document
  svg = createRef<SVGSVGElement>()

  render(props: IBoardProps) {
    return (
      <Fragment>
        {/* Draw Order Box */}
         {/* Remove OrderBox/Sticky container from board.tsx?  */}
        <Styled.GameBoard id='gameBoard'>
            <Styled.StickyContainer>
              {props.activeTerritory && (
                <OrderBox 
                  onMoveSelect={props.onMoveSelect}
                  currentMove={props.newOrder.moveType}
                  activeTerritory={props.activeTerritory}
                />
              )}
            </Styled.StickyContainer>
            {/* Draw Territories */}
            <Styled.MapSvg
              xmlns='http://www.w3.org/2000/svg'
              viewBox={props.boardData.viewBox}
              ref={() => this.svg}
            >
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
              <OrdersLayer boardData={props.boardData} newOrders={props.newOrders} turnData={props.turnData}/>
              <NeutralPattern stripe={6}/>
            </Styled.MapSvg>
        </Styled.GameBoard>
      </Fragment>
    )
  }
}