import IGameBoard, { IBoardTerritory } from '@shared/types/IGameBoard'
import {Component, Fragment, h} from 'preact'
import './board.scss'
import Territory from './territory/territory'
import { IGameTurnJSON } from '@shared/types'
import Army from './unit/army/army'
import Unit from './unit/unit'

// ? Recieve boardData as props or import?
// ? Import is simpler, prop;s allows for extending in the future.
export interface IBoardProps {
  boardData: IGameBoard,
  turnData: IGameTurnJSON,
  activeTerritory: string,
  onTileSelect: (title: string) => () => void,
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

  render(props: IBoardProps, state: IBoardState) {
    return (
      <Fragment>
        <div className='gameBoard' id='gameBoard'>
            {props.boardData.territories.map(tile => (
              <Territory
              tile={tile}
              isSelected={tile.title === props.activeTerritory}
              onSelect={props.onTileSelect(tile.title)}
              viewBox={props.boardData.viewBox}
              />
            ))}
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
        </div>
      </Fragment>
    )
  }
}