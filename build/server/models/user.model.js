"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

var userSchema = new _mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, 'Can\'t be blank'],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
    unique: true
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Can\'t be blank'],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    unique: true
  },
  name: String,
  hash: String
}, {
  timestamps: true
});
userSchema.plugin(_mongooseUniqueValidator["default"], {
  message: 'is already taken'
});

userSchema.methods.validatePassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(password) {
    var comparison;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('INSIDE USER.MODEL.VALIDATEPASSWORD');
            comparison = _bcrypt["default"].compare(password, this.hash);
            return _context.abrupt("return", comparison);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(); // Should possibly move authentication/password setting methods to the usermodel?
// Means that any virtual properties (eg. full name) will be included in when converting to JSON
// Probably not necessary for this schema, but useful elsewhere.


userSchema.set('toJSON', {
  virtuals: true
});

var _default = _mongoose["default"].model('User', userSchema);

exports["default"] = _default;