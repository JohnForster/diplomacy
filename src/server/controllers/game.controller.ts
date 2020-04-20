import checkAuthentication from '@server/_helpers/checkAuthentication'
import GameService, { IGameConfig } from '@server/services/game.service'
import to from 'await-to-js'
import express from 'express'
import {Request, Response} from 'express'

class GameController {
  static async view(req: Request, res: Response) {
    const [err, game] = await to(GameService.getById(req.params.game_id))
    if (err) return res.status(400).send(err)
    if (game) return res.json(game)
    return res.status(500).send('Something went wrong in fetching game data')
  }

  static async viewLatest(req: Request, res: Response) {
    const [err, game] = await to(GameService.getLatest())
    if (err) return res.status(400).send(err.message)
    if (game) return res.json(game)
    return res.status(500).send('Something went wrong in fetching the game')
  }

  static async create(req: Request, res: Response) {
    const config: IGameConfig = req.body.config
    const userID = req.session.passport.user
    const [err, game] = await to(GameService.create(config, userID))
    if (err) {res.status(400).send(err)}
    if (game) res.json(game)
  }

  static async join(req: Request, res: Response) {
    const {gameID, playerID, colour} = req.body
    if (!(gameID && playerID)) return res.status(400).send('Require both gameID and playerID in request')
    const [err, game] = await to(GameService.joinGame(gameID, playerID, colour))
    if (err) {
      console.log(err.message)
      res.status(400).send(err)
    }
    if (game) res.json(game)
  }

  static async start(req: Request, res: Response) {
    const [err, game] = await to(GameService.start(req.params.game_id))
    if (err) return res.status(400).send(err)
    if (game) return res.send('Game Started!')
  }

  static async nextTurn(req: Request, res: Response) {
    const [err, game] = await to(GameService.processTurn(req.params.game_id))
    console.log(err, game)
    if (err) return res.status(400).send(err)
    if (game) return res.json(game)
  }
}

// Move into API Routes file?
const router = express.Router()
router.route('/')
  .post(
    checkAuthentication,
    GameController.create,
  )
router.route('/latest')
    .get(
      checkAuthentication,
      GameController.viewLatest,
    )
router.route('/:game_id')
  .get(
    checkAuthentication,
    GameController.view,
  )
router.route('/join')
  .post(
    checkAuthentication,
    GameController.join,
  )
router.route('/:game_id/start')
  .post(
    checkAuthentication,
    GameController.start,
  )
router.route('/:game_id/next')
  .post(
    // method to check if in dev mode so that this can't be abused?
    GameController.nextTurn,
  )

export default router
