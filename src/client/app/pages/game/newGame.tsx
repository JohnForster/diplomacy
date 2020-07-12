import { FunctionalComponent, h, Fragment } from 'preact'
import { useReducer, useEffect } from 'preact/hooks'

import type { IMove, OrderType } from '@shared/types'
import boardData from '@shared/resources/countryData'

import Board from '@client/app/components/board/newBoard'
import { getGame, getTurn } from '@client/app/services/gameService'
import { gameReducer, IGameState } from './state/gameReducer'
import { ActionType } from './state/actions'
import { useFetchGame } from '@client/app/hooks/useFetchGame'
import OrdersBox from '@client/app/components/ordersBox/ordersBox'
import { getPlayer } from '@client/utils/getPlayer'

const initialState: IGameState = {
  game: null,
  turn: null,
  isInteractive: true,
  orders: new Map<string, IMove>(),
  playerOrders: new Map<string, Partial<IMove>>()
}
interface IGameProps {
  userID: string,
  gameID: string,
  logOut: () => void,
}

const Game: FunctionalComponent<IGameProps> = (props) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  useFetchGame(props.gameID, dispatch)

  const onTerritoryClick = (t: string)=> () => console.log(`${t} was clicked`)

  const updateLocation = (location: string, destination: string, destinationType: 'to' | 'supportFrom' | 'convoyFrom') =>
    dispatch({type: ActionType.setLocation, payload: { location, destination, destinationType}})

  const updateOrderType = (location: string, orderType: OrderType) =>
    dispatch({type: ActionType.setOrderType, payload: {location, orderType}})

  const completeOrder = (location: string) =>
    dispatch({type: ActionType.addMove, payload: {location}})

  const removeOrder = (location: string) =>
    dispatch({type: ActionType.deleteMove, payload: {location}})

  return (
    <Fragment>
      <Board
        boardData={boardData}
        turnData={state.turn}
        orders={state.orders}
        onTerritoryClick={onTerritoryClick}
      />
      {state.turn &&(
        <OrdersBox
          updateLocation={updateLocation}
          updateOrderType={updateOrderType}
          completeOrder={completeOrder}
          removeOrder={removeOrder}
          playerUnits={getPlayer(state.turn, props.userID).ownedUnits}
          playerOrders={state.playerOrders}
        />
      )}
    </Fragment>
  )
}

export default Game