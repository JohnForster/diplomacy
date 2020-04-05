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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkAuthentication_1 = __importDefault(require("../_helpers/checkAuthentication"));
var turn_service_1 = __importDefault(require("../services/turn.service"));
var await_to_js_1 = __importDefault(require("await-to-js"));
var express = __importStar(require("express"));
var TurnController = /** @class */ (function () {
    function TurnController() {
    }
    TurnController.view = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, turn;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1.default(turn_service_1.default.getByID(req.params.turn_id))];
                    case 1:
                        _a = _b.sent(), err = _a[0], turn = _a[1];
                        turn.players.forEach(function (player) {
                            if (!player.playerID.equals(req.session.passport.user)) {
                                player.moves = [];
                            }
                        });
                        if (err)
                            return [2 /*return*/, res.status(400).send(err.message)];
                        if (turn)
                            return [2 /*return*/, res.json(turn)];
                        return [2 /*return*/, res.status(500).send('Something went wrong in fetching turn data')];
                }
            });
        });
    };
    TurnController.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO Need some error handling/checking that user is part of this turnID
                console.log('req.body.moves:', req.body.moves);
                turn_service_1.default.addMove.apply(turn_service_1.default, __spreadArrays([req.body.turnID, String(req.session.passport.user)], req.body.moves));
                res.send('success');
                return [2 /*return*/];
            });
        });
    };
    return TurnController;
}());
// Move into API Routes file?
var router = express.Router();
router.route('/:turn_id')
    .get(checkAuthentication_1.default, TurnController.view)
    .patch(checkAuthentication_1.default, TurnController.update);
exports.default = router;
