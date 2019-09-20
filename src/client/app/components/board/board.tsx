import {Component, h} from 'preact'

import { IBoardTerritory, IGameBoard, IGameTurnJSON, IMove } from '@shared/types'

import Territory from './territory/territory'
import Unit from './unit/unit'

import './board.scss'
import Order from './order/order'

// ? Recieve boardData as props or import?
// ? Import is simpler, prop;s allows for extending in the future.
export interface IBoardProps {
  boardData: IGameBoard,
  turnData: IGameTurnJSON,
  activeTerritory: string,
  onTileSelect: (title: string) => () => void,
  newOrders: IMove[]
}

interface IBoardState {
  activeTerritory: string
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
    return {x: parseInt(x, 10), y: parseInt(y, 10)}
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
          {props.turnData && props.turnData.info.isComplete && props.turnData.players.map(player => (
            player.moves.map(order => <Order {...order} boardData={props.boardData}/>)
          ))}

          {props.newOrders && props.newOrders.map(order => (
            <Order {...order} boardData={props.boardData} />
          )) }
      </div>
    )
  }
}