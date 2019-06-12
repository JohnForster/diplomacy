import { IMove } from '@server/types/types';
import TurnModel, {ITurnModel} from '../models/turn.model'

export interface ITurnConfig {}

const TurnService = {
  async create(turnConfig: ITurnConfig): Promise<ITurnModel> {
    const turn = new TurnModel()
    Object.assign(turn, turnConfig)
    turn.save()
    return turn
  },

  async getByID(id: any): Promise<ITurnModel> {
    const turn =  await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    return turn
  },

  async getMoves(id: any, playerId: any) {
    const turn = await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    return turn.getMoves(playerId)
  },

  async addMove(id: any, playerId: any, ...moves: IMove[]) {
    const turn = await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    turn.addMoves(playerId, moves)
    turn.save()
  },
}

export default TurnService
