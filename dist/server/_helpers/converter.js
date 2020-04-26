"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameToApiState = exports.apiToGameState = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _OrderType = _interopRequireDefault(require("../../shared/types/enums/OrderType"));

var _getLocationFromId = _interopRequireDefault(require("../../shared/helpers/getLocationFromId"));

var _getIdFromLocation = _interopRequireDefault(require("../../shared/helpers/getIdFromLocation"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TODO extract some of these into helpers? Or convert to class.
var getUnits = function getUnits(empire, apiState) {
  var unitsInApiFormat = Object.entries(apiState.Units).filter(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        u = _ref2[1];

    return u.Nation === empire;
  });
  var unitsInGameFormat = unitsInApiFormat.map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        locationId = _ref4[0],
        u = _ref4[1];

    return {
      unitType: u.Type,
      location: (0, _getLocationFromId["default"])(locationId),
      status: 'Active' // ! Hard coded for now

    };
  });
  return unitsInGameFormat;
}; // Add functionality to change ownership of territories that aren't owned by anyone.


var updateOwnedTerritories = function updateOwnedTerritories(apiState, players) {
  var units = Object.entries(apiState.Units);
  var convertedUnits = units.map(function (_ref5) {
    var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
        id = _ref6[0],
        unit = _ref6[1];

    return [(0, _getLocationFromId["default"])(id), unit];
  });

  var noUnitAtTerritory = function noUnitAtTerritory(territory) {
    return !convertedUnits.find(function (_ref7) {
      var _ref8 = (0, _slicedToArray2["default"])(_ref7, 1),
          location = _ref8[0];

      return location === territory;
    });
  };

  var newPlayers = players.map(function (p) {
    var playerUnits = convertedUnits.filter(function (_ref9) {
      var _ref10 = (0, _slicedToArray2["default"])(_ref9, 2),
          unit = _ref10[1];

      return unit.Nation === p.empire;
    }).map(function (_ref11) {
      var _ref12 = (0, _slicedToArray2["default"])(_ref11, 1),
          location = _ref12[0];

      return location;
    });
    return _objectSpread({}, p, {
      ownedTerritories: p.ownedTerritories.filter(noUnitAtTerritory) // Remove all territories that have a unit in them.
      .concat(playerUnits) // Add back in the locations of the player's units.

    });
  });
  return newPlayers;
};

var apiToGameState = function apiToGameState(apiState, data) {
  var players = apiState.Type === 'Adjustment' ? updateOwnedTerritories(apiState, data.players) : data.players; // TODO Add key features from ApiState to game. i.e Dislodgeds, Resolutions, bounces?

  return {
    _id: data._id,
    // ! Maybe get from data, would need to create turn before doing conversion.
    info: {
      phaseNumber: data.phaseNumber,
      year: apiState.Year,
      season: apiState.Season,
      phase: apiState.Type.toLowerCase(),
      timeStarted: data.timeStarted,
      timeEnds: data.timeEnds,
      isComplete: false
    },
    players: players.map(function (p) {
      return {
        playerID: p.playerID,
        colour: p.colour,
        empire: p.empire,
        ownedTerritories: p.ownedTerritories,
        // Will need to work out a way of storing ownedTerritories
        ownedUnits: getUnits(p.empire, apiState),
        moves: [] // Always starts empty

      };
    }),
    previousState: JSON.stringify(apiState)
  };
};

exports.apiToGameState = apiToGameState;

var convertOrder = function convertOrder(move) {
  var locations = [move.from, move.to, move.supportFrom, move.convoyFrom];

  var _locations$map = locations.map(_getIdFromLocation["default"]),
      _locations$map2 = (0, _slicedToArray2["default"])(_locations$map, 4),
      from = _locations$map2[0],
      to = _locations$map2[1],
      supportFrom = _locations$map2[2],
      convoyFrom = _locations$map2[3];

  switch (move.moveType) {
    case 'build':
      return [_OrderType["default"].BUILD, move.buildType];

    case 'convoy':
      return [_OrderType["default"].CONVOY, convoyFrom, to];

    case 'disband':
      return [_OrderType["default"].DISBAND];

    case 'hold':
      return [_OrderType["default"].HOLD];

    case 'move':
      return [_OrderType["default"].MOVE, to];

    case 'moveViaConvoy':
      return [_OrderType["default"].MOVEVIACONVOY, from, to];
    // Not certain about this

    case 'support':
      return [_OrderType["default"].SUPPORT, supportFrom, to];
  }
}; // TODO Use after conversion of moveTypes
// const convertOrder = (move: IMove): ApiOrder => {
//   switch (move.moveType) {
//     case OrderType.BUILD: return [OrderType.BUILD, move.buildType]
//     case OrderType.CONVOY: return [OrderType.CONVOY, move.convoyFrom,  move.convoyTo]
//     case OrderType.DISBAND: return [OrderType.DISBAND, move.from]
//     case OrderType.HOLD: return [OrderType.HOLD, move.from]
//     case OrderType.MOVE: return [OrderType.MOVE, move.to]
//     case OrderType.MOVEVIACONVOY: return [OrderType.MOVEVIACONVOY, move.from, move.to] // Not certain about this
//     case OrderType.SUPPORT: return [OrderType.SUPPORT, move.supportFrom, move.to]
//   }
// }


var getApiOrdersFromGame = function getApiOrdersFromGame(turn) {
  var orders = {};
  turn.players.forEach(function (p) {
    orders[p.empire] = {};
    p.moves.forEach(function (m) {
      var locationId = (0, _getIdFromLocation["default"])(m.from);
      var order = convertOrder(m);
      orders[p.empire][locationId] = order;
    });
  });
  return orders;
};

var gameToApiState = function gameToApiState(turn) {
  console.log(turn);
  console.log(turn.previousState);
  var previousState = JSON.parse(turn.previousState);
  return _objectSpread({}, previousState, {
    Orders: getApiOrdersFromGame(turn)
  });
};

exports.gameToApiState = gameToApiState;