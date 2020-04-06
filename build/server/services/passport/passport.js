"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _awaitToJs = _interopRequireDefault(require("await-to-js"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _user = _interopRequireDefault(require("../user.service"));

var LocalStrategy = _passportLocal["default"].Strategy;

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(app, isDev) {
    var verifyFunction;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            verifyFunction = /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password, done) {
                var _yield$to, _yield$to2, err, _yield$to2$, user, message;

                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _awaitToJs["default"])(_user["default"].authenticate(username, password));

                      case 2:
                        _yield$to = _context.sent;
                        _yield$to2 = (0, _slicedToArray2["default"])(_yield$to, 2);
                        err = _yield$to2[0];
                        _yield$to2$ = _yield$to2[1];
                        user = _yield$to2$.user;
                        message = _yield$to2$.message;

                        if (!err) {
                          _context.next = 10;
                          break;
                        }

                        return _context.abrupt("return", done(err));

                      case 10:
                        if (user) {
                          _context.next = 12;
                          break;
                        }

                        return _context.abrupt("return", done(message));

                      case 12:
                        return _context.abrupt("return", done(null, user, {
                          message: message
                        }));

                      case 13:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function verifyFunction(_x3, _x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }(); // Configure passport to use the local strategy


            _passport["default"].use(new LocalStrategy(verifyFunction)); // Tell passport how to serialize the user
            // Stores the user in req.session (which is how passport keeps track of things)


            _passport["default"].serializeUser(function (user, done) {
              done(null, user._id);
            });

            _passport["default"].deserializeUser( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, done) {
                var _yield$to3, _yield$to4, err, user;

                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return (0, _awaitToJs["default"])(_user["default"].getById(id));

                      case 2:
                        _yield$to3 = _context2.sent;
                        _yield$to4 = (0, _slicedToArray2["default"])(_yield$to3, 2);
                        err = _yield$to4[0];
                        user = _yield$to4[1];

                        if (!err) {
                          _context2.next = 8;
                          break;
                        }

                        return _context2.abrupt("return", done(err, null));

                      case 8:
                        done(null, user);

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x6, _x7) {
                return _ref3.apply(this, arguments);
              };
            }());

            app.use(_passport["default"].initialize());
            app.use(_passport["default"].session()); // ROUTES

            app.post('/api/login', function (req, res, next) {
              _passport["default"].authenticate('local', {
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

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;