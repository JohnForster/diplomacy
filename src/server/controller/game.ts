import * as express from 'express'
import {Request, Response} from 'express'
import exampleGameState from './exampleGameState'
import Game from '../model/game'

class GameController {
  public static view(req: Request, res: Response){
    console.log('viewing games')
    Game.findById(req.params.game_id, (err, game) => {
      console.log(req)
      console.log(req.params.game_id)
      if (err) {
        res.send(err)
        return
      }
      res.json({
        message: 'Game details loading..',
        data: game
      })
    })
  }

  public static create(req: Request, res: Response){
    const game = new Game()
    console.log(Object.keys(req))
    console.log(req.body)
    game.territories = req.body.territories
    game.save((err) => {
      if (err) {
        res.json(err)
        return
      }
      res.json({
        message: 'Game created!',
        data: game
      })
    })
  }
}

// Move into API Routes file?
const router = express.Router()
router.route('/:game_id')
  .get(GameController.view)
  .post(GameController.create)
// (req: Request, res: Response) => {
//   const id = req.params.id
//   res.json(Game.getGameState(id))
// })

export default router
