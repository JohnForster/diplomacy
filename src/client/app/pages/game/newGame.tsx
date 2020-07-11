import { FunctionalComponent, h, Fragment } from 'preact'
import { useState, useReducer } from 'preact/hooks'
import type { IGameTurnJSON, IGameJSON, IMove } from '@shared/types'
import ordersReducer from './ordersReducer'
import boardData from '@shared/resources/countryData'

import Board from '@client/app/components/board/board'

interface IGameProps {
  userID: string,
  logOut: () => void,
}

const Game: FunctionalComponent<IGameProps> = (props) => {
  const [game, setGame] = useState<IGameJSON>(null)
  const [turn, setTurn] = useState<IGameTurnJSON>(null)
  const [activeOrders, dispatch] = useReducer(ordersReducer, new Map<string, IMove>())



  return (<Fragment>
    <Board
      boardData={boardData}
      turnData={turn}
      orders={activeOrders}

    />
  </Fragment>)
}