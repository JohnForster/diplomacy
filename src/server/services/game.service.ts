import GameModel, {IGameModel} from '../models/game.model'
import TurnService from './turn.service'

export interface IGameConfig {
  turnLengthMinutes: number
}

const GameService = {
  async create(gameConfig: IGameConfig, userId: any): Promise<IGameModel> {
    const game = new GameModel({createdBy: userId})
    Object.assign(game, gameConfig)

    const turn = await TurnService.create({})
    game.setTurn(turn.id)

    await game.save()
    return game
  },

  async getById(id: any): Promise<IGameModel> {
    console.log('Getting by id ', id)
    return await GameModel.findById(id)
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
    if (game.randomEmpires) turn.randomiseEmpires()
    if (turn.isReadyToStart()) {
      turn.start()
      return game
    }

    throw new Error('Game is not ready to start. ')
  }


}

export default GameService
