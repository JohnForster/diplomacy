import { IMove } from '@shared/types'
import TurnModel, {ITurnModel} from '../models/turn.model'
import initialApiState from '../data/initialApiState'
import { apiToGameState, IConversionData } from '@server/_helpers/converter'

export interface ITurnConfig {
  phase: 'movement' | 'retreat' | 'build'
}

const TurnService = {
  async create(turnConfig: ITurnConfig): Promise<ITurnModel> {
    const turn = new TurnModel()
    Object.assign(turn.info, turnConfig)
    await turn.save()
    return turn
  },

  async createFirstTurn(): Promise<ITurnModel> {
    const initialTurnData: IConversionData = {
      phaseNumber: 0,
      timeStarted: null,
      timeEnds: null,
      players: [],
    }
    const turnData = apiToGameState(initialApiState, initialTurnData)
    const turn = new TurnModel()
    Object.assign(turn, turnData)
    await turn.save()
    console.log('turn:', turn)
    return turn.toJSON()
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
    // ! Need to remove existing moves by this player
    const turn = await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    turn.addMoves(playerId, moves)
  },
}

export default TurnService
