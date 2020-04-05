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

var _awaitToJs = _interopRequireDefault(require("await-to-js"));

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../services/user.service"));

/*
  The users controller defines all user routes for the api, the route definitions
  are grouped together at the top of the file and the implementations are below.
*/
var UserController = /*#__PURE__*/function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "register",
    // If using next only to handle errors, maybe rename?
    // public static async authenticate(req: Request, res: Response, next: (error: any) => void) {
    //   const [err, user] = await to(userService.authenticate(req.body))
    //   if (!user && !err) res.status(400).json({ message: 'Username or password is incorrect'})
    //   if (err) next(err)
    //   if (user) {
    //     // ?  Change these lines?
    //     res.cookie('access_token', user.token, { httpOnly: true })
    //     res.send()
    //   }
    // }
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var _yield$to, _yield$to2, err, user;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _awaitToJs["default"])(_user["default"].create(req.body));

              case 2:
                _yield$to = _context.sent;
                _yield$to2 = (0, _slicedToArray2["default"])(_yield$to, 2);
                err = _yield$to2[0];
                user = _yield$to2[1];
                console.log(err, user);
                if (err) next(err);
                if (user) res.json({});

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function register(_x, _x2, _x3) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var _yield$to3, _yield$to4, err, users;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _awaitToJs["default"])(_user["default"].getAll());

              case 2:
                _yield$to3 = _context2.sent;
                _yield$to4 = (0, _slicedToArray2["default"])(_yield$to3, 2);
                err = _yield$to4[0];
                users = _yield$to4[1];
                if (err) next(err);
                if (users) res.json(users);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAll(_x4, _x5, _x6) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }() // Create an interface that extends the espress Request type?

  }, {
    key: "getCurrent",
    value: function () {
      var _getCurrent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
        var _yield$to5, _yield$to6, err, user;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _awaitToJs["default"])(_user["default"].getById(req.user.sub));

              case 2:
                _yield$to5 = _context3.sent;
                _yield$to6 = (0, _slicedToArray2["default"])(_yield$to5, 2);
                err = _yield$to6[0];
                user = _yield$to6[1];
                if (!err && !user) res.sendStatus(404);
                if (err) next(err);
                if (user) res.json(user);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getCurrent(_x7, _x8, _x9) {
        return _getCurrent.apply(this, arguments);
      }

      return getCurrent;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
        var _yield$to7, _yield$to8, err, user;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _awaitToJs["default"])(_user["default"].getById(req.params.id));

              case 2:
                _yield$to7 = _context4.sent;
                _yield$to8 = (0, _slicedToArray2["default"])(_yield$to7, 2);
                err = _yield$to8[0];
                user = _yield$to8[1];
                if (!err && !user) res.sendStatus(404);
                if (err) next(err);
                if (user) res.json(user);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getById(_x10, _x11, _x12) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
        var _yield$to9, _yield$to10, err, user;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _awaitToJs["default"])(_user["default"].update(req.params.id, req.body));

              case 2:
                _yield$to9 = _context5.sent;
                _yield$to10 = (0, _slicedToArray2["default"])(_yield$to9, 2);
                err = _yield$to10[0];
                user = _yield$to10[1];
                if (err) next(err);
                if (user) res.json(user);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function update(_x13, _x14, _x15) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "_delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
        var _yield$to11, _yield$to12, err, user;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _awaitToJs["default"])(_user["default"]._delete(req.params.id));

              case 2:
                _yield$to11 = _context6.sent;
                _yield$to12 = (0, _slicedToArray2["default"])(_yield$to11, 2);
                err = _yield$to12[0];
                user = _yield$to12[1];
                if (err) next(err);
                if (user) res.json({
                  message: 'User deleted'
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function _delete(_x16, _x17, _x18) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return UserController;
}(); // ? Move routes into a separate file?


var router = _express["default"].Router(); // router.post('/authenticate', UserController.authenticate)


router.post('/register', UserController.register);
router.get('/', UserController.getAll);
router.get('/current', UserController.getCurrent);
router.get('/:id', UserController.getById);
router.put('/:id', UserController.update);
router["delete"]('/:id', UserController._delete);
var _default = router;
exports["default"] = _default;