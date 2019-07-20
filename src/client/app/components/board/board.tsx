import {Component, h} from 'preact'
import boardData from '@client/assets/countryData'
import Territory from './territory/territory';
import './board.scss'

// ? Recieve boardData as props or import?
// ? Import is simpler, prop;s allows for extending in the future.
export interface IBoardProps {
  boardData?: any
}

interface IBoardState {
  
}

export default class Board extends Component <IBoardProps, IBoardState> {
  public render(props: IBoardProps, state: IBoardState) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={boardData.viewBox} className='gameBoard' id='gameBoard'>
        {boardData.territories.map(tile => <Territory tile={tile}/>)}
      </svg>
    )
  }
}