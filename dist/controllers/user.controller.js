"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var await_to_js_1 = __importDefault(require("await-to-js"));
var express_1 = __importDefault(require("express"));
var user_service_1 = __importDefault(require("../services/user.service"));
/*
  The users controller defines all user routes for the api, the route definitions
  are grouped together at the top of the file and the implementations are below.
*/
var UserController = /** @class */ (function () {
    function UserController() {
    }
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
    UserController.register = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1.default(user_service_1.default.create(req.body))];
                    case 1:
                        _a = _b.sent(), err = _a[0], user = _a[1];
                        console.log(err, user);
                        if (err)
                            next(err);
                        if (user)
                            res.json({});
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, users;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1.default(user_service_1.default.getAll())];
                    case 1:
                        _a = _b.sent(), err = _a[0], users = _a[1];
                        if (err)
                            next(err);
                        if (users)
                            res.json(users);
                        return [2 /*return*/];
                }
            });
        });
    };
    // Create an interface that extends the espress Request type?
    UserController.getCurrent = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1.default(user_service_1.default.getById(req.user.sub))];
                    case 1:
                        _a = _b.sent(), err = _a[0], user = _a[1];
                        if (!err && !user)
                            res.sendStatus(404);
                        if (err)
                            next(err);
                        if (user)
                            res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.getById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1.default(user_service_1.default.getById(req.params.id))];
                    case 1:
                        _a = _b.sent(), err = _a[0], user = _a[1];
                        if (!err && !user)
                            res.sendStatus(404);
                        if (err)
                            next(err);
                        if (user)
                            res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.update = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1.default(user_service_1.default.update(req.params.id, req.body))];
                    case 1:
                        _a = _b.sent(), err = _a[0], user = _a[1];
                        if (err)
                            next(err);
                        if (user)
                            res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController._delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1.default(user_service_1.default._delete(req.params.id))];
                    case 1:
                        _a = _b.sent(), err = _a[0], user = _a[1];
                        if (err)
                            next(err);
                        if (user)
                            res.json({ message: 'User deleted' });
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
// ? Move routes into a separate file?
var router = express_1.default.Router();
// router.post('/authenticate', UserController.authenticate)
router.post('/register', UserController.register);
router.get('/', UserController.getAll);
router.get('/current', UserController.getCurrent);
router.get('/:id', UserController.getById);
router.put('/:id', UserController.update);
router.delete('/:id', UserController._delete);
exports.default = router;
