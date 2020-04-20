"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IGame = require("./IGame.d");

Object.keys(_IGame).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IGame[key];
    }
  });
});

var _IGameBoard = require("./IGameBoard.d");

Object.keys(_IGameBoard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IGameBoard[key];
    }
  });
});

var _IGameTurn = require("./IGameTurn.d");

Object.keys(_IGameTurn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IGameTurn[key];
    }
  });
});

var _IOrder = require("./IOrder");

Object.keys(_IOrder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IOrder[key];
    }
  });
});

var _IPlayerState = require("./IPlayerState.d");

Object.keys(_IPlayerState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IPlayerState[key];
    }
  });
});

var _IUnit = require("./IUnit.d");

Object.keys(_IUnit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IUnit[key];
    }
  });
});

var _IApiState = require("./IApiState.d");

Object.keys(_IApiState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IApiState[key];
    }
  });
});