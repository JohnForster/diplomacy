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

var _turn = _interopRequireDefault(require("../services/turn.service"));

var gameSchema = new _mongoose.Schema({
  timeStarted: {
    type: Date
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isPaused: {
    type: Boolean,
    "default": true
  },
  isComplete: {
    type: Boolean,
    "default": false
  },
  winner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  turnLengthMinutes: {
    type: Number,
    "default": 2880 // 48 hours

  },
  randomEmpires: {
    type: Boolean,
    "default": true
  },
  currentTurn: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Turn'
  },
  // gameStateID
  history: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Turn'
  }] // array of past gameStateIDs

}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
}); // Duplicate the ID field.

gameSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

gameSchema.methods.start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(turn) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!turn.isReadyToStart()) {
              _context.next = 5;
              break;
            }

            this.isPaused = false;
            this.currentTurn = turn.id;
            this.timeStarted = Date.now();
            return _context.abrupt("return", true);

          case 5:
            throw new Error('Game is not ready to start');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

gameSchema.methods.setTurn = function (turnID) {
  if (this.currentTurn) throw new Error('Game already has a turn in progress');
  this.currentTurn = turnID;
}; // ? Move Turnservice calls into gameService and pass as args to avoid
// ?   making this method async?


gameSchema.methods.advanceTurn = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var turn, nextTurn;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _turn["default"].getByID(this.currentTurn);

        case 2:
          turn = _context2.sent;
          _context2.next = 5;
          return _turn["default"].create({
            phase: 'movement'
          });

        case 5:
          nextTurn = _context2.sent;
          nextTurn.players = turn.players;
          nextTurn.players.forEach(function (player) {
            player.moves.forEach(function (move) {
              var unit = player.ownedUnits.find(function (u) {
                return u.location === move.from;
              });
              if (unit) unit.location = move.to;
            });
            player.moves = [];
          });
          this.currentTurn = nextTurn.id;
          this.save();
          return _context2.abrupt("return", nextTurn);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

var _default = _mongoose["default"].model('Game', gameSchema);

exports["default"] = _default;