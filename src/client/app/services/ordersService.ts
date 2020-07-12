import type { IMove } from '@shared/types'
import Axios from 'axios'

export const submitOrders = async (orders: IMove[], turnID: string) => {
  await Axios.patch(`/api/turn/${turnID}`, {
    moves: orders,
    turnID,
  })
  console.log('Orders submitted!', orders)
}