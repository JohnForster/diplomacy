"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _landTilesData = _interopRequireDefault(require("../resources/landTilesData"));

var _seaTilesData = _interopRequireDefault(require("../resources/seaTilesData"));

var _default = function _default(unitType) {
  return function (territoryA) {
    return function (territoryB) {
      var data = unitType === 'Army' ? _landTilesData["default"] : _seaTilesData["default"];
      return data[territoryA].includes(territoryB);
    };
  };
};

exports["default"] = _default;