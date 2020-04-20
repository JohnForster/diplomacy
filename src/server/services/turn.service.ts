import { IMove, IGameTurnJSON } from '@shared/types'
import TurnModel, {ITurnModel} from '../models/turn.model'
import initialApiState from '../data/initialApiState'
import { apiToGameState, IConversionData, gameToApiState } from '@server/_helpers/converter'
import to from 'await-to-js'
import axios from 'axios'
import { IApiStateJSON } from '@shared/types/IApiState'

export interface ITurnConfig {
  phase: 'movement' | 'retreat' | 'build'
}

class TurnService{
  async create(apiData: IApiStateJSON, turnData: IConversionData): Promise<ITurnModel> {
    const turn = new TurnModel()
    const newTurnData = apiToGameState(apiData, turnData)
    Object.assign(turn, newTurnData)
    await turn.save()
    return turn
  }

  async createFirstTurn(): Promise<ITurnModel> {
    const initialTurnData: IConversionData = {
      phaseNumber: 0,
      timeStarted: null,
      timeEnds: null,
      players: [],
    }
    const turn = await this.create(initialApiState, initialTurnData)
    return turn.toJSON()
  }

  async getByID(id: any): Promise<ITurnModel> {
    const turn =  await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    return turn
  }

  async getMoves(id: any, playerId: any) {
    const turn = await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    return turn.getMoves(playerId)
  }

  async addMove(id: any, playerId: any, ...moves: IMove[]) {
    // ! Need to remove existing moves by this player
    const turn = await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    turn.addMoves(playerId, moves)
  }

  async advanceById(id: any): Promise<ITurnModel> {
    const turn = (await TurnModel.findById(id)).toJSON() as IGameTurnJSON
    const turnAsApiJSON = gameToApiState(turn)
    const [err, res] = await to(axios.post('http://godip-adjudication.appspot.com/Classical', turnAsApiJSON))
    const conversionData: IConversionData = {
      phaseNumber: turn.info.phaseNumber + 1,
      timeStarted: null,
      timeEnds: null,
      players: turn.players.map(({colour, empire, playerID}) => ({colour, empire, playerID}))
    }
    const newTurn = await this.create(res.data, conversionData)
    return newTurn
  }
}

const turnService = new TurnService()
export default turnService
