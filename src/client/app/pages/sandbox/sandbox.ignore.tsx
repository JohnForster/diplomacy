import {Component, h} from 'preact'

import boardData from '@client/assets/countryData'
import Board from '@client/app/components/board/board'
import { IGameTurnJSON } from '@shared/types'

export interface ISandboxProps {
  
}

interface ISandboxState {
  gameTurn: IGameTurnJSON
}

export default class Sandbox extends Component <ISandboxProps, ISandboxState> {
  // state: ISandboxState = {
  //   _id: '',
  //   gameTurn: {
  //     info: {
  //       phaseNumber: 0,
  //       year: 1901,
  //       season: 'spring',
  //       phase: 'movement',
  //       timeStarted: 0,
  //       timeEnds: 0,
  //       isComplete: false
  //     },
  //     previousState: ''
  //     players: [
  //       {empire: 'England', colour: 'e21',  ownedTerritories }
  //     ]
  //   }
  // }

  public render(props: ISandboxProps, state: ISandboxState) {
    return (
      <Board
        boardData={boardData}
        activeTerritory={''}
        onTileSelect={(name) => () => console.log('Clicked tile ', name)}
        onMoveSelect={(name) => () => console.log('Clicked move ', name)}
        turnData={state.turn}
        newOrders={[]}
        newOrder={{}}
      />
    )
  }
}