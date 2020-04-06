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

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../models/user.model"));

/*
  The user service contains the core business logic for user authentication and management in the node api;
  it encapsulates all interaction with the mongoose user model and exposes a simple set of methods which are
  used by the users controller below.
*/
// For typescripty goodness, make services extend a common interface?
var UserService = /*#__PURE__*/function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
  }

  (0, _createClass2["default"])(UserService, null, [{
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password) {
        var _yield$to, _yield$to2, err, user, passwordsMatch;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _awaitToJs["default"])(_user["default"].findOne({
                  username: username
                }).exec());

              case 2:
                _yield$to = _context.sent;
                _yield$to2 = (0, _slicedToArray2["default"])(_yield$to, 2);
                err = _yield$to2[0];
                user = _yield$to2[1];

                if (!err) {
                  _context.next = 8;
                  break;
                }

                throw err;

              case 8:
                if (!(user === null)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", {
                  user: user,
                  message: 'User not found'
                });

              case 10:
                if (!user) {
                  _context.next = 17;
                  break;
                }

                _context.next = 13;
                return user.validatePassword(password);

              case 13:
                passwordsMatch = _context.sent;

                if (passwordsMatch) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", {
                  user: null,
                  message: 'Passwords did not match'
                });

              case 16:
                return _context.abrupt("return", {
                  user: user,
                  message: 'success'
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function authenticate(_x, _x2) {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }()
    /** Returns all users, without their hashes */

  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user["default"].find().select('-hash');

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _user["default"].findById(id).select('-hash');

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getById(_x3) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userParams) {
        var user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _user["default"].findOne({
                  username: userParams.username
                });

              case 2:
                if (!_context4.sent) {
                  _context4.next = 4;
                  break;
                }

                throw new Error("Username \"".concat(userParams.username, "\" is taken"));

              case 4:
                if (userParams.password) {
                  _context4.next = 6;
                  break;
                }

                throw new Error('Password required');

              case 6:
                user = new _user["default"](userParams); // ? set hash here or in mongoose usermodel?
                // I think inside usermodel, including password validation.

                _context4.next = 9;
                return _bcrypt["default"].hash(userParams.password, 10);

              case 9:
                user.hash = _context4.sent;
                _context4.next = 12;
                return user.save();

              case 12:
                return _context4.abrupt("return", _context4.sent);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function create(_x4) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, userParam) {
        var user;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _user["default"].findById(id);

              case 2:
                user = _context5.sent;

                if (user) {
                  _context5.next = 5;
                  break;
                }

                throw new Error("User not found. (id: ".concat(id, ")"));

              case 5:
                if (!(user.username !== userParam.username)) {
                  _context5.next = 7;
                  break;
                }

                throw new Error('Cannot change username');

              case 7:
                if (!userParam.password) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 10;
                return _bcrypt["default"].hash(userParam.password, 10);

              case 10:
                userParam.hash = _context5.sent;

              case 11:
                // ? Does this not store the plaintext password in the user?
                Object.assign(user, userParam);
                _context5.next = 14;
                return user.save();

              case 14:
                return _context5.abrupt("return", user);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function update(_x5, _x6) {
        return _update.apply(this, arguments);
      }

      return update;
    }() // ? Why the underscore?

  }, {
    key: "_delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _user["default"].findByIdAndRemove(id);

              case 2:
                return _context6.abrupt("return", true);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function _delete(_x7) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return UserService;
}();

exports["default"] = UserService;