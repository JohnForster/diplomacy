import {h, Fragment, FunctionalComponent} from 'preact'
import { useRef } from 'preact/compat'

import { IGameBoard, IGameTurnJSON, IMove } from '@shared/types'


import { getColour } from '@client/utils/getColour'
import { getLocation } from '@client/utils/getLocation'

import Territory from './territory/territory'
import Unit from './unit/unit'

import OrdersLayer from '../ordersLayer/ordersLayer'
import NeutralPattern from './neutralPattern/neutralPattern'

import * as Styled from './styled'

export interface IBoardProps {
  boardData: IGameBoard,
  turnData: IGameTurnJSON,
  onTerritoryClick: (title: string) => () => void,
  orders: Map<string, IMove>,
  // displayOrders: boolean
}

const Board: FunctionalComponent<IBoardProps> = (props) => {
  // Created once for document
  const svgRef = useRef<SVGSVGElement>()
  // const svgRef = createRef() // ! This might be required?

  return (
      <Fragment>
        <Styled.GameBoard id='gameBoard'>
          {/* Draw Territories */}
          <Styled.MapSvg
            xmlns='http://www.w3.org/2000/svg'
            viewBox={props.boardData.viewBox}
            ref={() => svgRef}
          >
            {props.boardData.territories.map(tile => (
              <Territory
                tile={tile}
                onSelect={props.onTerritoryClick(tile.title)}
                viewBox={props.boardData.viewBox}
                colour={getColour(props.turnData, tile.title)}
              />
            ))}
            {/* Draw Units */}
            {props.turnData?.players?.map(player => (
              player.ownedUnits.map(unit => (
                <Unit
                  unitType={unit.unitType}
                  viewBox={props.boardData.viewBox}
                  location={getLocation(props.boardData, unit.location)}
                  empire={player.empire}
                  colour={player.colour}
                />
              ))
            ))}
            {/* Draw Orders */}
            <OrdersLayer boardData={props.boardData} orders={props.orders}/>
            <NeutralPattern stripe={6}/>
          </Styled.MapSvg>
        </Styled.GameBoard>
      </Fragment>
    )
  }

  export default Board