import axios, { AxiosResponse } from 'axios'

import { IOrder, IGameTurnDB, IApiStateJSON, IApiStateDB } from '@shared/types'
import TurnModel, {ITurnModel} from '../models/turn.model'
import { RecursivePartial } from '@shared/types/recursivePartial'
import to from 'await-to-js'
import { stateToDb } from '@server/_helpers/stateToDb'
// import { stateToDb } from '@server/_helpers/stateToDb'

export interface ITurnConfig {
  phase: 'movement' | 'retreat' | 'build'
}

class TurnService {
  // Old
  // async create(turnConfig: ITurnConfig): Promise<ITurnModel> {
  //   const turn = new TurnModel()
  //   Object.assign(turn.info, turnConfig)
  //   turn.save()
  //   return turn
  // },

  async createNewTurn(turnConfig: RecursivePartial<IGameTurnDB>): Promise<string> {
    const turn = new TurnModel(turnConfig)
    await turn.save()
    return turn.id
  }

  async getByID(id: any): Promise<ITurnModel> {
    const turn =  await TurnModel.findById(id)
    if (!turn) throw new Error(`No turn found with id ${id}`)
    return turn
  }

  async getMoves(id: any, playerId: any) {
    const turn = await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    const empire = turn.getEmpireByPlayerId(playerId)
    return turn.getMovesByEmpire(empire)
  }

  async addMoves(id: any, playerId: any, ...moves: IOrder[]) {
    // TODO Need to remove existing moves by this player
    const turn = await TurnModel.findById(id)
    if (!turn) throw new Error('No turn found with that ID')
    const empire = turn.getEmpireByPlayerId(playerId)
    await turn.addMovesByEmpire(empire, moves)
  }

  async createNextTurn(prevTurnId: any, turnLengthMinutes: number, state: IApiStateJSON) {
    const prevTurn = await TurnModel.findById(prevTurnId) // Add error handling
    if (!prevTurn) throw new Error('No turn found with that ID')
    const timeStarted = Date.now()
    const turnId = await this.createNewTurn({
      ...prevTurn,
      info: {
        ...prevTurn.info,
        timeStarted,
        timeEnds: timeStarted + turnLengthMinutes * 60
      },
      state: stateToDb(state)
    })
    return turnId
  }

  async adjudicate<idType>(id: idType): Promise<IApiStateJSON> {
    const turn = await TurnModel.findById(id)
    const apiState: IApiStateJSON = turn.toJSON().state
    console.log('JSONified apiState:', apiState)
    const url = 'http://godip-adjudication.appspot.com/Classical'
    console.log('pinging godip')
    const [err, res] = await to(axios.post<any, AxiosResponse<IApiStateJSON>>(url, apiState))
    console.log('err, res:', err, res)
    return res.data
  }
}

const turnService = new TurnService()
export default turnService
