import { IGameJSON, IGameTurnJSON } from '@shared/types'
import to from 'await-to-js'
import Axios from 'axios'

export const getGame = async (gameID: string) => {
  const [err, res]= await to(Axios.get<IGameJSON>(`/api/game/${gameID}`))
  if (err) throw new Error(`Error fetching game with ID '${gameID}'`)
  return res.data
}

export const getTurn = async (turnID: string) => {
  const [err, res] = await to(Axios.get<IGameTurnJSON>(`/api/turn/${turnID}`))
  if (err) throw new Error(`Error fetching game with ID '${turnID}'`)
  return res.data
}

export const getLatestTurn = async (gameID: string) => {
  const game = await getGame(gameID)
  if (!game) return null
  const turn = await getTurn(game.currentTurn)
  return turn || null
}