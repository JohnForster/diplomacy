"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _turn = _interopRequireDefault(require("../models/turn.model"));

var _initialApiState = _interopRequireDefault(require("../data/initialApiState"));

var _converter = require("../_helpers/converter");

var _awaitToJs = _interopRequireDefault(require("await-to-js"));

var _axios = _interopRequireDefault(require("axios"));

var TurnService = /*#__PURE__*/function () {
  function TurnService() {
    (0, _classCallCheck2["default"])(this, TurnService);
  }

  (0, _createClass2["default"])(TurnService, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(apiData, turnData) {
        var turn, newTurnData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                turn = new _turn["default"]();
                newTurnData = (0, _converter.apiToGameState)(apiData, turnData);
                Object.assign(turn, newTurnData);
                _context.next = 5;
                return turn.save();

              case 5:
                return _context.abrupt("return", turn);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "createFirstTurn",
    value: function () {
      var _createFirstTurn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var initialTurnData, turn;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                initialTurnData = {
                  phaseNumber: 0,
                  timeStarted: null,
                  timeEnds: null,
                  players: []
                };
                _context2.next = 3;
                return this.create(_initialApiState["default"], initialTurnData);

              case 3:
                turn = _context2.sent;
                return _context2.abrupt("return", turn.toJSON());

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createFirstTurn() {
        return _createFirstTurn.apply(this, arguments);
      }

      return createFirstTurn;
    }()
  }, {
    key: "getByID",
    value: function () {
      var _getByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
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
                return _context3.abrupt("return", turn);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getByID(_x3) {
        return _getByID.apply(this, arguments);
      }

      return getByID;
    }()
  }, {
    key: "getMoves",
    value: function () {
      var _getMoves = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, playerId) {
        var turn;
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
                return _context4.abrupt("return", turn.getMoves(playerId));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getMoves(_x4, _x5) {
        return _getMoves.apply(this, arguments);
      }

      return getMoves;
    }()
  }, {
    key: "addMove",
    value: function () {
      var _addMove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, playerId) {
        var turn,
            _len,
            moves,
            _key,
            _args5 = arguments;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _turn["default"].findById(id);

              case 2:
                turn = _context5.sent;

                if (turn) {
                  _context5.next = 5;
                  break;
                }

                throw new Error('No turn found with that ID');

              case 5:
                for (_len = _args5.length, moves = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                  moves[_key - 2] = _args5[_key];
                }

                turn.addMoves(playerId, moves);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function addMove(_x6, _x7) {
        return _addMove.apply(this, arguments);
      }

      return addMove;
    }()
  }, {
    key: "advanceById",
    value: function () {
      var _advanceById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        var turn, turnAsApiJSON, _yield$to, _yield$to2, err, res, newTurnAsApiJSON, conversionData, newTurn;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _turn["default"].findById(id);

              case 2:
                turn = _context6.sent.toJSON();
                turnAsApiJSON = (0, _converter.gameToApiState)(turn);
                _context6.next = 6;
                return (0, _awaitToJs["default"])(_axios["default"].post('http://godip-adjudication.appspot.com/Classical', turnAsApiJSON));

              case 6:
                _yield$to = _context6.sent;
                _yield$to2 = (0, _slicedToArray2["default"])(_yield$to, 2);
                err = _yield$to2[0];
                res = _yield$to2[1];

                if (!err) {
                  _context6.next = 13;
                  break;
                }

                console.log('Error updating turn:', err);
                return _context6.abrupt("return", Promise.reject(null));

              case 13:
                newTurnAsApiJSON = res.data;
                conversionData = {
                  phaseNumber: turn.info.phaseNumber + 1,
                  timeStarted: null,
                  timeEnds: null,
                  players: turn.players.map(function (_ref) {
                    var colour = _ref.colour,
                        empire = _ref.empire,
                        playerID = _ref.playerID,
                        ownedTerritories = _ref.ownedTerritories;
                    return {
                      colour: colour,
                      empire: empire,
                      playerID: playerID,
                      ownedTerritories: ownedTerritories
                    };
                  })
                };
                _context6.next = 17;
                return this.create(newTurnAsApiJSON, conversionData);

              case 17:
                newTurn = _context6.sent;
                return _context6.abrupt("return", newTurn);

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function advanceById(_x8) {
        return _advanceById.apply(this, arguments);
      }

      return advanceById;
    }()
  }]);
  return TurnService;
}();

var turnService = new TurnService();
var _default = turnService;
exports["default"] = _default;