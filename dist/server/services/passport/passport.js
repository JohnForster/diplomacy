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
exports.__esModule = true;
var await_to_js_1 = __importDefault(require("await-to-js"));
var passport_1 = __importDefault(require("passport"));
var passport_local_1 = __importDefault(require("passport-local"));
var user_service_1 = __importDefault(require("../user.service"));
var LocalStrategy = passport_local_1["default"].Strategy;
exports["default"] = (function (app, isDev) { return __awaiter(void 0, void 0, void 0, function () {
    var verifyFunction;
    return __generator(this, function (_a) {
        verifyFunction = function (username, password, done) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, err, _b, user, message;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, await_to_js_1["default"](user_service_1["default"].authenticate(username, password))];
                    case 1:
                        _a = _c.sent(), err = _a[0], _b = _a[1], user = _b.user, message = _b.message;
                        if (err) {
                            return [2 /*return*/, done(err)];
                        }
                        if (!user)
                            return [2 /*return*/, done(message)];
                        return [2 /*return*/, done(null, user, { message: message })];
                }
            });
        }); };
        // Configure passport to use the local strategy
        passport_1["default"].use(new LocalStrategy(verifyFunction));
        // Tell passport how to serialize the user
        // Stores the user in req.session (which is how passport keeps track of things)
        passport_1["default"].serializeUser(function (user, done) {
            done(null, user._id);
        });
        passport_1["default"].deserializeUser(function (id, done) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, err, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, await_to_js_1["default"](user_service_1["default"].getById(id))];
                    case 1:
                        _a = _b.sent(), err = _a[0], user = _a[1];
                        if (err)
                            return [2 /*return*/, done(err, null)];
                        done(null, user);
                        return [2 /*return*/];
                }
            });
        }); });
        app.use(passport_1["default"].initialize());
        app.use(passport_1["default"].session());
        // ROUTES
        app.post('/api/login', function (req, res, next) {
            passport_1["default"].authenticate('local', {
                successRedirect: '/game',
                failureRedirect: '/',
                failureFlash: true
            }, function (err, user, info) {
                if (err) {
                    return res.status(404).send('Internal Error');
                }
                if (!user) {
                    console.log('no user found');
                    return res.status(404).send(info.message);
                }
                req.logIn(user, function (loginErr) {
                    if (loginErr) {
                        return next(err);
                    }
                });
                return res.send('You were authenticated and logged in!');
            })(req, res, next);
        });
        return [2 /*return*/];
    });
}); });
