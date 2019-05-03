import * as express from 'express'
import {Request, Response} from 'express'

class UserController {
  public static create(req: Request, res: Response){
    console.log(req.body)
  }
}

const router = express.Router()
router.route('/')
  .post(UserController.create)

export default router
