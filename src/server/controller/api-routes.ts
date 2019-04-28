import * as express from 'express'
import {Request, Response} from 'express'

const router = express.Router()
router.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
  })
})

export default router