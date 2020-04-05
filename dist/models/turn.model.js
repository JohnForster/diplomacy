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
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var initialState_1 = require("../data/initialState");
var lodash_shuffle_1 = __importDefault(require("lodash.shuffle"));
var validateMove_1 = __importDefault(require("jfdiplomacy-shared/helpers/validateMove"));
var toJSON_1 = __importDefault(require("jfdiplomacy-shared/helpers/toJSON"));
var playerSchema = new mongoose_1.Schema({
    playerID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    colour: String,
    empire: String,
    ownedTerritories: [String],
    ownedUnits: [{
            unitType: String,
            location: String,
            status: String,
        }],
    moves: [{
            unitType: String,
            moveType: String,
            from: String,
            to: String,
            supportFrom: String,
            wasSuccessful: Boolean,
        }],
}, { toJSON: { virtuals: true } });
var turnSchema = new mongoose_1.Schema({
    info: {
        phaseNumber: Number,
        year: Number,
        season: String,
        phase: String,
        timeStarted: {
            type: Date,
            default: Date.now(),
        },
        timeEnds: {
            type: Date,
            default: Date.now() + (2880 * 60),
        },
        isComplete: {
            type: Boolean,
            default: false,
        },
    },
    players: [playerSchema],
}, { toJSON: { virtuals: true } });
turnSchema.methods.isReadyToStart = function () {
    // Make more complex, to specify the reason the game cannot begin.
    if (this.players.length === 7
        && this.players.every(function (player) { return !!player.empire; }))
        return true;
    return false;
};
turnSchema.methods.getMoves = function (playerID) {
    var player = this.players.find(function (p) { return p.playerID.equals(playerID); });
    return player.moves;
};
turnSchema.methods.addMoves = function (playerID, moves) {
    var _this = this;
    if (!moves.every(function (move) {
        return validateMove_1.default(toJSON_1.default(_this), move, playerID.toString());
    })) {
        console.error('Submitted move is not valid!');
        console.error(moves.filter(function (move) { return !validateMove_1.default(toJSON_1.default(_this), move, playerID.toString()); }));
        return;
    }
    var player = this.players.find(function (p) {
        return p.playerID.equals(playerID);
    });
    player.moves = moves;
    this.save();
};
// Will need separate replace player function?
// Will need to edit this function to accept choosing a color.
turnSchema.methods.addPlayer = function (playerID, colour) {
    if (this.players.length > 7)
        throw new Error('Game is full!');
    if (colour && this.players.find(function (player) { return player.colour === colour; })) {
        throw new Error("Colour " + colour + " is already taken");
    }
    this.players.push({
        playerID: playerID,
        colour: colour,
    });
    this.save();
};
turnSchema.methods.start = function () {
    this.timeStarted = Date.now();
    // set end date? Maybe make end date a virtual?
    this.players.forEach(function (player) {
        player.ownedTerritories = initialState_1.startingTerritories[player.empire];
        player.ownedUnits = initialState_1.startingUnits[player.empire];
        player.colour = player.colour || initialState_1.defaultColours[player.empire];
    });
    this.info.phaseNumber = 0;
    this.info.year = 1901;
    this.info.season = 'Spring';
    this.info.phase = 'movement';
    console.log('saving turn...');
    this.save();
};
turnSchema.methods.randomiseEmpires = function () {
    return __awaiter(this, void 0, void 0, function () {
        var empires;
        return __generator(this, function (_a) {
            console.log('Randomising empires...');
            empires = lodash_shuffle_1.default(['England', 'France', 'Germany', 'Italy', 'Austria', 'Russia', 'Turkey']);
            this.players.forEach(function (player) {
                player.empire = empires.pop();
            });
            return [2 /*return*/, this.save()];
        });
    });
};
exports.default = mongoose_1.default.model('Turn', turnSchema);
