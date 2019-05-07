
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import config from '../config'
import User from '../models/user'

/*
  The user service contains the core business logic for user authentication and management in the node api;
  it encapsulates all interaction with the mongoose user model and exposes a simple set of methods which are
  used by the users controller below.
*/

// For typescripty goodness, make services extend a common interface?
export default abstract class UserService {
  /**
   * @param {String} username The username of the user to be identified.
   * @param {String} password The plaintext password
   * @return A promise to be resolved with an object with the userdata (without the hash) and the json web token
   */
  public static async authenticate({username, password}: {username: string, password: string}): Promise<any> {
    // ! Need typing for the return object
    // Could refactor await statements to use await-to-js?
    const user = await User.findOne({ username })
    if (!user) return
    const comparison = await bcrypt.compare(password, user.hash)
    if (comparison) {
      const { hash, ...userWithoutHash } = user.toObject()
      const token = jwt.sign({sub: user.id}, config.TOKEN_SECRET)
      return {
        ...userWithoutHash,
        token,
      }
    }
  }

  /** Returns all users, without their hashes */
  public static async getAll() {
    return await User.find().select('-hash')
  }

  public static async getById(id: string) {
    return await User.findById(id).select('-hash')
  }

  public static async create(userParams: any) {
    // ! Do we need further validation or is this handled by the mongoose schema?
    if (await User.findOne({username: userParams.username})){
      throw new Error(`Username "${userParams.username}" is taken`)
    }

    const user = new User(userParams)

    if (userParams.password) {
      const hash = await bcrypt.hashSync(userParams.password, 10)
      user.hash = hash
    }

    return await user.save()
  }

  public static async update(id: string, userParam: any) {
    const user = await User.findById(id)
    if (!user) throw new Error (`User not found. (id: ${id})`)
    if (user.username !== userParam.username) {
      throw new Error ('Cannot change username')
    }

    if (userParam.password) {
      userParam.hash = await bcrypt.hash(userParam.password, 10)
    }

    // ? Does this not store the plaintext password in the user?
    Object.assign(user, userParam)

    await user.save()
    return user
  }

  // ? Why the underscore?
  public static async _delete(id: string) {
    await User.findByIdAndRemove(id)
    return true
  }
}
