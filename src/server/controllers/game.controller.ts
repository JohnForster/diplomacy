import * as express from 'express'
import {Request, Response} from 'express'
import GameService, { IGameConfig } from '@server/services/game.service'
import to from 'await-to-js'
import TurnService from '@server/services/turn.service'
import checkAuthentication from '@server/_helpers/checkAuthentication'

function unless(expression: any,  ) {

}

class GameController {
  static async view(req: Request, res: Response) {
    // if (!req.isAuthenticated()) return res.status(401).send('User not authenticated')
    const [err, game] = await to(GameService.getById(req.params.game_id))
    if (err) {
      return res.status(400).send(err)
    }
    if (game) {
      const [err2, turn] = await to(TurnService.getByID(game.currentTurn))
      if (err2) {
        return res.status(400).send(err2.message)
      }
      // Need to add a method to the turn model to strip the moves of
      // other players if the turn isn't complete
      if (turn) {return res.json({game, turn})}
    }
    res.status(500).send('Something went wrong in fetching game/turn data')
  }

  static async create(req: Request, res: Response) {
    // if (!req.isAuthenticated()) return res.status(401).send('User not authenticated')
    const config: IGameConfig = req.body.config
    const [err, game] = await to(GameService.create(config, req.body.userID))
    if (err) {
      res.status(400).send(err)
    }
    if (game) res.json(game)
  }

  static async join(req: Request, res: Response) {
    const {gameID, playerID} = req.body
    if (!(gameID && playerID)) res.status(400).send('Require both gameID and playerID in request')
    const [err, game] = await to(GameService.joinGame(gameID, playerID))
    if (err) res.status(400).send(err)
    if (game) res.json(game)
  }
}

// Move into API Routes file?
const router = express.Router()
router.route('/')
  .post(
    checkAuthentication,
    GameController.create,
  )
router.route('/:game_id')
  .get(
    checkAuthentication,
    GameController.view,
  )
router.route('/:game_id')
  .get(
    checkAuthentication,
    GameController.view,
  )
export default router
