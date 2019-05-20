import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) return res.status(401).send('Request not authenticated')
  next()
}
