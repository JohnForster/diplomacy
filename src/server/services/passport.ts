import to from 'await-to-js'
import { Express, Request, Response } from 'express'
import passport from 'passport'
import passportLocal from 'passport-local'
import { IUserModel } from '../models/user.model'
import UserService from './user.service'
const LocalStrategy = passportLocal.Strategy

export default async (app: Express, isDev: boolean) => {
  const verifyFunction: passportLocal.VerifyFunction = async (username, password, done) => {
    const [err, {user, message}] = await to(UserService.authenticate(username, password))
    if (err) {
      return done(err)
    }
    if (!user) return done(message)
    return done(null, user, {message})
  }

  // Configure passport to use the local strategy
  passport.use(new LocalStrategy(verifyFunction))

  // Tell passport how to serialize the user
  // Stores the user in req.session (which is how passport keeps track of things)
  passport.serializeUser((user: IUserModel, done) => {
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    const [err, user] = await to(UserService.getById(id))
    if (err) return done(err, null)
    done(null, user)
  })

  app.use(passport.initialize())
  app.use(passport.session())

  // ROUTES
  app.post('/api/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/game',
      failureRedirect: '/',
      failureFlash: true,
    }, (err, user, info) => {
      if (err) {
        return res.status(404).send('Internal Error')
      }

      if (!user) return res.status(404).send(info.message)
      req.logIn(user, (loginErr) => {
        if (loginErr) {
          return next(err)
        }
      })

      return res.send('You were authenticated and logged in!')
    })(req, res, next)
  })
}
