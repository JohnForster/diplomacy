import to from 'await-to-js'
import { Express, Request, Response } from 'express'
import passport from 'passport'
import passportLocal from 'passport-local'
import { IUserModel } from '../models/user.model'
import UserService from './user.service'
const LocalStrategy = passportLocal.Strategy

export default async (app: Express, isDev: boolean) => {
  const verifyFunction: passportLocal.VerifyFunction = async (username, password, done) => {
    console.log(`Attempting to verify user '${username}'`)
    const [err, {user, message}] = await to(UserService.authenticate(username, password))
    if (err) {
      console.log('INSIDE VERIFY FUNCITON')
      console.log(`${err}`)
      return done(err)
    }
    return done(null, user, {message})

    // ! Can be removed once everything is working
    // const [err, user] = await to(UserModel.findOne({username}).exec())
    // if (err) return done(err)
    // if (!user) return done(null, false, { message: 'Incorrect username!' })
    // const [validErr, isValid] = await to(user.validatePassword(password))
    // if (validErr) console.log(`validErr: ${validErr}`)
    // console.log(`isValid: ${isValid}`)
    // if (user && !isValid) {
    //   console.log('User exists but cannot be validated')
    //   return done(null, false, { message: 'Incorrect Password!' })
    // }
    // return done(null, user)
  }

  // Configure passport to use the local strategy
  passport.use(new LocalStrategy(verifyFunction))

  // Tell passport how to serialize the user
  // Stores the user in req.session (which is how passport keeps track of things)
  passport.serializeUser((user: IUserModel, done) => {
    console.log('Inside serializeUser callback. User id is saved to the session file store here')
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    // Equally, deserializing is restoring the object from a database
    console.log('Inside deserializeUser callback. User id is retrieved here')
    const [err, user] = await to(UserService.getById(id))
    if (err) return done(err, null)
    done(null, user)
  })

  app.use(passport.initialize())
  app.use(passport.session())

  // ROUTES
  app.post('/login', (req, res, next) => {
    passport.authenticate('local', {failureFlash: true}, (err, user, info) => {
      if (err) {
        return res.send('An error ocurred while attempting to authenticate this user') 
      }
      if (!user) return res.send(info.message)
      req.logIn(user, (loginErr) => {
        if (loginErr) return res.send(loginErr.message)
        return res.send('You were authenticated and logged in!')
      })
    })(req, res, next)
  })

  app.use('/authRequired', (req: Request, res: Response) => {
    console.log(`req.isAuthenticated(): ${req.isAuthenticated()}`)
    if (req.isAuthenticated()) {
      return res.send('You hit the authentication endpoint')
    }
    res.redirect('/')
  })
}
