"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _turn = _interopRequireDefault(require("../models/turn.model"));

var TurnService = {
  create: function create(turnConfig) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var turn;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              turn = new _turn["default"]();
              Object.assign(turn.info, turnConfig);
              turn.save();
              return _context.abrupt("return", turn);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getByID: function getByID(id) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var turn;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _turn["default"].findById(id);

            case 2:
              turn = _context2.sent;

              if (turn) {
                _context2.next = 5;
                break;
              }

              throw new Error('No turn found with that ID');

            case 5:
              return _context2.abrupt("return", turn);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  getMoves: function getMoves(id, playerId) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var turn;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _turn["default"].findById(id);

            case 2:
              turn = _context3.sent;

              if (turn) {
                _context3.next = 5;
                break;
              }

              throw new Error('No turn found with that ID');

            case 5:
              return _context3.abrupt("return", turn.getMoves(playerId));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  addMove: function addMove(id, playerId) {
    var _arguments = arguments;
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var turn, _len, moves, _key;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _turn["default"].findById(id);

            case 2:
              turn = _context4.sent;

              if (turn) {
                _context4.next = 5;
                break;
              }

              throw new Error('No turn found with that ID');

            case 5:
              for (_len = _arguments.length, moves = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                moves[_key - 2] = _arguments[_key];
              }

              turn.addMoves(playerId, moves);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
var _default = TurnService;
exports["default"] = _default;