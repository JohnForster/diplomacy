"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _checkAuthentication = _interopRequireDefault(require("../_helpers/checkAuthentication"));

var _game = _interopRequireDefault(require("../services/game.service"));

var _awaitToJs = _interopRequireDefault(require("await-to-js"));

var _express = _interopRequireDefault(require("express"));

var GameController = /*#__PURE__*/function () {
  function GameController() {
    (0, _classCallCheck2["default"])(this, GameController);
  }

  (0, _createClass2["default"])(GameController, null, [{
    key: "view",
    value: function () {
      var _view = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _yield$to, _yield$to2, err, game;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _awaitToJs["default"])(_game["default"].getById(req.params.game_id));

              case 2:
                _yield$to = _context.sent;
                _yield$to2 = (0, _slicedToArray2["default"])(_yield$to, 2);
                err = _yield$to2[0];
                game = _yield$to2[1];

                if (!err) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", res.status(400).send(err));

              case 8:
                if (!game) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", res.json(game));

              case 10:
                return _context.abrupt("return", res.status(500).send('Something went wrong in fetching game data'));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function view(_x, _x2) {
        return _view.apply(this, arguments);
      }

      return view;
    }()
  }, {
    key: "viewLatest",
    value: function () {
      var _viewLatest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _yield$to3, _yield$to4, err, game;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _awaitToJs["default"])(_game["default"].getLatest());

              case 2:
                _yield$to3 = _context2.sent;
                _yield$to4 = (0, _slicedToArray2["default"])(_yield$to3, 2);
                err = _yield$to4[0];
                game = _yield$to4[1];

                if (!err) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(400).send(err.message));

              case 8:
                if (!game) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", res.json(game));

              case 10:
                return _context2.abrupt("return", res.status(500).send('Something went wrong in fetching the game'));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function viewLatest(_x3, _x4) {
        return _viewLatest.apply(this, arguments);
      }

      return viewLatest;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var config, userID, _yield$to5, _yield$to6, err, game;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                config = req.body.config;
                userID = req.session.passport.user;
                _context3.next = 4;
                return (0, _awaitToJs["default"])(_game["default"].create(config, userID));

              case 4:
                _yield$to5 = _context3.sent;
                _yield$to6 = (0, _slicedToArray2["default"])(_yield$to5, 2);
                err = _yield$to6[0];
                game = _yield$to6[1];

                if (err) {
                  res.status(400).send(err);
                }

                if (game) res.json(game);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function create(_x5, _x6) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "join",
    value: function () {
      var _join = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var _req$body, gameID, playerID, colour, _yield$to7, _yield$to8, err, game;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body = req.body, gameID = _req$body.gameID, playerID = _req$body.playerID, colour = _req$body.colour;

                if (gameID && playerID) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", res.status(400).send('Require both gameID and playerID in request'));

              case 3:
                _context4.next = 5;
                return (0, _awaitToJs["default"])(_game["default"].joinGame(gameID, playerID, colour));

              case 5:
                _yield$to7 = _context4.sent;
                _yield$to8 = (0, _slicedToArray2["default"])(_yield$to7, 2);
                err = _yield$to8[0];
                game = _yield$to8[1];
                if (err) res.status(400).send(err);
                if (game) res.json(game);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function join(_x7, _x8) {
        return _join.apply(this, arguments);
      }

      return join;
    }()
  }, {
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var _yield$to9, _yield$to10, err, game;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _awaitToJs["default"])(_game["default"].start(req.params.game_id));

              case 2:
                _yield$to9 = _context5.sent;
                _yield$to10 = (0, _slicedToArray2["default"])(_yield$to9, 2);
                err = _yield$to10[0];
                game = _yield$to10[1];

                if (!err) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return", res.status(400).send(err));

              case 8:
                if (!game) {
                  _context5.next = 10;
                  break;
                }

                return _context5.abrupt("return", res.send('Game Started!'));

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function start(_x9, _x10) {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "nextTurn",
    value: function () {
      var _nextTurn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var _yield$to11, _yield$to12, err, game;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _awaitToJs["default"])(_game["default"].processTurn(req.params.game_id));

              case 2:
                _yield$to11 = _context6.sent;
                _yield$to12 = (0, _slicedToArray2["default"])(_yield$to11, 2);
                err = _yield$to12[0];
                game = _yield$to12[1];
                console.log(err, game);

                if (!err) {
                  _context6.next = 9;
                  break;
                }

                return _context6.abrupt("return", res.status(400).send(err));

              case 9:
                if (!game) {
                  _context6.next = 11;
                  break;
                }

                return _context6.abrupt("return", res.json(game));

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function nextTurn(_x11, _x12) {
        return _nextTurn.apply(this, arguments);
      }

      return nextTurn;
    }()
  }]);
  return GameController;
}(); // Move into API Routes file?


var router = _express["default"].Router();

router.route('/').post(_checkAuthentication["default"], GameController.create);
router.route('/latest').get(_checkAuthentication["default"], GameController.viewLatest);
router.route('/:game_id').get(_checkAuthentication["default"], GameController.view);
router.route('/join').post(_checkAuthentication["default"], GameController.join);
router.route('/:game_id/start').post(_checkAuthentication["default"], GameController.start);
router.route('/:game_id/next').post( // method to check if in dev mode so that this can't be abused?
GameController.nextTurn);
var _default = router;
exports["default"] = _default;