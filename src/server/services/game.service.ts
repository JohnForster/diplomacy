import GameModel, {IGameModel} from '../models/game.model'
import TurnService from './turn.service'
import shuffle from 'lodash.shuffle'
import Nation from '@shared/types/enums/Nation'
import initialState from '@server/data/initialState'
import initialTerritories from '@server/data/initialTerritories'
import { stateToDb } from '@server/_helpers/stateToDb'
import { IApiStateJSON, IApiStateDB } from '@shared/types'

export interface IGameConfig {
  turnLengthMinutes: number
}

const isReadyToStart = (game: IGameModel) => {
  return (
    game &&
    game.currentPlayerIds.length === 7
  )
}

class GameService {
  async create(gameConfig: IGameConfig, userId: any): Promise<IGameModel> {
    const game = new GameModel({createdBy: userId})
    Object.assign(game, gameConfig)

    await game.save()
    return game
  }

  async getById(id: any): Promise<IGameModel> {
    console.log('Getting by id ', id)
    return await GameModel.findById(id)
  }

  async getLatest(): Promise<IGameModel> {
    const turn = await GameModel.findOne().limit(1).sort({ createdAt: -1 })
    if (!turn) throw new Error('No game found')
    return turn
  }

  async _delete(id: string) {
    await GameModel.findByIdAndRemove(id)
    return true
  }

  async joinGame(gameID: string, playerID: string, colour?: string) {
    const game = await GameModel.findById(gameID)
    if (!game) throw new Error ('Game not found')
    const turn = await TurnService.getByID(game.currentTurn)
    turn.addPlayer(playerID, colour)
    return game
  }

  // Move into separate helper?
  randomiseEmpires(playerIds: IGameModel['currentPlayerIds']): Map<Nation, string> {
    const players = new Map<Nation, string>()
    console.log('Randomising empires...')
    const empires: Nation[] = shuffle(['England', 'France', 'Germany', 'Italy', 'Austria', 'Russia', 'Turkey'])
    playerIds.forEach(playerId => {
      players.set(empires.pop(), playerId.toHexString())
    })
    return players
  }

  async createStartingTurn(game: IGameModel) {
    const timeStarted = Date.now()
    return await TurnService.createNewTurn({
      info: {
        timeStarted,
        timeEnds: timeStarted + game.turnLengthMinutes * 60,
        players: this.randomiseEmpires(game.currentPlayerIds)
      },
      ownedTerritories: new Map(Object.entries(initialTerritories)),
      state: stateToDb(initialState),
    })
  }

  async start(gameID: string): Promise<IGameModel> {
    const game = await GameModel.findById(gameID)
    if (!game) throw new Error ('Game not found')
    if (isReadyToStart(game)) {
      const newTurnId = await this.createStartingTurn(game)
      await game.setTurn(newTurnId)
      return game
    }

    // const turn = await TurnService.getByID(game.currentTurn)
    // if (game.randomEmpires) await turn.randomiseEmpires()
    // if (turn.isReadyToStart()) {
    //   turn.start()
    //   return game
    // }

    throw new Error('Game is not ready to start.')
  }

  async processTurn(gameID: string): Promise<IGameModel> {
    const game = await GameModel.findById(gameID)
    const newTurnJSON = await TurnService.adjudicate(game.currentTurn)
    const newTurnId = await TurnService.createNextTurn(game.currentTurn, game.turnLengthMinutes, newTurnJSON)
    await game.addToHistory(game.currentTurn)
    await game.setTurn(newTurnId)
    // if (!game) throw Error('Game not found!')
    // await game.advanceTurn()
    return game
  }
}

const gameService = new GameService()

export default gameService
