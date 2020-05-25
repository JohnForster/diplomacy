import {Component, h, Fragment} from 'preact'
import { createRef } from 'preact/compat'

import { IBoardTerritory, IGameBoard, IGameTurnJSON, IMove, OrderType } from '@shared/types'

import Territory from './territory/territory'
import Unit from './unit/unit'

import OrdersLayer from '../ordersLayer/ordersLayer'
import OrderBox from './orderBox/orderBox'

import * as Styled from './styled'

// ? Recieve boardData as props or import?
// ? Import is simpler, prop;s allows for extending in the future.
export interface IBoardProps {
  boardData: IGameBoard,
  turnData: IGameTurnJSON,
  activeTerritory: string,
  onTileSelect: (title: string) => () => void,
  onMoveSelect: (move: OrderType) => () => void,
  newOrders: IMove[],
  newOrder: Partial<IMove>,
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

   // Created once for document

  alert_coords = (evt: MouseEvent) => {
    const svg = this.svg.current
    const pt = svg.createSVGPoint()
    pt.x = evt.clientX
    pt.y = evt.clientY

    // The cursor point, translated into svg coordinates
    const cursorpt =  pt.matrixTransform(svg.getScreenCTM().inverse())
    console.log('(' + Math.round(cursorpt.x) + ', ' + Math.round(cursorpt.y) + ')')
  }

  svg = createRef<SVGSVGElement>()

  render(props: IBoardProps, state: IBoardState) {
    return (
      <Fragment>
        {/* Draw Order Box */}
        <Styled.GameBoard id='gameBoard'>
          <Styled.StickyContainer>
            {props.activeTerritory && (
              <OrderBox onMoveSelect={props.onMoveSelect} activeTerritory={props.activeTerritory}/>
            )}
          </Styled.StickyContainer>
          {/* Draw Territories */}
          <Styled.MapSvg
            xmlns='http://www.w3.org/2000/svg'
            viewBox={props.boardData.viewBox}
            ref={() => this.svg}
            // @ts-ignore
            onClick={this.alert_coords}
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
            {/* Extract later into separate component */}
            <OrdersLayer boardData={props.boardData} newOrders={props.newOrders} turnData={props.turnData}/>
          </Styled.MapSvg>
        </Styled.GameBoard>
      </Fragment>
    )
  }
}