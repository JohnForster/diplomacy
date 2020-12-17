import to from "await-to-js";
import express, { Request, Response } from "express";

import userService from "../services/user.service";

/*
  The users controller defines all user routes for the api, the route definitions
  are grouped together at the top of the file and the implementations are below.
*/

abstract class UserController {
  // If using next only to handle errors, maybe rename?
  // public static async authenticate(req: Request, res: Response, next: (error: any) => void) {
  //   const [err, user] = await to(userService.authenticate(req.body))
  //   if (!user && !err) res.status(400).json({ message: 'Username or password is incorrect'})
  //   if (err) next(err)
  //   if (user) {
  //     // ?  Change these lines?
  //     res.cookie('access_token', user.token, { httpOnly: true })
  //     res.send()
  //   }
  // }

  static async register(
    req: Request,
    res: Response,
    next: (error: any) => void
  ) {
    const [err, user] = await to(userService.create(req.body));
    console.log(err, user);
    if (err) next(err);
    if (user) res.json({});
  }

  static async getAll(req: Request, res: Response, next: (error: any) => void) {
    const [err, users] = await to(userService.getAll());
    if (err) next(err);
    if (users) res.json(users);
  }

  // Create an interface that extends the espress Request type?
  static async getCurrent(req: any, res: Response, next: (error: any) => void) {
    const [err, user] = await to(userService.getById(req.user.sub));
    if (!err && !user) res.sendStatus(404);
    if (err) next(err);
    if (user) res.json(user);
  }

  static async getById(
    req: Request,
    res: Response,
    next: (error: any) => void
  ) {
    const [err, user] = await to(userService.getById(req.params.id));
    if (!err && !user) res.sendStatus(404);
    if (err) next(err);
    if (user) res.json(user);
  }

  static async update(req: Request, res: Response, next: (error: any) => void) {
    const [err, user] = await to(userService.update(req.params.id, req.body));
    if (err) next(err);
    if (user) res.json(user);
  }

  static async _delete(
    req: Request,
    res: Response,
    next: (error: any) => void
  ) {
    const [err, user] = await to(userService._delete(req.params.id));
    if (err) next(err);
    if (user) res.json({ message: "User deleted" });
  }
}

// ? Move routes into a separate file?
const router = express.Router();
// router.post('/authenticate', UserController.authenticate)
router.post("/register", UserController.register);
router.get("/", UserController.getAll);
router.get("/current", UserController.getCurrent);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.update);
router.delete("/:id", UserController._delete);

export default router;
