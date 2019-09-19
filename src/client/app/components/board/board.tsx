import IGameBoard, { IBoardTerritory } from '@shared/types/IGameBoard'
import {Component, Fragment, h} from 'preact'
import './board.scss'
import Territory from './territory/territory'

// ? Recieve boardData as props or import?
// ? Import is simpler, prop;s allows for extending in the future.
export interface IBoardProps {
  boardData: IGameBoard,
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
        </div>
      </Fragment>
    )
  }
}