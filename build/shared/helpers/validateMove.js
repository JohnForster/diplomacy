"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _areAdjacent = _interopRequireDefault(require("./areAdjacent"));

var phases = {
  movement: ['move', 'support', 'hold'],
  retreat: ['retreat'],
  build: ['build', 'disband']
};

var findPlayer = function findPlayer(turn) {
  return function (playerID) {
    return turn.players.find(function (player) {
      return player.playerID === playerID;
    });
  };
};

var findUnit = function findUnit(playerState) {
  return function (from) {
    return playerState.ownedUnits.find(function (unit) {
      return unit.location === from;
    });
  };
};

var validateMove = function validateMove(turn, move, playerID) {
  // Find player in game turn
  var player = findPlayer(turn)(playerID);

  if (!player) {
    console.log('Player not found');
    return false;
  } // Check if player has unit at this location


  var unit = findUnit(player)(move.from);

  if (!unit) {
    console.log('Unit not found');
    return false;
  } // Check if the movement type is appropriate for the phase


  var possibleMoves = phases[turn.info.phase] || [];

  if (!possibleMoves.includes(move.moveType)) {
    console.error('Incorrect moveType provided:', move.moveType);
    console.error('Must be one of:', possibleMoves);
    console.error("Phase: ".concat(turn.info.phase));
    return false;
  }

  var isAdjacentToDestination = (0, _areAdjacent["default"])(move.unit)(move.to);

  switch (move.moveType) {
    case 'move':
      // Check that destination is adjacent
      if (!isAdjacentToDestination(move.from)) {
        console.log('is not adjacent');
        return false;
      } // TODO Check that unit can move there (land/sea)


      return true;

    case 'support':
      // Check that destination is adjacent
      if (!isAdjacentToDestination(move.from)) return false; // TODO Check that unitType can support in that way
      // Check that support from is adjacent to destination

      if (!isAdjacentToDestination(move.supportFrom)) return false;
      return true;

    case 'retreat':
      // Check that destination is adjacent
      if (!isAdjacentToDestination(move.from)) return false; // TODO Check that destination is empty

      return true;

    case 'hold':
      return true;

    case 'disband':
      return true;
  }

  return false;
};

var _default = validateMove;
exports["default"] = _default;