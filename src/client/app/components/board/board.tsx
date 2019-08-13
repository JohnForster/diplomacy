import IGameBoard from '@shared/types/IGameBoard'
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
  get activeTileData(): IGameBoard['territories'][0] {
    if (!this.props.activeTerritory) return null
    return this.props.boardData.territories
      .find(t => t.title === this.props.activeTerritory)
  }

  render(props: IBoardProps, state: IBoardState) {
    return (
      <Fragment>
          {props.boardData.territories.map(tile => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.boardData.viewBox} className='gameBoard' id='gameBoard'>
              <Territory
              tile={tile}
              isSelected={tile.title === props.activeTerritory}
              onSelect={props.onTileSelect(tile.title)}
              />
            </svg>
          ))}
        {props.activeTerritory && 
          <div style={`position: absolute; top:${this.activeTileData.textLocation.y}px; left:${this.activeTileData.textLocation.x}px`}>
            Hello {`top:${this.activeTileData.textLocation.y}px; left:${this.activeTileData.textLocation.x}px`}
          </div>
        }
      </Fragment>
    )
  }
}