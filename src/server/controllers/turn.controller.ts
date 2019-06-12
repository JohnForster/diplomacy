import checkAuthentication from '@server/_helpers/checkAuthentication'
import TurnService from '@server/services/turn.service'
import to from 'await-to-js'
import * as express from 'express'
import {Request, Response} from 'express'

class TurnController {
  static async view(req: Request, res: Response) {
    // Need to strip other players moves if turn isn't complete.
    const [err, turn] = await to(TurnService.getByID(req.params.turn_id))
    if (err) return res.status(400).send(err.message)
    if (turn) return res.json(turn)
    return res.status(500).send('Something went wrong in fetching turn data')
  }

  static async update(req: Request, res: Response) {
    // Method for making moves goes here
    // Need some error handling/checking that user is part of this turnID
    TurnService.addMove(req.body.turnID, req.session.passport.user, ...req.body.moves)
    res.send('success')
  }
}

// Move into API Routes file?
const router = express.Router()
router.route('/:turn_id')
  .get(
    checkAuthentication,
    TurnController.view,
  )
  .patch(
    checkAuthentication,
    TurnController.update,
  )
export default router
