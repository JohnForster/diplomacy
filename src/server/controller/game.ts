import * as express from 'express'
import {Request, Response} from 'express'
import Game from '../model/game'

class GameController {
  public static view(req: Request, res: Response) {
    Game.findById(req.params.game_id, (err, game) => {
      if (err) {
        res.send(err)
        return
      }
      console.log(`Returning game with id: ${req.params.game_id}`)
      res.json(game)
    })
  }

  public static create(req: Request, res: Response) {
    const game = new Game()
    game.territories = req.body.territories
    game.save((err) => {
      if (err) {
        res.json(err)
        return
      }
      res.json({
        message: 'Game created!',
        data: game,
      })
    })
  }
}

// Move into API Routes file?
const router = express.Router()
router.route('/')
  .post(GameController.create)
router.route('/:game_id')
  .get(GameController.view)
export default router
