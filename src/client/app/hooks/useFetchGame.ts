import { useEffect } from 'preact/hooks';
import { Action, ActionType } from '../pages/game/state/actions';
import { getGame, getTurn } from '../services/gameService';

export const useFetchGame = (gameID: string, dispatch: (action: Action) => void) => useEffect(() => {
  getGame(gameID)
    .then(game => {
      dispatch({ type: ActionType.setGame, payload: game})
      return game
    })
    .then(game => getTurn(game.currentTurn))
    .then(turn => {
      dispatch({type: ActionType.setTurn, payload: turn})
      return turn
    })
    .then(turn => dispatch({type: ActionType.loadMoves, payload: turn}))
    .catch(error => console.error(error))
}, [gameID])