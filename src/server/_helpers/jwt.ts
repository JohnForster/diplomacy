import expressJwt, { IsRevokedCallback } from 'express-jwt'
import config from '../config'
import userService from '../services/user'

const jwt = () => {
  const secret = config.TOKEN_SECRET

  // isRevoked docs: https://github.com/auth0/express-jwt#revoked-tokens
  const options = {
    secret,
    isRevoked,
  }
  return expressJwt(options).unless({
    path: [
      // public routes that don't require authentication
      '/user/authenticate',
      '/user/register',
      '/',
      /login/,

      // Find a better way to do this?
      /assets/,
      '/bundle.js',
      '/game/5cc5d578382f88cc84d4f6e2',
    ],
  })
}

const isRevoked: IsRevokedCallback = async (req, payload, callback) => {
  const user = await userService.getById(payload.sub)

  // revoke token if user no longer exists
  if (!user) {
    return callback(null, true)
  }

  callback(null)
}

export default jwt
