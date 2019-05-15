import to from 'await-to-js';
import bcrypt from 'bcrypt'

import UserModel, { IUserModel } from '../models/user.model'

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
  static async authenticate(username: string, password: string): Promise<{user: IUserModel, message: string}> {
    // Could refactor await statements to use await-to-js?
    console.log('INSIDE USER.SERVICE AUTHENTICATE METHOD')
    const [err, user] = await to<IUserModel>(UserModel.findOne({ username }).exec())
    console.log(`user: ${user}`)
    if (err) throw err
    if (user === null) return {user, message: 'User not found'}
    if (user) {
      const passwordsMatch = await user.validatePassword(password)
      console.log(`passwordsMatch: ${passwordsMatch}`)
      if (!passwordsMatch) return {user: null, message: 'Passwords did not match'}
      if (passwordsMatch) return {user, message: 'success'}
    }
  }

  /** Returns all users, without their hashes */
  static async getAll() {
    return await UserModel.find().select('-hash')
  }

  static async getById(id: any): Promise<IUserModel> {
    return await UserModel.findById(id).select('-hash')
  }

  static async create(userParams: any) {
    console.log('INSIDE USER_OLD SERVICE CREATE METHOD')
    // ! Do we need further validation or is this handled by the mongoose schema?
    if (await UserModel.findOne({username: userParams.username})) {
      throw new Error(`Username "${userParams.username}" is taken`)
    }

    const user = new UserModel(userParams)
    // set hash here or in mongoose usermodel?
    if (userParams.password) {
      const hash = await bcrypt.hash(userParams.password, 10)
      user.hash = hash
    }

    console.log(`userParams.password: ${userParams.password}`)
    console.log(`user.hash: ${user.hash}`)
    return await user.save()
  }

  static async update(id: string, userParam: any) {
    const user = await UserModel.findById(id)
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
  static async _delete(id: string) {
    await UserModel.findByIdAndRemove(id)
    return true
  }
}
