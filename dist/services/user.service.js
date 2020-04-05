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
var bcrypt_1 = __importDefault(require("bcrypt"));
var user_model_1 = __importDefault(require("../models/user.model"));
/*
  The user service contains the core business logic for user authentication and management in the node api;
  it encapsulates all interaction with the mongoose user model and exposes a simple set of methods which are
  used by the users controller below.
*/
// For typescripty goodness, make services extend a common interface?
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.authenticate = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, user, passwordsMatch;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1.default(user_model_1.default.findOne({ username: username }).exec())];
                    case 1:
                        _a = _b.sent(), err = _a[0], user = _a[1];
                        if (err)
                            throw err;
                        if (user === null)
                            return [2 /*return*/, { user: user, message: 'User not found' }];
                        if (!user) return [3 /*break*/, 3];
                        return [4 /*yield*/, user.validatePassword(password)];
                    case 2:
                        passwordsMatch = _b.sent();
                        if (!passwordsMatch)
                            return [2 /*return*/, { user: null, message: 'Passwords did not match' }];
                        return [2 /*return*/, { user: user, message: 'success' }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** Returns all users, without their hashes */
    UserService.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.find().select('-hash')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.findById(id).select('-hash')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.create = function (userParams) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.findOne({ username: userParams.username })];
                    case 1:
                        // ! Do we need further validation or is this handled by the mongoose schema?
                        if (_b.sent()) {
                            throw new Error("Username \"" + userParams.username + "\" is taken");
                        }
                        if (!userParams.password)
                            throw new Error('Password required');
                        user = new user_model_1.default(userParams);
                        // ? set hash here or in mongoose usermodel?
                        // I think inside usermodel, including password validation.
                        _a = user;
                        return [4 /*yield*/, bcrypt_1.default.hash(userParams.password, 10)];
                    case 2:
                        // ? set hash here or in mongoose usermodel?
                        // I think inside usermodel, including password validation.
                        _a.hash = _b.sent();
                        return [4 /*yield*/, user.save()];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    UserService.update = function (id, userParam) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.findById(id)];
                    case 1:
                        user = _b.sent();
                        if (!user)
                            throw new Error("User not found. (id: " + id + ")");
                        if (user.username !== userParam.username) {
                            throw new Error('Cannot change username');
                        }
                        if (!userParam.password) return [3 /*break*/, 3];
                        _a = userParam;
                        return [4 /*yield*/, bcrypt_1.default.hash(userParam.password, 10)];
                    case 2:
                        _a.hash = _b.sent();
                        _b.label = 3;
                    case 3:
                        // ? Does this not store the plaintext password in the user?
                        Object.assign(user, userParam);
                        return [4 /*yield*/, user.save()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    // ? Why the underscore?
    UserService._delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.findByIdAndRemove(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return UserService;
}());
exports.default = UserService;
