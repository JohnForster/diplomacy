"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _game = _interopRequireDefault(require("../models/game.model"));

var _turn = _interopRequireDefault(require("./turn.service"));

var GameService = {
  create: function create(gameConfig, userId) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var game, turn;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              game = new _game["default"]({
                createdBy: userId
              });
              Object.assign(game, gameConfig);
              _context.next = 4;
              return _turn["default"].create({
                phase: 'movement'
              });

            case 4:
              turn = _context.sent;
              game.setTurn(turn.id);
              _context.next = 8;
              return game.save();

            case 8:
              return _context.abrupt("return", game);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getById: function getById(id) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('Getting by id ', id);
              _context2.next = 3;
              return _game["default"].findById(id);

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  getLatest: function getLatest() {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var turn;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _game["default"].findOne().limit(1).sort({
                createdAt: -1
              });

            case 2:
              turn = _context3.sent;

              if (turn) {
                _context3.next = 5;
                break;
              }

              throw new Error('No game found');

            case 5:
              return _context3.abrupt("return", turn);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _delete: function _delete(id) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _game["default"].findByIdAndRemove(id);

            case 2:
              return _context4.abrupt("return", true);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  joinGame: function joinGame(gameID, playerID, colour) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var game, turn;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _game["default"].findById(gameID);

            case 2:
              game = _context5.sent;

              if (game) {
                _context5.next = 5;
                break;
              }

              throw new Error('Game not found');

            case 5:
              _context5.next = 7;
              return _turn["default"].getByID(game.currentTurn);

            case 7:
              turn = _context5.sent;
              turn.addPlayer(playerID, colour);
              return _context5.abrupt("return", game);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  start: function start(gameID) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      var game, turn;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _game["default"].findById(gameID);

            case 2:
              game = _context6.sent;

              if (game) {
                _context6.next = 5;
                break;
              }

              throw new Error('Game not found');

            case 5:
              _context6.next = 7;
              return _turn["default"].getByID(game.currentTurn);

            case 7:
              turn = _context6.sent;

              if (!game.randomEmpires) {
                _context6.next = 11;
                break;
              }

              _context6.next = 11;
              return turn.randomiseEmpires();

            case 11:
              if (!turn.isReadyToStart()) {
                _context6.next = 14;
                break;
              }

              turn.start();
              return _context6.abrupt("return", game);

            case 14:
              throw new Error('Game is not ready to start. ');

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  processTurn: function processTurn(gameID) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      var game;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _game["default"].findById(gameID);

            case 2:
              game = _context7.sent;

              if (game) {
                _context7.next = 5;
                break;
              }

              throw Error('Game not found!');

            case 5:
              _context7.next = 7;
              return game.advanceTurn();

            case 7:
              return _context7.abrupt("return", game);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  }
};
var _default = GameService;
exports["default"] = _default;