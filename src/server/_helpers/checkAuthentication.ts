import { NextFunction, Request, Response } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) return res.status(401).send('Request not authenticated')
  next()
}

export const confirmAuthentication = ((req: Request, res: Response) => {
  return res.send('Authentication confirmed')
})
