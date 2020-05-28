"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _server = _interopRequireDefault(require("./server/server"));

var _chalk = _interopRequireDefault(require("chalk"));

console.log(_chalk["default"].bold('NODE_ENV:'), _chalk["default"].bold.cyan(process.env.NODE_ENV));
(0, _server["default"])();