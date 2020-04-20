"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Nation = require("./Nation");

Object.keys(_Nation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Nation[key];
    }
  });
});

var _OrderType = require("./OrderType");

Object.keys(_OrderType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OrderType[key];
    }
  });
});

var _PhaseType = require("./PhaseType");

Object.keys(_PhaseType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PhaseType[key];
    }
  });
});

var _ProvinceId = require("./ProvinceId");

Object.keys(_ProvinceId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ProvinceId[key];
    }
  });
});

var _Resolution = require("./Resolution");

Object.keys(_Resolution).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Resolution[key];
    }
  });
});

var _Season = require("./Season");

Object.keys(_Season).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Season[key];
    }
  });
});

var _UnitType = require("./UnitType");

Object.keys(_UnitType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UnitType[key];
    }
  });
});