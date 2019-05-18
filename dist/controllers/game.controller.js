"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express = __importStar(require("express"));
var checkAuthentication_1 = __importDefault(require("../_helpers/checkAuthentication"));
var game_model_1 = __importDefault(require("../models/game.model"));
var await_to_js_1 = __importDefault(require("await-to-js"));
var GameController = /** @class */ (function () {
    function GameController() {
    }
    GameController.view = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, game;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1["default"](game_model_1["default"].findById(req.params.game_id).exec())];
                    case 1:
                        _a = _b.sent(), err = _a[0], game = _a[1];
                        if (err) {
                            return [2 /*return*/, res.send(err)];
                        }
                        if (game) {
                            console.log("Returning game with id: " + req.params.game_id);
                            return [2 /*return*/, res.json(game)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameController.create = function (req, res) {
        var game = new game_model_1["default"]();
        game.territories = req.body.territories;
        game.save(function (err) {
            if (err) {
                res.json(err);
                return;
            }
            res.json({
                message: 'Game created!',
                data: game
            });
        });
    };
    return GameController;
}());
// Move into API Routes file?
var router = express.Router();
router.route('/')
    .post(GameController.create);
router.route('/:game_id')
    .get(checkAuthentication_1["default"], GameController.view);
exports["default"] = router;
