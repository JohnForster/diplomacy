import express, { Express, Request, Response } from 'express'
import path from 'path'

import game from './controllers/game.controller'
import user from './controllers/user.controller'

export default (app: Express, isDev: boolean) => {
  const middlePath = isDev ? '../../dist' : ''

  app.use(express.static(path.join(__dirname, middlePath, '/client')))

  const index = path.join(__dirname, middlePath, '/client/index.html')
  app.get('/', (req: Request, res: Response) => {
    res.sendFile(index)
  })

  app.use('/game', game)
  app.use('/user', user)
}
