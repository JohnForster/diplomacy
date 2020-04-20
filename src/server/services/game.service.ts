import GameModel, {IGameModel} from '../models/game.model'
import TurnService from './turn.service'

export interface IGameConfig {
  turnLengthMinutes: number
}

const GameService = {
  async create(gameConfig: IGameConfig, userId: any): Promise<IGameModel> {
    const game = new GameModel({createdBy: userId})
    Object.assign(game, gameConfig)

    const turn = await TurnService.createFirstTurn()
    game.setTurn(turn.id)

    await game.save()
    console.log(`New game created with id ${game._id}`)
    return game
  },

  async getById(id: any): Promise<IGameModel> {
    console.log('Getting by id ', id)
    return await GameModel.findById(id)
  },

  async getLatest(): Promise<IGameModel> {
    const turn = await GameModel.findOne().limit(1).sort({ createdAt: -1 })
    if (!turn) throw new Error('No game found')
    return turn
  },

  async _delete(id: string) {
    await GameModel.findByIdAndRemove(id)
    return true
  },

  async joinGame(gameID: string, playerID: string, colour?: string) {
    const game = await GameModel.findById(gameID)
    if (!game) throw new Error ('Game not found')
    const turn = await TurnService.getByID(game.currentTurn)
    turn.addPlayer(playerID, colour)
    return game
  },

  async start(gameID: string): Promise<IGameModel> {
    const game = await GameModel.findById(gameID)
    if (!game) throw new Error ('Game not found')

    const turn = await TurnService.getByID(game.currentTurn)

    if (game.randomEmpires) await turn.randomiseEmpires()
    if (turn.isReadyToStart()) {
      turn.start()
      return game
    }

    throw new Error('Game is not ready to start. ')
  },

  async processTurn(gameID: string): Promise<IGameModel> {
    const game = await GameModel.findById(gameID)
    if (!game) throw Error('Game not found!')
    await game.advanceTurn()
    return game
  },
}

export default GameService
