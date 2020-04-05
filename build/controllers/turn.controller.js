"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _checkAuthentication = _interopRequireDefault(require("../_helpers/checkAuthentication"));

var _turn = _interopRequireDefault(require("../services/turn.service"));

var _awaitToJs = _interopRequireDefault(require("await-to-js"));

var express = _interopRequireWildcard(require("express"));

var TurnController = /*#__PURE__*/function () {
  function TurnController() {
    (0, _classCallCheck2["default"])(this, TurnController);
  }

  (0, _createClass2["default"])(TurnController, null, [{
    key: "view",
    value: function () {
      var _view = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _yield$to, _yield$to2, err, turn;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _awaitToJs["default"])(_turn["default"].getByID(req.params.turn_id));

              case 2:
                _yield$to = _context.sent;
                _yield$to2 = (0, _slicedToArray2["default"])(_yield$to, 2);
                err = _yield$to2[0];
                turn = _yield$to2[1];
                turn.players.forEach(function (player) {
                  if (!player.playerID.equals(req.session.passport.user)) {
                    player.moves = [];
                  }
                });

                if (!err) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", res.status(400).send(err.message));

              case 9:
                if (!turn) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", res.json(turn));

              case 11:
                return _context.abrupt("return", res.status(500).send('Something went wrong in fetching turn data'));

              case 12:
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
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO Need some error handling/checking that user is part of this turnID
                console.log('req.body.moves:', req.body.moves);

                _turn["default"].addMove.apply(_turn["default"], [req.body.turnID, String(req.session.passport.user)].concat((0, _toConsumableArray2["default"])(req.body.moves)));

                res.send('success');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);
  return TurnController;
}(); // Move into API Routes file?


var router = express.Router();
router.route('/:turn_id').get(_checkAuthentication["default"], TurnController.view).patch(_checkAuthentication["default"], TurnController.update);
var _default = router;
exports["default"] = _default;