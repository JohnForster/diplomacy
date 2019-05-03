import express, { Express, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import path from 'path'

import game from './controllers/game'
import user from './controllers/user'

import User from './models/old_user.ignore'

import config from './config';

export default (app: Express, isDev: boolean) => {
  const middlePath = isDev ? '../../dist' : ''

  app.use(express.static(path.join(__dirname, middlePath, '/client')))

  const HTML_FILE = path.join(__dirname, middlePath, '/client/index.html')
  app.get('/', (req: Request, res: Response) => {
    res.sendFile(HTML_FILE)
  })

  app.use('/game', game)
  app.use('/user', user)


  // app.use('/user', user)
  // app.post('/auth/login', Auth.login)
  // app.post('/auth/signup', Auth.signup)
  // app.get('/testAuth', ensureAuthentication, (req: Request, res: Response) => {
  //   res.send('Authentication worked!')
  // })
  // app.get('/game/:game_id/moves/:player_id')
}
