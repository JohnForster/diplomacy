"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _initialState = require("../data/initialState");

var _lodash = _interopRequireDefault(require("lodash.shuffle"));

var _validateMove = _interopRequireDefault(require("../shared/helpers/validateMove"));

var _toJSON = _interopRequireDefault(require("../shared/helpers/toJSON"));

var playerSchema = new _mongoose.Schema({
  playerID: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  colour: String,
  empire: String,
  ownedTerritories: [String],
  ownedUnits: [{
    unitType: String,
    location: String,
    status: String
  }],
  moves: [{
    unitType: String,
    moveType: String,
    from: String,
    to: String,
    supportFrom: String,
    wasSuccessful: Boolean
  }] // Array of moveIDs

}, {
  toJSON: {
    virtuals: true
  }
});
var turnSchema = new _mongoose.Schema({
  info: {
    phaseNumber: Number,
    year: Number,
    season: String,
    phase: String,
    // 'Move', 'Retreat' or 'Build'
    timeStarted: {
      type: Date,
      "default": Date.now()
    },
    timeEnds: {
      type: Date,
      "default": Date.now() + 2880 * 60
    },
    isComplete: {
      type: Boolean,
      "default": false
    }
  },
  players: [playerSchema]
}, {
  toJSON: {
    virtuals: true
  }
});

turnSchema.methods.isReadyToStart = function () {
  // Make more complex, to specify the reason the game cannot begin.
  if (this.players.length === 7 && this.players.every(function (player) {
    return !!player.empire;
  })) return true;
  return false;
};

turnSchema.methods.getMoves = function (playerID) {
  var player = this.players.find(function (p) {
    return p.playerID.equals(playerID);
  });
  return player.moves;
};

turnSchema.methods.addMoves = function (playerID, moves) {
  var _this = this;

  if (!moves.every(function (move) {
    return (0, _validateMove["default"])((0, _toJSON["default"])(_this), move, playerID.toString());
  })) {
    console.error('Submitted move is not valid!');
    console.error(moves.filter(function (move) {
      return !(0, _validateMove["default"])((0, _toJSON["default"])(_this), move, playerID.toString());
    }));
    return;
  }

  var player = this.players.find(function (p) {
    return p.playerID.equals(playerID);
  });
  player.moves = moves;
  this.save();
}; // Will need separate replace player function?
// Will need to edit this function to accept choosing a color.


turnSchema.methods.addPlayer = function (playerID, colour) {
  if (this.players.length > 7) throw new Error('Game is full!');

  if (colour && this.players.find(function (player) {
    return player.colour === colour;
  })) {
    throw new Error("Colour ".concat(colour, " is already taken"));
  }

  this.players.push({
    playerID: playerID,
    colour: colour
  });
  this.save();
};

turnSchema.methods.start = function () {
  this.timeStarted = Date.now(); // set end date? Maybe make end date a virtual?

  this.players.forEach(function (player) {
    player.ownedTerritories = _initialState.startingTerritories[player.empire];
    player.ownedUnits = _initialState.startingUnits[player.empire];
    player.colour = player.colour || _initialState.defaultColours[player.empire];
  });
  this.info.phaseNumber = 0;
  this.info.year = 1901;
  this.info.season = 'Spring';
  this.info.phase = 'movement';
  console.log('saving turn...');
  this.save();
};

turnSchema.methods.randomiseEmpires = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var empires;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Randomising empires...');
          empires = (0, _lodash["default"])(['England', 'France', 'Germany', 'Italy', 'Austria', 'Russia', 'Turkey']);
          this.players.forEach(function (player) {
            player.empire = empires.pop();
          });
          return _context.abrupt("return", this.save());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

var _default = _mongoose["default"].model('Turn', turnSchema);

exports["default"] = _default;