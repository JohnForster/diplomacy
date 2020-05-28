(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/client/app/_helpers/checkTag.ts":
/*!*********************************************!*\
  !*** ./src/client/app/_helpers/checkTag.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_assets_countryData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @client/assets/countryData */ "./src/client/assets/countryData.ts");

var checkTag = function (territoryName, tag) {
    var territory = _client_assets_countryData__WEBPACK_IMPORTED_MODULE_0__["default"].territories.find(function (t) { return t.title === territoryName; });
    if (!territory) {
        console.error("Error checking tags: No territory found '" + territoryName + "'");
        return false;
    }
    return territory.tags.includes(tag);
};
/* harmony default export */ __webpack_exports__["default"] = (checkTag);


/***/ }),

/***/ "./src/client/app/components/board/board.tsx":
/*!***************************************************!*\
  !*** ./src/client/app/components/board/board.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _territory_territory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./territory/territory */ "./src/client/app/components/board/territory/territory.tsx");
/* harmony import */ var _unit_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unit/unit */ "./src/client/app/components/board/unit/unit.tsx");
/* harmony import */ var _ordersLayer_ordersLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ordersLayer/ordersLayer */ "./src/client/app/components/ordersLayer/ordersLayer.tsx");
/* harmony import */ var _orderBox_orderBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderBox/orderBox */ "./src/client/app/components/board/orderBox/orderBox.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./src/client/app/components/board/styled.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getLocation = function (territoryName) {
            var territory = _this.props.boardData.territories.find(function (t) { return t.title === territoryName; });
            var _a = territory.textLocation, x = _a.x, y = _a.y;
            return { x: x, y: y };
        };
        _this.getColour = function (territoryName) {
            if (!_this.props.turnData)
                return null;
            var player = _this.props.turnData.players.find(function (p) { return p.ownedTerritories.includes(territoryName); });
            if (!player)
                return null;
            return player.colour;
        };
        // Created once for document
        _this.svg = Object(preact_compat__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        return _this;
    }
    Object.defineProperty(Board.prototype, "activeTileData", {
        get: function () {
            var _this = this;
            if (!this.props.activeTerritory)
                return null;
            return this.props.boardData.territories
                .find(function (t) { return t.title === _this.props.activeTerritory; });
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.render = function (props, state) {
        var _this = this;
        var stripe = 6;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_6__["GameBoard"], { id: 'gameBoard' },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_6__["StickyContainer"], null, props.activeTerritory && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_orderBox_orderBox__WEBPACK_IMPORTED_MODULE_5__["default"], { onMoveSelect: props.onMoveSelect, currentMove: props.newOrder.moveType, activeTerritory: props.activeTerritory }))),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_6__["MapSvg"], { xmlns: 'http://www.w3.org/2000/svg', viewBox: props.boardData.viewBox, ref: function () { return _this.svg; } },
                    props.boardData.territories.map(function (tile) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_territory_territory__WEBPACK_IMPORTED_MODULE_2__["default"], { tile: tile, isSelected: tile.title === props.activeTerritory, onSelect: props.onTileSelect(tile.title), viewBox: props.boardData.viewBox, colour: _this.getColour(tile.title) })); }),
                    props.turnData && props.turnData.players.map(function (player) { return (player.ownedUnits.map(function (unit) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_unit_unit__WEBPACK_IMPORTED_MODULE_3__["default"], { unitType: unit.unitType, viewBox: props.boardData.viewBox, location: _this.getLocation(unit.location), empire: player.empire, colour: player.colour })); })); }),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_ordersLayer_ordersLayer__WEBPACK_IMPORTED_MODULE_4__["default"], { boardData: props.boardData, newOrders: props.newOrders, turnData: props.turnData }),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pattern", { id: 'diagonalHatch', patternUnits: 'userSpaceOnUse', width: stripe, height: stripe, patternTransform: 'rotate(45)' },
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("line", { x1: stripe / 2, y: '0', x2: stripe / 2, y2: stripe, stroke: 'black', "stroke-width": stripe }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("line", { x1: '0', y: '0', x2: '0', y2: stripe, stroke: 'maroon', "stroke-width": stripe }))))));
    };
    return Board;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./src/client/app/components/board/orderBox/orderBox.tsx":
/*!***************************************************************!*\
  !*** ./src/client/app/components/board/orderBox/orderBox.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/client/app/components/board/orderBox/styled.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// ! Hardcoded for now.
var possibleOrders = ['Move', 'Support', 'Hold'];
var OrderBox = /** @class */ (function (_super) {
    __extends(OrderBox, _super);
    function OrderBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderBox.prototype.render = function (props, state) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["OrderBox"], null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["OrderTitle"], null, props.activeTerritory),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null),
            possibleOrders.map(function (order) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["OrderButton"], { selected: order.toLowerCase() === props.currentMove, onClick: props.onMoveSelect(order.toLowerCase()) }, order),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null))); }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["CancelButton"], { onClick: props.onMoveSelect(null) }, "Cancel"),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null)));
    };
    return OrderBox;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (OrderBox);


/***/ }),

/***/ "./src/client/app/components/board/orderBox/styled.ts":
/*!************************************************************!*\
  !*** ./src/client/app/components/board/orderBox/styled.ts ***!
  \************************************************************/
/*! exports provided: OrderBox, OrderTitle, OrderButton, CancelButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBox", function() { return OrderBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTitle", function() { return OrderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderButton", function() { return OrderButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelButton", function() { return CancelButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var OrderBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media screen and (max-width:500px){\n    font-size: 9px;\n  }\n\n  font-size: large;\n  width: 13%;\n  font-family: monospace;\n  border: 1px solid black;\n  border-radius: 5px;\n  text-align: center;\n  background: rgba(255,255,255, .4); /* Move to constants */\n  padding: 5px;\n  pointer-events: all;\n  @media screen and (max-width:767px) and (orientation:landscape) {\n    max-width: 100%;\n  }\n"], ["\n  @media screen and (max-width:500px){\n    font-size: 9px;\n  }\n\n  font-size: large;\n  width: 13%;\n  font-family: monospace;\n  border: 1px solid black;\n  border-radius: 5px;\n  text-align: center;\n  background: rgba(255,255,255, .4); /* Move to constants */\n  padding: 5px;\n  pointer-events: all;\n  @media screen and (max-width:767px) and (orientation:landscape) {\n    max-width: 100%;\n  }\n"])));
var OrderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: bold;\n"], ["\n  font-weight: bold;\n"])));
var ButtonCss = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: initial;\n  margin: 0;\n  width: 80%;\n  :focus {\n    outline: none;\n  }\n"], ["\n  font-size: initial;\n  margin: 0;\n  width: 80%;\n  :focus {\n    outline: none;\n  }\n"])));
var OrderButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ",
    "\n"])), ButtonCss, function (_a) {
    var selected = _a.selected;
    return selected && "\n    background-color: lightgreen;\n  ";
});
var CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  background-color: lightcoral;\n  border-color: maroon;\n  color: black;\n"], ["\n  ", "\n  background-color: lightcoral;\n  border-color: maroon;\n  color: black;\n"])), ButtonCss);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/client/app/components/board/styled.ts":
/*!***************************************************!*\
  !*** ./src/client/app/components/board/styled.ts ***!
  \***************************************************/
/*! exports provided: GameBoard, StickyContainer, MapSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoard", function() { return GameBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyContainer", function() { return StickyContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSvg", function() { return MapSvg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables/colors */ "./src/client/app/variables/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var GameBoard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  max-width: 100vh;\n\n  @media\n    screen and (max-width:767px),\n    screen and (max-height: 767px) and (orientation:landscape)\n  {\n    max-width: 100%;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  max-width: 100vh;\n\n  @media\n    screen and (max-width:767px),\n    screen and (max-height: 767px) and (orientation:landscape)\n  {\n    max-width: 100%;\n  }\n"])));
var StickyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  position: sticky;\n  top: 0;\n  height: 150px;\n  z-index: 5;\n  pointer-events: none;\n"], ["\n  width: 100%;\n  position: sticky;\n  top: 0;\n  height: 150px;\n  z-index: 5;\n  pointer-events: none;\n"])));
var PAPER_TEXTURE_URL = '/assets/paperTexture.jpg';
var MapSvg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-image: url(", ");\n  background-size: contain;\n\n  width: 100%;\n  pointer-events: none;\n  transform: translateY(-150px);\n\n  border: 2px solid ", ";\n  border-radius: 4px;\n  box-sizing: border-box;\n"], ["\n  background-image: url(", ");\n  background-size: contain;\n\n  width: 100%;\n  pointer-events: none;\n  transform: translateY(-150px);\n\n  border: 2px solid ", ";\n  border-radius: 4px;\n  box-sizing: border-box;\n"])), PAPER_TEXTURE_URL, _variables_colors__WEBPACK_IMPORTED_MODULE_1__["default"].shadow);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/client/app/components/board/supplyStar/styled.ts":
/*!**************************************************************!*\
  !*** ./src/client/app/components/board/supplyStar/styled.ts ***!
  \**************************************************************/
/*! exports provided: StarPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarPath", function() { return StarPath; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var StarPath = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].path(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: white;\n  stroke: black;\n  transform:\n    translate(0px, 13px)\n    scale(0.8);\n"], ["\n  fill: white;\n  stroke: black;\n  transform:\n    translate(0px, 13px)\n    scale(0.8);\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/client/app/components/board/supplyStar/supplyStar.tsx":
/*!*******************************************************************!*\
  !*** ./src/client/app/components/board/supplyStar/supplyStar.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/client/app/components/board/supplyStar/styled.ts");


var StarPath = _styled__WEBPACK_IMPORTED_MODULE_1__["StarPath"];
var SupplyStar = function () {
    return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(StarPath, { d: '\n      M 0.000 3.000\n      L 3.527 4.854\n      L 2.853 0.927\n      L 5.706 -1.854\n      L 1.763 -2.427\n      L 0.000 -6.000\n      L -1.763 -2.427\n      L -5.706 -1.854\n      L -2.853 0.927\n      L -3.527 4.854\n      L 0.000 3.000\n    ' }));
};
/* harmony default export */ __webpack_exports__["default"] = (SupplyStar);


/***/ }),

/***/ "./src/client/app/components/board/territory/styled.ts":
/*!*************************************************************!*\
  !*** ./src/client/app/components/board/territory/styled.ts ***!
  \*************************************************************/
/*! exports provided: Path, TerritoryName, TerritoryTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerritoryName", function() { return TerritoryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerritoryTitle", function() { return TerritoryTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_empireColours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../variables/empireColours */ "./src/client/app/variables/empireColours.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var landCss = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: #FFFFDD;\n  fill-opacity: 0.3;\n  :hover {\n    fill-opacity: 0.4;\n  }\n"], ["\n  fill: #FFFFDD;\n  fill-opacity: 0.3;\n  :hover {\n    fill-opacity: 0.4;\n  }\n"])));
var seaCss = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fill: #99CCFF;\n  fill-opacity: 0.45;\n  :hover {\n    fill: #AADDFF;\n  }\n"], ["\n  fill: #99CCFF;\n  fill-opacity: 0.45;\n  :hover {\n    fill: #AADDFF;\n  }\n"])));
var neutralCss = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: url(#diagonalHatch);\n  stroke: #220;\n  opacity: 0.5;\n"], ["\n  fill: url(#diagonalHatch);\n  stroke: #220;\n  opacity: 0.5;\n"])));
var tileTypesCss = {
    sea: seaCss,
    land: landCss,
    neutral: neutralCss,
};
var getLight = function (id) {
    var key = id + "_light";
    var colourHex = _variables_empireColours__WEBPACK_IMPORTED_MODULE_1__["default"][key];
    return colourHex || 'none';
};
var Path = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].path(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  pointer-events: all;\n  stroke: #444444;\n  stroke-linejoin: round;\n  stroke-width: 0.5;\n  transition: fill-opacity 0.2s;\n  ", ";\n  ", "\n"], ["\n  pointer-events: all;\n  stroke: #444444;\n  stroke-linejoin: round;\n  stroke-width: 0.5;\n  transition: fill-opacity 0.2s;\n  ", ";\n  ", "\n"])), function (p) { return tileTypesCss[p.tileType]; }, function (p) { return p.colourId ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["fill: ", ";"], ["fill: ", ";"])), getLight(p.colourId)) : ''; });
var getTranslate = function (textLocation) {
    var x = textLocation.x, y = textLocation.y;
    return x + "px, " + y + "px";
};
var getRotate = function (rotate) {
    var rotation = rotate || '0';
    return rotation + "deg";
};
var TerritoryName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].g(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  transform:\n    translate(", ")\n    rotate(", ");\n"], ["\n  transform:\n    translate(", ")\n    rotate(", ");\n"])), function (p) { return getTranslate(p.textLocation); }, function (p) { return getRotate(p.textLocation.rotate); });
var TerritoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-family: Palatino;\n  fill: #222;\n  font-size: 9px;\n  transform: translate(0, 8px);\n  pointer-events: none;\n"], ["\n  font-family: Palatino;\n  fill: #222;\n  font-size: 9px;\n  transform: translate(0, 8px);\n  pointer-events: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/client/app/components/board/territory/territory.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/app/components/board/territory/territory.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/client/app/components/board/territory/styled.ts");
/* harmony import */ var _supplyStar_supplyStar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../supplyStar/supplyStar */ "./src/client/app/components/board/supplyStar/supplyStar.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Territory = /** @class */ (function (_super) {
    __extends(Territory, _super);
    function Territory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (title) { return function () {
            console.log(title);
        }; };
        _this.getTileType = function (tags) {
            if (tags.includes('sea'))
                return 'sea';
            if (tags.includes('neutral'))
                return 'neutral';
            return 'land';
        };
        return _this;
    }
    Territory.prototype.render = function (props) {
        var tileType = this.getTileType(props.tile.tags);
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("g", { title: props.tile.title },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["Path"], { tileType: tileType, colourId: props.colour, d: props.tile.path, onClick: props.onSelect }),
                props.tile.textLocation && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["TerritoryName"], { textLocation: props.tile.textLocation },
                        props.tile.tags.includes('supply') && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_supplyStar_supplyStar__WEBPACK_IMPORTED_MODULE_2__["default"], null)),
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["TerritoryTitle"], null, props.tile.name.split('\n').map(function (line, i) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("tspan", { dy: i ? '8' : '0', x: '0', "text-anchor": 'middle' }, line)); }))))))));
    };
    return Territory;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Territory);


/***/ }),

/***/ "./src/client/app/components/board/unit/army/army.tsx":
/*!************************************************************!*\
  !*** ./src/client/app/components/board/unit/army/army.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled */ "./src/client/app/components/board/unit/styled.ts");


var Polygon = _styled__WEBPACK_IMPORTED_MODULE_1__["Polygon"];
var Path = _styled__WEBPACK_IMPORTED_MODULE_1__["Path"];
var Army = function (props) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("g", { transform: "translate(" + (props.location.x - 11) + " " + (props.location.y - 20) + ") scale(0.055)" },
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null,
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill:#999999;', d: 'M145.687,374.175c0-13.504-10.951-24.455-24.455-24.455c-13.516,0-24.467,10.951-24.467,24.455\n        s10.951,24.455,24.467,24.455C134.736,398.63,145.687,387.679,145.687,374.175z' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill:#999999;', d: 'M231.205,378.426c0-11.159-9.045-20.204-20.204-20.204c-11.147,0-20.192,9.045-20.192,20.204\n        s9.045,20.204,20.192,20.204C222.16,398.63,231.205,389.585,231.205,378.426z' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill:#999999;', d: 'M332.952,372.615c0-14.37-11.656-26.026-26.026-26.026c-14.359,0-26.014,11.656-26.014,26.026\n        c0,14.37,11.656,26.014,26.014,26.014C321.297,398.63,332.952,386.986,332.952,372.615z' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill:#999999;', d: 'M392.975,358.557c4.875-3.315,8.075-8.906,8.075-15.248c0-10.177-8.259-18.437-18.437-18.437\n        c-10.189,0-18.448,8.259-18.448,18.437c0,10.189,8.259,18.437,18.448,18.437C386.448,361.745,390.029,360.567,392.975,358.557z' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill:#999999;', d: 'M31.025,369.289c2.403,0.866,4.99,1.34,7.693,1.34c12.441,0,22.537-10.085,22.537-22.537\n        c0-12.441-10.096-22.537-22.537-22.537c-12.453,0-22.537,10.096-22.537,22.537c0,9.727,6.157,18.009,14.786,21.174\n        C30.99,369.265,31.002,369.277,31.025,369.289z' })),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null,
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill:#FFFFFF', d: 'M233.099,174.515v14.151h-5.302H165.73v-14.151c0-6.758,5.476-12.233,12.233-12.233h42.903\n        C227.624,162.282,233.099,167.757,233.099,174.515z' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Polygon, { colourId: props.colour, shade: 'light', points: '488.196,113.372 503.34,150.129 444.761,174.261 442.162,167.942 432.216,143.834\n        429.617,137.515 \t' })),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Path, { colourId: props.colour, shade: 'medium', d: 'M432.216,143.834l9.946,24.108l-155.036,63.904l-2.16,0.289c-2.299-8.294-6.388-16.045-12.037-22.653\n      L432.216,143.834z' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Path, { colourId: props.colour, shade: 'shadow', d: 'M392.975,358.557l-29.445,28.244c-7.901,7.589-18.437,11.829-29.388,11.829h-27.216\n      c14.37,0,26.026-11.644,26.026-26.014c0-14.37-11.656-26.026-26.026-26.026c-14.359,0-26.014,11.656-26.014,26.026\n      c0,14.37,11.656,26.014,26.014,26.014h-95.926c11.159,0,20.204-9.045,20.204-20.204s-9.045-20.204-20.204-20.204\n      c-11.147,0-20.192,9.045-20.192,20.204s9.045,20.204,20.192,20.204h-89.768c13.504,0,24.455-10.951,24.455-24.455\n      s-10.951-24.455-24.455-24.455c-13.516,0-24.467,10.951-24.467,24.455s10.951,24.455,24.467,24.455h-18.102\n      c-6.457,0-12.846-1.259-18.829-3.685l-53.277-25.656c2.403,0.866,4.99,1.34,7.693,1.34c12.441,0,22.537-10.085,22.537-22.537\n      c0-12.441-10.096-22.537-22.537-22.537l343.895-0.682c-10.189,0-18.448,8.259-18.448,18.437c0,10.189,8.259,18.437,18.448,18.437\n      C386.448,361.745,390.029,360.567,392.975,358.557z' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Path, { colourId: props.colour, shade: 'light', d: 'M287.127,247.995v11.171H106.4v-11.171c0-7.867,1.559-15.572,4.517-22.711\n      c2.957-7.127,7.301-13.677,12.857-19.245c11.124-11.124,26.222-17.374,41.956-17.374h62.067c7.867,0,15.572,1.559,22.711,4.517\n      c7.127,2.946,13.677,7.289,19.245,12.857c1.109,1.109,2.172,2.253,3.177,3.442c5.649,6.608,9.738,14.359,12.037,22.653\n      C286.387,237.252,287.127,242.589,287.127,247.995z' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Path, { colourId: props.colour, shade: 'medium', d: 'M157.699,225.286c2.957-7.127,7.301-13.677,12.857-19.245c11.124-11.124,26.222-17.374,41.956-17.374\n      H165.73c-15.733,0-30.832,6.249-41.956,17.374c-5.556,5.568-9.9,12.118-12.857,19.245c-2.957,7.139-4.517,14.844-4.517,22.711\n      v11.171h46.782v-11.171C153.182,240.129,154.742,232.424,157.699,225.286z' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Polygon, { colourId: props.colour, shade: 'light', points: '352.336,294.572 56.069,294.572 41.191,294.572 59.823,259.166 106.4,259.166\n      287.127,259.166 307.619,259.166 ' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Polygon, { colourId: props.colour, shade: 'medium', points: '106.4,259.166 59.823,259.166 41.191,294.573 56.069,294.573 101.835,294.573\n      120.468,259.166 ' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null,
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill: black;', d: 'M382.607,316.208c-0.006,0-343.907,0.684-343.907,0.684c-17.196,0.009-31.184,14.002-31.184,31.2\n        c0,13.229,8.28,24.554,19.928,29.085l53.095,25.569c0.163,0.079,0.329,0.152,0.497,0.221c7.063,2.869,14.497,4.325,22.097,4.325\n        h231.004c13.26,0,25.83-5.056,35.396-14.238l28.988-27.821c6.775-4.931,11.191-12.918,11.191-21.921\n        C409.711,328.367,397.552,316.208,382.607,316.208z M392.384,343.312c0,5.39-4.385,9.775-9.775,9.775\n        c-5.391,0-9.776-4.385-9.776-9.775c0-5.391,4.385-9.776,9.776-9.776C387.997,333.536,392.384,337.921,392.384,343.312z\n        M38.717,334.219c7.65,0,13.874,6.224,13.874,13.874s-6.224,13.874-13.874,13.874s-13.874-6.224-13.874-13.874\n        S31.068,334.219,38.717,334.219z M105.434,374.174c0-8.709,7.085-15.794,15.794-15.794s15.794,7.085,15.794,15.794\n        c0,8.694-7.062,15.766-15.748,15.79h-0.089C112.496,389.94,105.434,382.866,105.434,374.174z M199.469,378.428\n        c0-6.362,5.176-11.538,11.538-11.538s11.538,5.175,11.538,11.538c0,6.346-5.152,11.511-11.493,11.536h-0.089\n        C204.621,389.94,199.469,384.776,199.469,378.428z M289.577,372.611c0-9.569,7.786-17.355,17.355-17.355\n        c9.569,0,17.355,7.786,17.355,17.355c0,9.554-7.762,17.329-17.31,17.353h-0.089C297.338,389.94,289.577,382.165,289.577,372.611z\n        M357.534,380.554c-5.693,5.464-12.998,8.709-20.794,9.303c3.092-4.924,4.876-10.78,4.876-17.244\n        c0-19.124-15.559-34.683-34.683-34.683c-19.124,0-34.683,15.559-34.683,34.683c0,6.512,1.807,12.407,4.941,17.353h-39.867\n        c1.632-3.435,2.548-7.318,2.548-11.536c0-15.916-12.948-28.865-28.865-28.865s-28.865,12.948-28.865,28.865\n        c0,4.218,0.916,8.099,2.548,11.536h-34.373c2.561-4.698,4.032-10.073,4.032-15.79c0-18.263-14.858-33.121-33.121-33.121\n        s-33.12,14.857-33.12,33.12c0,5.018,1.138,9.77,3.144,14.038c-1.162-0.35-2.314-0.746-3.451-1.2l-29.852-14.376\n        c7.28-5.717,11.97-14.59,11.97-24.543c0-5.004-1.191-9.733-3.293-13.929l290.691-0.578c-1.166,3.021-1.811,6.299-1.811,9.725\n        c0,10.747,6.286,20.051,15.375,24.432L357.534,380.554z' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill: black;', d: 'M511.348,146.824l-15.147-36.751c-0.876-2.124-2.559-3.814-4.681-4.697\n        c-2.122-0.884-4.506-0.888-6.631-0.012l-58.573,24.14c-3.843,1.584-5.934,5.613-5.224,9.544l-145.962,60.159\n        c-9.356-9.084-20.866-15.17-33.372-17.767v-6.931c0-11.519-9.372-20.89-20.89-20.89h-42.912c-11.519,0-20.89,9.371-20.89,20.89\n        v6.055c-14.879,1.881-28.64,8.575-39.417,19.351c-12.843,12.843-19.916,29.918-19.916,48.081v2.509H59.819\n        c-3.217,0-6.169,1.782-7.667,4.629l-17.417,33.091c-6.136,1.343-12.155,3.248-18.008,5.756L5.253,298.9\n        c-4.398,1.885-6.435,6.978-4.55,11.376c1.885,4.399,6.978,6.434,11.376,4.55l11.474-4.918c10.334-4.429,21.275-6.675,32.519-6.675\n        H352.34h34.438l18.97,12.851c1.489,1.008,3.179,1.492,4.852,1.492c2.777,0,5.506-1.333,7.181-3.805\n        c2.683-3.962,1.647-9.349-2.314-12.032l-21.171-14.341c-1.435-0.971-3.127-1.491-4.86-1.491h-34.08l-42.353-33.53\n        c-1.531-1.212-3.425-1.871-5.377-1.871h-11.831v-2.509c0-3.395-0.248-6.752-0.734-10.05l142.596-58.769\n        c1.629,2.361,4.303,3.754,7.115,3.754c1.1,0,2.218-0.211,3.298-0.656l58.573-24.14c2.124-0.876,3.814-2.559,4.697-4.681\n        C512.22,151.333,512.224,148.949,511.348,146.824z M174.395,174.509c0-1.965,1.598-3.563,3.563-3.563h42.912\n        c1.965,0,3.563,1.598,3.563,3.563v5.492h-50.037L174.395,174.509L174.395,174.509z M327.44,285.907H56.075h-0.536l9.512-18.074\n        h239.561L327.44,285.907z M115.063,250.506v-2.509c0-13.534,5.271-26.257,14.84-35.828c9.569-9.569,22.294-14.84,35.828-14.84\n        h62.066c13.534,0,26.258,5.271,35.828,14.84c9.569,9.571,14.841,22.295,14.841,35.828v2.509H115.063z M286.322,213.337\n        l141.191-58.192l1.635,3.96l1.704,4.134l-140.552,57.928C289.144,218.478,287.822,215.862,286.322,213.337z M449.479,162.952\n        l-4.524-10.961l-4.025-9.767l42.552-17.538l8.544,20.731L449.479,162.952z' })))); };
/* harmony default export */ __webpack_exports__["default"] = (Army);


/***/ }),

/***/ "./src/client/app/components/board/unit/fleet/fleet.tsx":
/*!**************************************************************!*\
  !*** ./src/client/app/components/board/unit/fleet/fleet.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled */ "./src/client/app/components/board/unit/styled.ts");


var Fleet = function (props) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("g", { transform: "translate(" + (props.location.x - 10) + " " + (props.location.y - 20) + ") scale(0.05)" },
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["Path"], { colourId: props.colour, shade: 'light', d: 'M128.904,85.83v64.869H97.813c-9.197,0-16.655-7.458-16.655-16.655v-31.559\n      c0-9.197,7.458-16.655,16.655-16.655H128.904z' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["Path"], { colourId: props.colour, shade: 'light', d: 'M176.638,102.485v31.559c0,9.197-7.458,16.655-16.655,16.655h-31.079V85.83h31.079\n      C169.18,85.83,176.638,93.288,176.638,102.485z' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null,
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("rect", { x: '60.444', y: '182.688', style: 'fill:#CCCCCC;', width: '136.92', height: '47.866' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("polygon", { style: 'fill:#CCCCCC;', points: '219.073,261.143 219.073,309.213 38.723,309.213 38.723,230.556 60.438,230.556\n        197.358,230.556 219.073,230.556 \t' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill:#CCCCCC;', d: 'M437.576,228.193c4.532,5.767,7.23,13.046,7.23,20.947v15.947h-101.68v-49.881h67.758\n        C421.725,215.208,431.365,220.292,437.576,228.193z' })),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["Polygon"], { colourId: props.colour, shade: 'medium', points: '497.253,265.088 447.876,391.276 26.241,391.276 26.229,391.276 8.987,309.213\n      38.723,309.213 219.073,309.213 286.22,309.213 309.242,265.088 343.127,265.088 444.806,265.088 ' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["Polygon"], { colourId: props.colour, shade: 'shadow', points: '447.876,391.276 428.187,441.589 36.805,441.589 26.229,391.276 26.241,391.276 ' }),
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null,
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill: black;', d: 'M512,228.19c0-4.966-4.025-8.993-8.993-8.993h-61.414c-7.801-7.999-18.682-12.979-30.711-12.979\n        h-67.75c-4.968,0-8.993,4.026-8.993,8.993v40.888h-24.901c-3.35,0-6.422,1.862-7.973,4.833l-20.5,39.293h-52.704v-60.673h4.685\n        c4.966,0,8.993-4.026,8.993-8.993c0-4.966-4.026-8.993-8.993-8.993h-13.678h-12.717V191.68h9.71c4.966,0,8.993-4.026,8.993-8.993\n        s-4.026-8.993-8.993-8.993h-78.169v-13.999h22.088c14.143,0,25.65-11.506,25.65-25.65v-31.557c0-14.143-11.506-25.65-25.65-25.65\n        h-22.088v-6.432c0-4.966-4.026-8.993-8.993-8.993c-4.966,0-8.993,4.026-8.993,8.993v6.432H97.819\n        c-14.143,0-25.65,11.506-25.65,25.65v31.555c0,14.143,11.506,25.65,25.65,25.65h22.088v13.999H41.738\n        c-4.966,0-8.993,4.026-8.993,8.993s4.026,8.993,8.993,8.993h9.71v29.886H38.729H25.053c-4.966,0-8.993,4.026-8.993,8.993\n        c0,4.966,4.026,8.993,8.993,8.993h4.683v60.673H8.993c-2.71,0-5.275,1.222-6.982,3.325c-1.707,2.103-2.375,4.866-1.819,7.517\n        L28.01,443.442c0.875,4.163,4.547,7.144,8.801,7.144h391.375c3.701,0,7.025-2.269,8.374-5.716l69.067-176.503\n        c1.083-2.767,0.728-5.892-0.947-8.347s-4.456-3.923-7.427-3.923h-43.448v-6.957c0-4.15-0.603-8.161-1.707-11.959h50.909\n        C507.975,237.183,512,233.156,512,228.19z M159.98,94.825c4.225,0,7.664,3.438,7.664,7.664v31.555c0,4.225-3.438,7.664-7.664,7.664\n        h-22.088V94.825H159.98z M97.819,141.708c-4.225,0-7.664-3.438-7.664-7.664v-31.555c0-4.225,3.438-7.664,7.664-7.664h22.088v46.884\n        H97.819z M69.434,191.68h118.932v29.886H69.434V191.68z M47.722,239.552h162.353v12.602H73.169c-4.966,0-8.993,4.026-8.993,8.993\n        s4.026,8.993,8.993,8.993h136.908v30.085H47.722V239.552z M422.048,432.602H44.111l-6.795-32.336h397.386L422.048,432.602z\n        M441.739,382.28H33.536l-13.464-64.069h266.145c3.35,0,6.422-1.862,7.973-4.833l20.501-39.293h169.386L441.739,382.28z\n        M352.124,256.099v-31.895h58.757c13.751,0,24.938,11.187,24.938,24.938v6.957H352.124z' }),
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { style: 'fill: black', d: 'M411.239,336.676c-4.968,0-8.993,4.026-8.993,8.993c0,2.975-2.421,5.396-5.396,5.396\n        c-2.975,0-5.397-2.421-5.397-5.396v-35.492c0-4.966-4.025-8.993-8.993-8.993s-8.993,4.026-8.993,8.993v35.492\n        c0,2.975-2.421,5.396-5.396,5.396c-2.975,0-5.396-2.421-5.396-5.396c0-4.966-4.025-8.993-8.993-8.993s-8.993,4.026-8.993,8.993\n        c0,12.892,10.489,23.382,23.382,23.382c5.428,0,10.416-1.875,14.389-4.99c3.972,3.115,8.962,4.99,14.39,4.99\n        c12.892,0,23.382-10.489,23.382-23.382C420.232,340.703,416.207,336.676,411.239,336.676z' })))); };
/* harmony default export */ __webpack_exports__["default"] = (Fleet);


/***/ }),

/***/ "./src/client/app/components/board/unit/styled.ts":
/*!********************************************************!*\
  !*** ./src/client/app/components/board/unit/styled.ts ***!
  \********************************************************/
/*! exports provided: Path, Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_empireColours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../variables/empireColours */ "./src/client/app/variables/empireColours.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var Path = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].path(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: ", "\n"], ["\n  fill: ", "\n"])), function (_a) {
    var colourId = _a.colourId, shade = _a.shade;
    return _variables_empireColours__WEBPACK_IMPORTED_MODULE_1__["default"][colourId + "_" + shade];
});
var Polygon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].polygon(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fill: ", "\n"], ["\n  fill: ", "\n"])), function (_a) {
    var colourId = _a.colourId, shade = _a.shade;
    return _variables_empireColours__WEBPACK_IMPORTED_MODULE_1__["default"][colourId + "_" + shade];
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/client/app/components/board/unit/unit.tsx":
/*!*******************************************************!*\
  !*** ./src/client/app/components/board/unit/unit.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _army_army__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./army/army */ "./src/client/app/components/board/unit/army/army.tsx");
/* harmony import */ var _fleet_fleet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fleet/fleet */ "./src/client/app/components/board/unit/fleet/fleet.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Unit = /** @class */ (function (_super) {
    __extends(Unit, _super);
    function Unit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Unit.prototype.render = function (props, state) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            props.unitType === 'Army' &&
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_army_army__WEBPACK_IMPORTED_MODULE_1__["default"], { viewBox: props.viewBox, location: props.location, empire: props.empire, colour: props.colour }),
            props.unitType === 'Fleet' &&
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_fleet_fleet__WEBPACK_IMPORTED_MODULE_2__["default"], { viewBox: props.viewBox, location: props.location, empire: props.empire, colour: props.colour })));
    };
    return Unit;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Unit);


/***/ }),

/***/ "./src/client/app/components/ordersBox/ordersBox.tsx":
/*!***********************************************************!*\
  !*** ./src/client/app/components/ordersBox/ordersBox.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _shared_types_enums_OrderType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/types/enums/OrderType */ "./src/shared/types/enums/OrderType.ts");
/* harmony import */ var _shared_types_enums_UnitType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/types/enums/UnitType */ "./src/shared/types/enums/UnitType.ts");
/* harmony import */ var _client_app_helpers_checkTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @client/app/_helpers/checkTag */ "./src/client/app/_helpers/checkTag.ts");




var getOrderTypes = function (unit) {
    var orderTypes = ['Hold', 'Move', 'Support',];
    if (unit.unitType === _shared_types_enums_UnitType__WEBPACK_IMPORTED_MODULE_2__["default"].FLEET && Object(_client_app_helpers_checkTag__WEBPACK_IMPORTED_MODULE_3__["default"])(unit.location, 'sea')) {
        orderTypes.push(_shared_types_enums_OrderType__WEBPACK_IMPORTED_MODULE_1__["default"].CONVOY);
    }
    if (unit.unitType === _shared_types_enums_UnitType__WEBPACK_IMPORTED_MODULE_2__["default"].ARMY && Object(_client_app_helpers_checkTag__WEBPACK_IMPORTED_MODULE_3__["default"])(unit.location, 'coastal')) {
        orderTypes.push(_shared_types_enums_OrderType__WEBPACK_IMPORTED_MODULE_1__["default"].MOVEVIACONVOY);
    }
    return orderTypes;
};
var OrderDropdown = function (props) {
    var orderTypes = getOrderTypes(props.unit);
    return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", { type: 'select' }, orderTypes.map(function (orderType, i) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", { key: "ordertype-" + i }, orderType)); })));
};
var OrdersBox = function (props) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: "border: 1px black; font-family: 'palantino';" }, props.playerData.ownedUnits.map(function (unit, i) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { key: "ownedUnits-" + i },
    unit.unitType,
    " in ",
    unit.location,
    " will ",
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(OrderDropdown, { unit: unit }))); }))); };
/* harmony default export */ __webpack_exports__["default"] = (OrdersBox);


/***/ }),

/***/ "./src/client/app/components/ordersLayer/order/order.tsx":
/*!***************************************************************!*\
  !*** ./src/client/app/components/ordersLayer/order/order.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getLocation = function (property) {
            var territory = _this.props.boardData.territories.find(function (t) { return t.title === _this.props[property]; });
            if (!territory)
                return '';
            return territory.textLocation.x + "," + territory.textLocation.y;
        };
        _this.getMarkerColour = function (moveType) {
            switch (moveType) {
                case 'move': return 'lightgray';
                case 'support': return 'brown';
                case 'retreat': return 'blue';
                default: return '';
            }
        };
        _this.calculateLocation = function (fromLocation, toLocation) {
            var distanceFromEnd = 10;
            var _a = fromLocation.split(',').map(function (n) { return parseInt(n, 10); }), fromX = _a[0], fromY = _a[1];
            var _b = toLocation.split(',').map(function (n) { return parseInt(n, 10); }), toX = _b[0], toY = _b[1];
            var lineLength = Math.sqrt(Math.pow((fromX - toX), 2) + Math.pow((fromY - toY), 2));
            var t = distanceFromEnd / lineLength;
            console.log('fromLocation, toLocation:', fromLocation, toLocation);
            console.log('fromX, fromY, toX, toY:', fromX, fromY, toX, toY);
            var x = ((1 - t) * toX) + (t * fromX);
            var y = ((1 - t) * toY) + (t * fromY);
            return x + "," + y;
        };
        return _this;
    }
    Order.prototype.render = function (props, state) {
        var fromLocation = this.getLocation('from');
        var toLocation = this.getLocation('to');
        var supportFromLocation = this.getLocation('supportFrom');
        var markerColour = this.getMarkerColour(props.moveType);
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            props.moveType === 'support' && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "marker-end": 'url(#head-support)', "stroke-width": '2', fill: 'transparent', stroke: markerColour, d: "M" + this.calculateLocation(toLocation, fromLocation) + " Q" + supportFromLocation + " " + this.calculateLocation(supportFromLocation, toLocation) }),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "stroke-width": '4', fill: 'transparent', stroke: '#FF000088', d: "M" + this.calculateLocation(toLocation, supportFromLocation) + " L " + this.calculateLocation(supportFromLocation, toLocation) }))),
            props.moveType === 'move' && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "marker-end": 'url(#head-move)', "stroke-width": '2', stroke: 'lightgray', d: "M" + this.calculateLocation(toLocation, fromLocation) + " L" + this.calculateLocation(fromLocation, toLocation) }))));
    };
    return Order;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Order);


/***/ }),

/***/ "./src/client/app/components/ordersLayer/ordersLayer.tsx":
/*!***************************************************************!*\
  !*** ./src/client/app/components/ordersLayer/ordersLayer.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _order_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order/order */ "./src/client/app/components/ordersLayer/order/order.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var OrdersLayer = /** @class */ (function (_super) {
    __extends(OrdersLayer, _super);
    function OrdersLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.markerColours = {
            support: 'brown',
            move: 'lightgray',
            retreat: 'blue',
        };
        _this.order = {
            'move': 1,
            'support': 0,
        };
        return _this;
    }
    OrdersLayer.prototype.render = function (props, state) {
        var _this = this;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("defs", null, Object.entries(this.markerColours).map(function (_a) {
                var moveType = _a[0], colour = _a[1];
                return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("marker", { id: "head-" + moveType, orient: 'auto', markerWidth: '2', markerHeight: '4', refX: '0.1', refY: '2' },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: 'M0,0 V4 L2,2 Z', fill: colour })));
            })),
            props.turnData && props.turnData.players.map(function (player) { return (player.moves
                .sort(function (a, b) { return _this.order[a.moveType] - _this.order[b.moveType]; })
                .map(function (order, i) { return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_order_order__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ key: "order-a-" + i + "-" + Date.now() }, order, { boardData: props.boardData })); })); }),
            props.newOrders && props.newOrders
                .sort(function (a, b) { return _this.order[a.moveType] - _this.order[b.moveType]; })
                .map(function (order, i) { return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_order_order__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ key: "order-b-" + i + "-" + Date.now() }, order, { boardData: props.boardData }))); })));
    };
    return OrdersLayer;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (OrdersLayer);


/***/ }),

/***/ "./src/client/app/pages/game/game.tsx":
/*!********************************************!*\
  !*** ./src/client/app/pages/game/game.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! await-to-js */ "./node_modules/await-to-js/dist/await-to-js.es5.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_app_components_board_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @client/app/components/board/board */ "./src/client/app/components/board/board.tsx");
/* harmony import */ var _client_assets_countryData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @client/assets/countryData */ "./src/client/assets/countryData.ts");
/* harmony import */ var _client_devTools_setupGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @client/devTools/setupGame */ "./src/client/devTools/setupGame.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./src/client/app/pages/game/styled.ts");
/* harmony import */ var _client_utils_scrollToElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @client/utils/scrollToElement */ "./src/client/utils/scrollToElement.ts");
/* harmony import */ var _client_app_components_ordersBox_ordersBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @client/app/components/ordersBox/ordersBox */ "./src/client/app/components/ordersBox/ordersBox.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            gameIsRunning: false,
            activeTerritory: null,
            turn: null,
            newOrders: [],
            newNewOrders: [],
            newOrder: null,
        };
        _this.onTileSelect = function (territoryName) {
            return function () {
                if (_this.state.newOrder && _this.state.newOrder.moveType) {
                    var order = __assign({}, _this.state.newOrder);
                    if (order.moveType === 'support') {
                        if (order.supportFrom)
                            return _this.completeMove(territoryName);
                        order.supportFrom = territoryName;
                        _this.setState({ newOrder: order });
                    }
                    if (order.moveType === 'move')
                        _this.completeMove(territoryName);
                }
                if (!_this.state.newOrder && _this.playerHasUnitAt(territoryName))
                    _this.beginMove(territoryName);
            };
        };
        _this.onMoveSelect = function (orderType) { return function () {
            if (orderType === null)
                return _this.setState({ newOrder: null, activeTerritory: null });
            var newOrder = __assign({}, _this.state.newOrder);
            newOrder.moveType = orderType;
            _this.setState({ newOrder: newOrder }, function () {
                if (orderType === 'hold')
                    _this.completeMove(newOrder.from);
            });
        }; };
        _this.playerHasUnitAt = function (territoryName) {
            if (!_this.state.turn)
                return false;
            var player = _this.state.turn.players.find(function (p) { return p.playerID === _this.props.userID; });
            return !!player.ownedUnits.find(function (u) { return u.location === territoryName; });
        };
        _this.getUnitAt = function (territoryName) {
            var unit;
            _this.state.turn.players.forEach(function (p) {
                p.ownedUnits.forEach(function (u) {
                    if (u.location === territoryName)
                        unit = u;
                });
            });
            return unit;
        };
        // ? Move axios requests into a helper service?
        _this.setupGame = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, err, game, turn;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Object(await_to_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_client_devTools_setupGame__WEBPACK_IMPORTED_MODULE_5__["default"])())];
                    case 1:
                        _a = _b.sent(), err = _a[0], game = _a[1].data;
                        if (err) {
                            console.log("Error ocurred when setting up new full game: " + err.message);
                            return [2 /*return*/, Promise.reject(err)];
                        }
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("api/turn/" + game.currentTurn)];
                    case 2:
                        turn = (_b.sent()).data;
                        this.setState({ game: game, turn: turn });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.getLatestGame = function () { return __awaiter(_this, void 0, void 0, function () {
            var game, turn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/game/latest')];
                    case 1:
                        game = (_a.sent()).data;
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/turn/" + game.currentTurn)];
                    case 2:
                        turn = (_a.sent()).data;
                        this.setState({ game: game, turn: turn });
                        return [2 /*return*/];
                }
            });
        }); };
        // private refresh = () => {
        //   game.clearMap()
        //   this.runGame()
        // }
        _this.submitOrders = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/api/turn/" + this.state.game.currentTurn, {
                            moves: this.state.newOrders,
                            turnID: this.state.game.currentTurn,
                        })];
                    case 1:
                        _a.sent();
                        console.log('Orders submitted!', this.state.newOrders);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.nextTurn = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, err, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Object(await_to_js__WEBPACK_IMPORTED_MODULE_1__["default"])(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/game/" + this.state.game._id + "/next"))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            console.log(err);
                        if (res)
                            this.getLatestGame();
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
        // private getSvg = (label: string) => {
        //   const svgObject = document.getElementById(label) as HTMLObjectElement
        //   return svgObject.contentDocument.getElementById(`${label}Svg`)
        // }
        // private runGame() {
        //   const [army, fleet] = ['army', 'fleet'].map(this.getSvg)
        //   const map = document.getElementById('gameBoard') as HTMLObjectElement
        //   game.setup({map, army, fleet}, this.state.turn, this.props.userID)
        //   game.run()
        // }
    }
    Game.prototype.componentDidMount = function () {
        window.addEventListener('orientationchange', function () {
            setTimeout(function () { return Object(_client_utils_scrollToElement__WEBPACK_IMPORTED_MODULE_7__["default"])('anchor'); }, 500);
            console.log('screen.orientation.angle', screen.orientation.angle);
        });
    };
    Game.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b;
        var currentTurnId = (_a = this.state.game) === null || _a === void 0 ? void 0 : _a.currentTurn;
        var prevTurnId = (_b = prevState.game) === null || _b === void 0 ? void 0 : _b.currentTurn;
        console.log('prevTurnId, currentTurnId:', prevTurnId, currentTurnId);
        if (currentTurnId && currentTurnId !== prevTurnId) {
            this.setState({ newOrders: [] });
        }
    };
    Object.defineProperty(Game.prototype, "currentPlayer", {
        get: function () {
            var _this = this;
            if (!this.state.turn)
                return null;
            return this.state.turn.players.find(function (p) { return p.playerID === _this.props.userID; });
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.render = function (props, state) {
        var totalOrders = 0;
        if (state.turn)
            state.turn.players.forEach(function (p) { return totalOrders += p.moves.length; });
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", null, "Diplomacy"),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_6__["ButtonsContainer"], null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: this.setupGame }, "Set Up Game"),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: this.getLatestGame }, "Load Game"),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: this.submitOrders }, "Submit Orders"),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: this.props.logOut }, "Log out"),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: this.nextTurn }, "Next Turn"),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null)),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null),
            !!state.turn && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "You are playing as " + this.player.empire),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, state.turn.info.season + " " + state.turn.info.year + ": " + state.turn.info.phase + ". Current Orders: " + totalOrders),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_client_app_components_ordersBox_ordersBox__WEBPACK_IMPORTED_MODULE_8__["default"], { playerData: this.player, newNewOrders: state.newNewOrders }))),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: 'anchor' }, " "),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_client_app_components_board_board__WEBPACK_IMPORTED_MODULE_3__["default"], { boardData: _client_assets_countryData__WEBPACK_IMPORTED_MODULE_4__["default"], activeTerritory: state.activeTerritory, onTileSelect: this.onTileSelect, onMoveSelect: this.onMoveSelect, turnData: state.turn, newOrders: state.newOrders, newOrder: state.newOrder })));
    };
    Game.prototype.beginMove = function (territoryName) {
        var unit = this.getUnitAt(territoryName);
        var newOrder = {
            unit: unit.unitType,
            from: unit.location,
        };
        this.setState({ newOrder: newOrder, activeTerritory: territoryName });
    };
    Game.prototype.completeMove = function (territoryName) {
        var newOrder = {
            unit: this.state.newOrder.unit,
            from: this.state.newOrder.from,
            moveType: this.state.newOrder.moveType,
            supportFrom: this.state.newOrder.supportFrom,
            to: territoryName,
            wasSuccessful: null,
        };
        var newOrders = this.state.newOrders.filter(function (o) { return o.from !== newOrder.from; });
        newOrders.push(newOrder);
        console.log('newOrder:', newOrder);
        this.setState({ newOrders: newOrders, newOrder: null, activeTerritory: null });
    };
    Object.defineProperty(Game.prototype, "player", {
        get: function () {
            var _this = this;
            if (!this.state.turn)
                return null;
            return this.state.turn.players.find(function (p) { return p.playerID === _this.props.userID; });
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/client/app/pages/game/styled.ts":
/*!*********************************************!*\
  !*** ./src/client/app/pages/game/styled.ts ***!
  \*********************************************/
/*! exports provided: ButtonsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsContainer", function() { return ButtonsContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-justify: center;\n"], ["\n  text-justify: center;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/client/app/variables/empireColours.ts":
/*!***************************************************!*\
  !*** ./src/client/app/variables/empireColours.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    e01_light: '#00007f',
    e01_medium: '#000065',
    e01_shadow: '#00004c',
    e02_light: '#0000ff',
    e02_medium: '#0000cc',
    e02_shadow: '#000099',
    e03_light: '#007f00',
    e03_medium: '#006500',
    e03_shadow: '#004c00',
    e04_light: '#007f7f',
    e04_medium: '#006565',
    e04_shadow: '#004c4c',
    e05_light: '#007fff',
    e05_medium: '#0065cc',
    e05_shadow: '#004c99',
    e06_light: '#00ff00',
    e06_medium: '#00cc00',
    e06_shadow: '#009900',
    e07_light: '#00ff7f',
    e07_medium: '#00cc65',
    e07_shadow: '#00994c',
    e08_light: '#00ffff',
    e08_medium: '#00cccc',
    e08_shadow: '#009999',
    e09_light: '#7f0000',
    e09_medium: '#650000',
    e09_shadow: '#4c0000',
    e10_light: '#7f007f',
    e10_medium: '#650065',
    e10_shadow: '#4c004c',
    e11_light: '#7f00ff',
    e11_medium: '#6500cc',
    e11_shadow: '#4c0099',
    e12_light: '#7f7f00',
    e12_medium: '#656500',
    e12_shadow: '#4c4c00',
    e13_light: '#7f7f7f',
    e13_medium: '#656565',
    e13_shadow: '#4c4c4c',
    e14_light: '#7f7fff',
    e14_medium: '#6565cc',
    e14_shadow: '#4c4c99',
    e15_light: '#7fff00',
    e15_medium: '#65cc00',
    e15_shadow: '#4c9900',
    e16_light: '#7fff7f',
    e16_medium: '#65cc65',
    e16_shadow: '#4c994c',
    e17_light: '#7fffff',
    e17_medium: '#65cccc',
    e17_shadow: '#4c9999',
    e18_light: '#ff0000',
    e18_medium: '#cc0000',
    e18_shadow: '#990000',
    e19_light: '#ff007f',
    e19_medium: '#cc0065',
    e19_shadow: '#99004c',
    e20_light: '#ff00ff',
    e20_medium: '#cc00cc',
    e20_shadow: '#990099',
    e21_light: '#ff7f00',
    e21_medium: '#cc6500',
    e21_shadow: '#994c00',
    e22_light: '#ff7f7f',
    e22_medium: '#cc6565',
    e22_shadow: '#994c4c',
    e23_light: '#ff7fff',
    e23_medium: '#cc65cc',
    e23_shadow: '#994c99',
    e24_light: '#ffff00',
    e24_medium: '#cccc00',
    e24_shadow: '#999900',
    e25_light: '#ffff7f',
    e25_medium: '#cccc65',
    e25_shadow: '#99994c',
});


/***/ }),

/***/ "./src/client/assets/countryData.ts":
/*!******************************************!*\
  !*** ./src/client/assets/countryData.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var countryData = {
    mapTitle: 'Classic',
    viewBox: '0 0 609 559',
    territories: [
        {
            title: 'Adriatic_Sea',
            name: 'Adriatic Sea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 322 480 L 297 456 L 300 453 L 290 453 L 278 443 L 272 424 L 260 417 L 261 401 L 270 398 L 276 399 L 275 403 L 278 410 L 282 401 L 286 402 L 289 418 L 306 436 L 331 454 L 331 477 L 335 480 L 322 480",
            textLocation: {
                x: 300,
                y: 435,
                rotate: 48,
            },
        },
        {
            title: 'Aegean_Sea',
            name: 'Aegean\nSea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 376 537 L 371 520 L 378 521 L 377 513 L 386 516 L 385 509 L 370 494 L 371 491 L 378 494 L 368 483 L 371 477 L 379 484 L 382 483 L 381 477 L 386 478 L 380 472 L 392 472 L 400 468 L 408 470 L 410 473 L 414 475 L 410 482 L 409 487 L 417 486 L 417 489 L 420 495 L 417 498 L 417 507 L 423 510 L 427 524 L 435 523 L 435 530 L 416 549 L 412 547 L 387 546 L 383 544 L 376 537",
            textLocation: {
                x: 408,
                y: 505,
            },
        },
        {
            title: 'Baltic_Sea',
            name: 'Baltic Sea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 266 255 L 271 260 L 278 254 L 277 250 L 280 248 L 279 243 L 282 253 L 289 254 L 294 245 L 305 244 L 312 229 L 311 220 L 359 220 L 349 229 L 347 243 L 347 248 L 348 254 L 344 262 L 337 264 L 334 273 L 328 274 L 326 265 L 314 266 L 307 273 L 294 275 L 286 274 L 287 267 L 280 266 L 266 275 L 261 274 L 260 269 L 256 266 L 256 263 L 254 255 L 266 255",
            textLocation: {
                x: 320,
                y: 247,
            },
        },
        {
            title: 'Barents_Sea',
            name: 'Barents Sea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 540 0 L 535 9 L 530 6 L 517 19 L 516 33 L 513 38 L 513 23 L 507 20 L 505 26 L 499 33 L 492 48 L 495 58 L 488 60 L 479 57 L 477 55 L 481 50 L 473 43 L 466 45 L 472 62 L 478 66 L 478 74 L 472 72 L 468 74 L 457 91 L 469 100 L 467 106 L 462 109 L 444 101 L 442 110 L 447 115 L 454 119 L 452 122 L 434 118 L 426 103 L 426 94 L 414 88 L 412 83 L 445 84 L 457 79 L 459 66 L 453 61 L 417 47 L 405 49 L 401 45 L 397 48 L 391 47 L 395 41 L 394 38 L 384 33 L 382 40 L 380 33 L 377 31 L 374 38 L 371 33 L 366 42 L 366 33 L 362 33 L 362 0 L 540 0",
            textLocation: {
                x: 440,
                y: 15,
            },
        },
        {
            title: 'Black_Sea',
            name: 'Black Sea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 440 458 L 430 455 L 426 450 L 422 441 L 425 427 L 429 426 L 430 423 L 432 409 L 439 404 L 438 397 L 446 378 L 459 375 L 461 377 L 459 379 L 465 383 L 476 381 L 478 383 L 472 385 L 468 392 L 477 396 L 477 401 L 486 404 L 488 397 L 494 396 L 497 392 L 507 389 L 506 384 L 494 387 L 485 378 L 503 364 L 526 351 L 527 354 L 514 365 L 517 371 L 520 371 L 515 384 L 511 383 L 510 386 L 517 393 L 528 394 L 554 406 L 567 408 L 573 417 L 570 427 L 555 438 L 551 437 L 520 441 L 514 438 L 511 440 L 502 433 L 481 438 L 470 447 L 464 457 L 442 460 L 440 458",
            textLocation: {
                x: 495,
                y: 410,
            },
        },
        {
            title: 'Eastern_Mediterranean',
            name: 'Eastern Mediterranean',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 435 530 L 441 526 L 447 528 L 453 534 L 464 531 L 466 521 L 475 520 L 485 528 L 491 530 L 505 526 L 511 514 L 520 517 L 527 508 L 530 509 L 525 518 L 526 530 L 532 535 L 528 559 L 400 559 L 400 554 L 414 552 L 416 549 L 435 530",
            textLocation: {
                x: 478,
                y: 538,
            },
        },
        {
            title: 'English_Channel',
            name: 'English Channel',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 173 301 L 169 311 L 153 315 L 155 320 L 150 319 L 144 318 L 142 312 L 136 310 L 136 326 L 124 323 L 122 318 L 102 317 L 88 303 L 100 291 L 110 292 L 120 295 L 124 291 L 134 294 L 147 295 L 160 298 L 168 296 L 173 301",
            textLocation: {
                x: 135,
                y: 298,
            },
        },
        {
            title: 'Gulf_of_Lyon',
            name: 'Gulf of Lyon',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 115 469 L 110 461 L 124 444 L 131 439 L 146 438 L 157 432 L 158 425 L 158 418 L 169 412 L 176 417 L 188 422 L 198 421 L 211 416 L 222 410 L 233 415 L 238 431 L 224 431 L 221 434 L 211 436 L 213 451 L 218 454 L 218 458 L 214 461 L 206 462 L 205 466 L 154 466 L 148 463 L 142 469 L 115 469",
            textLocation: {
                x: 180,
                y: 440,
            },
        },
        {
            title: 'Gulf_of_Bothnia',
            name: 'Gulf\nof\nBothnia',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 311 220 L 314 209 L 322 206 L 328 203 L 331 193 L 326 183 L 320 182 L 321 161 L 330 146 L 343 138 L 351 128 L 347 121 L 349 112 L 355 104 L 362 107 L 368 108 L 372 120 L 366 121 L 359 136 L 345 151 L 347 160 L 350 165 L 348 178 L 349 184 L 357 186 L 365 191 L 384 185 L 402 177 L 403 183 L 411 184 L 414 187 L 408 187 L 400 192 L 399 197 L 387 196 L 371 198 L 369 202 L 365 204 L 368 210 L 372 213 L 373 221 L 377 227 L 373 229 L 366 228 L 359 220 L 311 220",
            textLocation: {
                x: 344,
                y: 183,
            },
        },
        {
            title: 'Helgoland_Bight',
            name: 'Hel.',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 245 237 L 243 247 L 244 254 L 243 257 L 245 263 L 244 270 L 244 273 L 235 277 L 234 274 L 230 273 L 226 275 L 211 274 L 211 237 L 245 237",
            textLocation: {
                x: 235,
                y: 248,
            },
        },
        {
            title: 'Ionian_Sea',
            name: 'Ionian Sea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 289 511 L 290 514 L 295 515 L 308 500 L 311 491 L 304 484 L 310 480 L 318 485 L 322 485 L 322 480 L 335 480 L 339 487 L 346 498 L 350 498 L 347 500 L 352 508 L 367 507 L 371 511 L 355 510 L 350 514 L 357 521 L 359 533 L 360 528 L 367 536 L 368 531 L 376 537 L 383 544 L 380 547 L 383 550 L 400 554 L 400 559 L 232 559 L 234 551 L 232 544 L 225 535 L 231 531 L 236 524 L 247 513 L 258 519 L 273 531 L 281 532 L 282 521 L 285 513 L 285 511 L 289 511",
            textLocation: {
                x: 320,
                y: 525,
            },
        },
        {
            title: 'Irish_Sea',
            name: 'Irish Sea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 100 291 L 112 287 L 122 281 L 130 282 L 127 276 L 119 272 L 116 272 L 115 265 L 128 262 L 126 256 L 121 257 L 132 250 L 135 250 L 139 240 L 136 229 L 130 227 L 120 227 L 110 232 L 109 246 L 98 259 L 87 257 L 70 261 L 58 273 L 88 303 L 100 291",
            textLocation: {
                x: 95,
                y: 265,
            },
        },
        {
            title: 'Mid_Atlantic_Ocean',
            name: 'Mid\nAtlantic\nOcean',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 102 317 L 100 322 L 103 328 L 109 329 L 123 344 L 122 350 L 123 357 L 128 363 L 121 382 L 122 384 L 112 399 L 101 396 L 96 397 L 72 384 L 59 381 L 54 375 L 48 374 L 46 378 L 39 375 L 33 381 L 35 384 L 32 396 L 30 406 L 17 427 L 14 427 L 10 433 L 13 440 L 15 441 L 12 450 L 13 454 L 8 462 L 19 469 L 27 468 L 33 475 L 34 484 L 37 490 L 37 495 L 33 496 L 17 518 L 0 520 L 0 273 L 58 273 L 102 317",
            textLocation: {
                x: 60,
                y: 315,
            },
        },
        {
            title: 'North_Atlantic_Ocean',
            name: 'North Atlantic Ocean',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 70 261 L 64 250 L 67 242 L 71 245 L 81 234 L 74 228 L 80 225 L 78 218 L 82 217 L 89 220 L 94 220 L 95 218 L 94 216 L 97 216 L 101 212 L 110 212 L 119 217 L 120 227 L 130 227 L 130 223 L 138 217 L 138 214 L 130 208 L 129 197 L 139 189 L 140 182 L 148 177 L 148 0 L 0 0 L 0 273 L 58 273 L 70 261",
            textLocation: {
                x: 75,
                y: 120,
            },
        },
        {
            title: 'North_Sea',
            name: 'North Sea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 168 296 L 172 294 L 165 293 L 176 283 L 178 274 L 177 270 L 171 268 L 168 270 L 166 269 L 169 265 L 170 252 L 168 246 L 163 239 L 163 226 L 161 218 L 157 216 L 151 215 L 158 214 L 165 210 L 170 202 L 171 197 L 171 181 L 198 154 L 236 154 L 237 160 L 233 167 L 231 180 L 233 186 L 229 192 L 231 201 L 241 209 L 241 224 L 248 224 L 245 237 L 211 237 L 211 274 L 207 279 L 205 279 L 205 276 L 198 289 L 191 299 L 173 301 L 168 296",
            textLocation: {
                x: 210,
                y: 210,
            },
        },
        {
            title: 'Norwegian_Sea',
            name: 'Norwegian Sea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 362 33 L 357 39 L 343 44 L 324 54 L 320 64 L 310 75 L 309 84 L 303 86 L 292 111 L 277 132 L 269 134 L 264 142 L 258 141 L 236 154 L 198 154 L 171 181 L 171 197 L 158 193 L 152 194 L 154 188 L 161 185 L 162 181 L 148 177 L 148 0 L 362 0 L 362 33",
            textLocation: {
                x: 220,
                y: 70,
            },
        },
        {
            title: 'Skagerrak',
            name: 'Ska.',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 241 209 L 246 210 L 266 201 L 270 193 L 275 203 L 277 218 L 276 224 L 282 236 L 279 240 L 279 243 L 275 242 L 269 243 L 266 240 L 267 234 L 266 221 L 263 223 L 248 224 L 241 224 L 241 209",
            textLocation: {
                x: 267,
                y: 207,
            },
        },
        {
            title: 'Tyrrhenian_Sea',
            name: 'Tyrrhenian\nSea',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 238 431 L 247 442 L 248 447 L 256 458 L 271 464 L 276 474 L 290 487 L 294 502 L 289 511 L 285 511 L 285 508 L 276 510 L 263 510 L 257 507 L 252 508 L 247 513 L 236 524 L 233 523 L 224 527 L 223 518 L 218 516 L 218 490 L 220 490 L 224 468 L 222 458 L 218 458 L 218 454 L 223 450 L 225 444 L 225 436 L 224 431 L 238 431",
            textLocation: {
                x: 255,
                y: 475,
            },
        },
        {
            title: 'Western_Mediterranean',
            name: 'Western Mediterranean',
            tileType: 'seaTile',
            id: 'w',
            tags: ['sea'],
            path: "M 37 490 L 47 488 L 52 489 L 60 486 L 78 491 L 83 494 L 86 485 L 90 483 L 98 484 L 107 474 L 113 473 L 115 469 L 142 469 L 150 471 L 154 466 L 205 466 L 206 476 L 204 485 L 208 492 L 212 492 L 217 489 L 218 490 L 218 516 L 212 517 L 208 521 L 203 520 L 179 515 L 169 518 L 150 511 L 117 509 L 106 511 L 99 515 L 89 512 L 84 518 L 79 520 L 68 516 L 68 511 L 64 514 L 46 509 L 42 502 L 41 494 L 37 495 L 37 490",
            textLocation: {
                x: 150,
                y: 485,
            },
        },
        //  Neutral Territories
        {
            title: 'Switzerland',
            name: '',
            tileType: 'landTile',
            id: 's',
            tags: ['neutral'],
            path: "M 209 363 L 208 367 L 194 382 L 197 385 L 203 379 L 207 386 L 213 387 L 221 385 L 227 390 L 229 385 L 243 388 L 245 384 L 241 378 L 234 374 L 234 366 L 232 363 L 225 362 L 222 365 L 209 363",
            textLocation: {
                x: 215,
                y: 378,
            },
        },
        {
            title: 'Ireland',
            name: '',
            tileType: 'landTile',
            id: 's',
            tags: ['neutral'],
            path: "M 70 261 L 64 250 L 67 242 L 71 245 L 81 234 L 74 228 L 80 225 L 78 218 L 82 217 L 89 220 L 94 220 L 95 218 L 94 216 L 97 216 L 101 212 L 110 212 L 119 217 L 120 227 L 120 227 L 110 232 L 109 246 L 98 259 L 87 257 L 70 261",
            textLocation: {
                x: 215,
                y: 378,
            },
        },
        {
            title: 'Corsica',
            name: '',
            tileType: 'landTile',
            id: 's',
            tags: ['neutral'],
            path: "",
            textLocation: {
                x: 215,
                y: 378,
            },
        },
        {
            title: 'Sardinia',
            name: '',
            tileType: 'landTile',
            id: 's',
            tags: ['neutral'],
            path: "",
            textLocation: {
                x: 215,
                y: 378,
            },
        },
        {
            title: 'Mallorca',
            name: '',
            tileType: 'landTile',
            id: 's',
            tags: ['neutral'],
            path: "M 154 466 L 148 463 L 142 469 L 150 471 L 154 466",
            textLocation: {
                x: 215,
                y: 378,
            },
        },
        {
            title: 'Sicily',
            name: '',
            tileType: 'landTile',
            id: 's',
            tags: ['neutral'],
            path: "",
            textLocation: {
                x: 215,
                y: 378,
            },
        },
        {
            title: 'Crete',
            name: '',
            tileType: 'landTile',
            id: 's',
            tags: ['neutral'],
            path: "",
            textLocation: {
                x: 215,
                y: 378,
            },
        },
        //  Land Territories
        {
            title: 'Albania',
            name: 'Alb.',
            tileType: 'landTile',
            id: 'l Albania',
            tags: ['coastal'],
            path: "M 331 454 L 331 477 L 335 480 L 339 487 L 350 477 L 350 471 L 346 466 L 346 452 L 337 446 L 330 445 L 331 454",
            textLocation: {
                x: 345,
                y: 461,
            },
        },
        {
            title: 'Ankara',
            name: 'Ankara',
            tileType: 'landTile',
            id: 'l Ankara',
            tags: ['coastal', 'supply'],
            path: "M 555 438 L 551 437 L 520 441 L 514 438 L 511 440 L 502 433 L 481 438 L 470 447 L 464 457 L 468 461 L 468 479 L 466 491 L 473 491 L 490 480 L 501 482 L 508 480 L 531 460 L 546 462 L 555 460 L 557 449 L 555 438",
            textLocation: {
                x: 505,
                y: 450,
            },
        },
        {
            title: 'Apulia',
            name: 'Apulia',
            tileType: 'landTile',
            id: 'l Apulia',
            tags: ['coastal'],
            path: "M 304 484 L 310 480 L 318 485 L 322 485 L 322 480 L 297 456 L 300 453 L 290 453 L 278 443 L 274 447 L 279 451 L 280 455 L 279 458 L 293 481 L 304 484",
            textLocation: {
                x: 305,
                y: 465,
                rotate: 48,
            },
        },
        {
            title: 'Armenia',
            name: 'Armenia',
            tileType: 'landTile',
            id: 'l Armenia',
            tags: ['coastal'],
            path: "M 609 493 L 584 478 L 563 479 L 562 471 L 556 467 L 555 460 L 557 449 L 555 438 L 570 427 L 589 442 L 594 439 L 603 441 L 609 440 L 609 493",
            textLocation: {
                x: 587,
                y: 453,
            },
        },
        {
            title: 'Belgium',
            name: 'Bel.',
            tileType: 'landTile',
            id: 'l Belgium',
            tags: ['coastal', 'supply'],
            path: "M 191 299 L 194 303 L 206 306 L 205 311 L 208 315 L 210 326 L 205 331 L 192 323 L 184 315 L 169 311 L 173 301 L 191 299",
            textLocation: {
                x: 197,
                y: 303,
            },
        },
        {
            title: 'Berlin',
            name: 'Berlin',
            tileType: 'landTile',
            id: 'l Berlin',
            tags: ['coastal', 'supply'],
            path: "M 294 275 L 286 274 L 287 267 L 280 266 L 266 275 L 266 283 L 262 287 L 264 293 L 261 296 L 263 310 L 288 305 L 296 300 L 297 296 L 292 290 L 294 275",
            textLocation: {
                x: 279,
                y: 284,
            },
        },
        {
            title: 'Bohemia',
            name: 'Bohemia',
            tileType: 'landTile',
            id: 'l Bohemia',
            tags: ['landlocked'],
            path: "M 281 356 L 276 346 L 268 343 L 264 329 L 266 325 L 278 326 L 288 321 L 297 322 L 311 334 L 314 332 L 321 339 L 322 347 L 316 348 L 303 346 L 295 349 L 292 357 L 281 356",
            textLocation: {
                x: 298,
                y: 331,
            },
        },
        {
            title: 'Brest',
            name: 'Brest',
            tileType: 'landTile',
            id: 'l Brest',
            tags: ['coastal', 'supply'],
            path: "M 150 319 L 144 318 L 142 312 L 136 310 L 136 326 L 124 323 L 122 318 L 102 317 L 100 322 L 103 328 L 109 329 L 123 344 L 122 350 L 123 357 L 128 363 L 146 365 L 146 337 L 148 329 L 150 319",
            textLocation: {
                x: 135,
                y: 330,
            },
        },
        {
            title: 'Budapest',
            name: 'Budapest',
            tileType: 'landTile',
            id: 'l Budapest',
            tags: ['landlocked', 'supply'],
            path: "M 394 376 L 395 382 L 401 385 L 406 396 L 401 402 L 387 402 L 367 406 L 365 412 L 360 413 L 342 410 L 338 412 L 335 410 L 332 410 L 323 408 L 321 398 L 311 394 L 308 383 L 311 375 L 322 370 L 335 354 L 337 350 L 350 347 L 360 351 L 368 353 L 377 360 L 378 363 L 384 365 L 394 376",
            textLocation: {
                x: 360,
                y: 375,
            },
        },
        // ! NEEDS IMPLEMENTED PROPERLY
        {
            title: 'Bulgaria',
            name: 'Bulgaria',
            tileType: 'landTile',
            tags: ['coastal', 'supply', 'dual'],
            id: 'l',
            // ? Have this territory have the full path?
            path: "",
            textLocation: {
                x: 400,
                y: 438,
            },
        },
        {
            title: 'Bulgaria__ec',
            name: 'Bulgaria',
            tileType: 'landTile',
            tags: ['coast'],
            id: 'l',
            path: "M 413 464 L 412 454 L 420 451 L 426 450 L 422 441 L 425 427 L 429 426 L 430 423 L 422 420 L 410 420 L 404 422 L 398 427 L 390 425 L 382 427 L 375 423 L 370 425 L 367 421 L 365 425 L 368 433 L 371 438 ",
            textLocation: {
                x: 400,
                y: 438,
            },
        },
        {
            title: 'Bulgaria__sc',
            name: '',
            tileType: 'landTile',
            tags: ['coast'],
            id: 'l',
            path: "M 371 438 L 366 439 L 371 456 L 365 461 L 369 464 L 376 464 L 388 460 L 392 472 L 400 468 L 408 470 L 413 464",
        },
        {
            title: 'Burgundy',
            name: 'Burgundy',
            tileType: 'landTile',
            id: 'l Burgundy',
            tags: ['landlocked'],
            path: "M 192 323 L 205 331 L 204 338 L 211 346 L 213 352 L 209 363 L 208 367 L 194 382 L 178 381 L 178 390 L 173 396 L 168 395 L 163 387 L 165 383 L 158 380 L 156 374 L 165 365 L 185 344 L 188 332 L 192 323",
            textLocation: {
                x: 186,
                y: 352,
                rotate: -50
            },
        },
        {
            title: 'Clyde',
            name: 'Clyde',
            tileType: 'landTile',
            id: 'l Clyde',
            tags: ['coastal'],
            path: "M 138 214 L 130 208 L 129 197 L 139 189 L 140 182 L 148 177 L 162 181 L 161 185 L 154 188 L 152 194 L 146 200 L 144 213 L 138 214",
            textLocation: {
                x: 137,
                y: 194,
            },
        },
        {
            title: 'Constantinople',
            name: 'Constantinople',
            tileType: 'landTile',
            id: 'l Constantinople',
            tags: ['coastal', 'passage', 'supply'],
            path: "M 408 470 L 410 473 L 414 475 L 410 482 L 409 487 L 417 486 L 417 489 L 423 487 L 432 493 L 452 495 L 466 491 L 468 479 L 468 461 L 464 457 L 442 460 L 440 458 L 430 455 L 426 450 L 420 451 L 412 454 L 413 464 L 408 470",
            // <polygon class="w" points="L 414 475 L 421 467 L 435 463 L 440 458 L 442 460 L 439 463 L 448 464 L 425 475"/>
            textLocation: {
                x: 444,
                y: 468,
                rotate: -28,
            },
        },
        {
            title: 'Denmark',
            name: 'Den.',
            tileType: 'landTile',
            id: 'l Denmark',
            tags: ['coastal', 'passage', 'supply'],
            path: "M 279 243 L 275 242 L 269 243 L 266 240 L 267 234 L 266 221 L 263 223 L 248 224 L 245 237 L 243 247 L 244 254 L 254 255 L 266 255 L 271 260 L 278 254 L 277 250 L 280 248  L 279 243",
            // <polygon class="w" points="L 269 243 L 268 246 L 263 247 L 266 255 L 254 255 L 257 247 L 266 240"/>
            textLocation: {
                x: 259,
                y: 235,
            },
        },
        // {
        //   title: 'Denmark__w',
        //   name: '',
        //   tileType: 'waterTile',
        //   id: 'w Denmark',
        //   path: `M 269 243 L 268 246 L 263 247 L 266 255 L 254 255 L 257 247 L 266 240 L 269 243`,
        //   textLocation: {
        //     x: 252,
        //     y: 235,
        //   },
        // },
        {
            title: 'Edinburgh',
            name: 'Edb.',
            tileType: 'landTile',
            id: 'l Edinburgh',
            tags: ['coastal', 'supply'],
            path: "M 152 194 L 158 193 L 171 197  170 202 L 165 210 L 158 214 L 151 215 L 157 216 L 161 218 L 163 226 L 155 228 L 145 217 L 144 213 L 146 200 L 152 194",
            textLocation: {
                x: 163,
                y: 198,
            },
        },
        {
            title: 'Finland',
            name: 'Finland',
            tileType: 'landTile',
            id: 'l Finland',
            tags: ['coastal'],
            path: "M 362 107 L 368 108 L 372 120 L 366 121 L 359 136 L 345 151 L 347 160 L 350 165 L 348 178 L 349 184 L 357 186 L 365 191 L 384 185 L 402 177 L 412 161 L 410 152 L 414 147 L 410 130 L 402 118 L 401 110 L 392 92 L 393 73 L 387 68 L 388 61 L 386 58 L 388 54 L 379 48 L 370 49 L 369 61 L 355 62 L 346 54 L 342 61 L 356 71 L 362 107",
            textLocation: {
                x: 385,
                y: 135,
            },
        },
        {
            title: 'Galicia',
            name: 'Galicia',
            tileType: 'landTile',
            id: 'l Galicia',
            tags: ['landlocked'],
            path: "M 333 330 L 341 330 L 344 332 L 353 327 L 356 323 L 361 324 L 367 329 L 374 327 L 379 324 L 383 327 L 385 332 L 399 338 L 404 354 L 403 360 L 404 371 L 394 376 L 384 365 L 378 363 L 377 360 L 368 353 L 360 351 L 350 347 L 337 350 L 329 346 L 322 347 L 321 339 L 322 347 L 321 339 L 325 340 L 329 338 L 333 330",
            textLocation: {
                x: 375,
                y: 338,
                rotate: 20,
            },
        },
        {
            title: 'Gascony',
            name: 'Gascony',
            tileType: 'landTile',
            id: 'l Gascony',
            tags: ['coastal'],
            path: "M 128 363 L 121 382 L 122 384 L 112 399 L 113 407 L 123 412 L 134 417 L 135 414 L 142 417 L 149 403 L 157 397 L 168 395 L 163 387 L 165 383 L 158 380 L 156 374 L 149 372 L 146 365 L 128 363",
            textLocation: {
                x: 144,
                y: 383,
            },
        },
        {
            title: 'Greece',
            name: 'Greece',
            tileType: 'landTile',
            id: 'l Greece',
            tags: ['coastal', 'supply'],
            path: "M 339 487 L 346 498 L 350 498 L 347 500 L 352 508 L 367 507 L 371 511 L 355 510 L 350 514 L 357 521 L 359 533 L 360 528 L 367 536 L 368 531 L 376 537 L 371 520 L 378 521 L 377 513 L 386 516 L 385 509 L 370 494 L 371 491 L 378 494 L 368 483 L 371 477 L 379 484 L 382 483 L 381 477 L 386 478 L 380 472 L 392 472 L 388 460 L 376 464 L 369 464 L 361 467 L 356 471 L 350 471 L 350 477 L 339 487",
            textLocation: {
                x: 361,
                y: 481,
            },
        },
        {
            title: 'Holland',
            name: 'Hol.',
            tileType: 'landTile',
            id: 'l Holland',
            tags: ['coastal', 'supply'],
            path: "M 226 275 L 227 280 L 225 292 L 220 298 L 215 297 L 213 302 L 210 313 L 208 315 L 205 311 L 206 306 L 194 303 L 191 299 L 198 289 L 205 276 L 205 279 L 207 279 L 211 274 L 226 275",
            textLocation: {
                x: 215,
                y: 285,
            },
        },
        {
            title: 'Kiel',
            name: 'Kiel',
            tileType: 'landTile',
            id: 'l Kiel',
            tags: ['coastal', 'passage', 'supply'],
            path: "M 244 254 L 243 257 L 245 263 L 244 270 L 244 273 L 235 277 L 234 274 L 230 273 L 226 275 L 227 280 L 225 292 L 220 298 L 215 297 L 213 302 L 232 308 L 241 316 L 243 322 L 263 310 L 261 296 L 264 293 L 262 287 L 266 283 L 266 275 L 261 274 L 260 269 L 256 266 L 256 263 L 254 255 L 244 254",
            // <polygon class="w" points="L 244 270 L 244 273 L 256 266 L 256 263 "/>
            textLocation: {
                x: 247,
                y: 283,
            },
        },
        {
            title: 'Liverpool',
            name: 'Lvp.',
            tileType: 'landTile',
            id: 'l Liverpool',
            tags: ['coastal', 'supply'],
            path: "M 128 262 L 126 256 L 121 257 L 132 250 L 135 250 L 139 240 L 136 229 L 130 227 L 130 223 L 138 217 L 138 214 L 144 213 L 145 217 L 155 228 L 155 239 L 151 248 L 150 264 L 143 262 L 128 262",
            textLocation: {
                x: 143,
                y: 230,
            },
        },
        {
            title: 'Livonia',
            name: 'Livonia',
            tileType: 'landTile',
            id: 'l Livonia',
            tags: ['coastal'],
            path: "M 369 202 L 365 204 L 368 210 L 372 213 L 373 221 L 377 227 L 373 229 L 366 228 L 359 220 L 349 229 L 347 243 L 354 251 L 356 261 L 362 260 L 367 265 L 365 281 L 372 283 L 379 290 L 389 285 L 392 278 L 404 275 L 405 239 L 409 228 L 405 217 L 394 205 L 382 206 L 372 205 L 369 202",
            textLocation: {
                x: 385,
                y: 240,
            },
        },
        {
            title: 'London',
            name: 'London',
            tileType: 'landTile',
            id: 'l London',
            tags: ['coastal', 'supply'],
            path: "M 166 269 L 168 270 L 171 268 L 177 270 L 178 274 L 176 283 L 165 293 L 172 294 L 168 296 L 160 298 L 147 295 L 145 281 L 150 277 L 153 271 L 166 269",
            textLocation: {
                x: 170,
                y: 275,
            },
        },
        {
            title: 'Marseilles',
            name: 'Marseilles',
            tileType: 'landTile',
            id: 'l Marseilles',
            tags: ['coastal', 'supply'],
            path: "M 142 417 L 149 403 L 157 397 L 168 395 L 173 396 L 178 390 L 178 381 L 194 382 L 197 385 L 203 379 L 207 386 L 204 390 L 207 396 L 201 399 L 204 402 L 203 410 L 211 416 L 198 421 L 188 422 L 176 417 L 169 412 L 158 418 L 158 425 L 154 427 L 142 417",
            textLocation: {
                x: 181,
                y: 397,
            },
        },
        {
            title: 'Moscow',
            name: 'Moscow',
            tileType: 'landTile',
            id: 'l Moscow',
            tags: ['landlocked', 'supply'],
            path: "M 609 117 L 598 132 L 573 143 L 564 159 L 534 164 L 515 169 L 489 184 L 476 183 L 458 194 L 456 207 L 457 210 L 451 213 L 447 209 L 439 211 L 428 225 L 421 229 L 409 228 L 405 239 L 404 275 L 392 278 L 389 285 L 379 290 L 386 309 L 390 306 L 456 292 L 468 295 L 477 289 L 494 295 L 505 280 L 516 286 L 526 287 L 533 283 L 549 284 L 554 304 L 564 305 L 569 321 L 597 330 L 609 330 L 609 117",
            textLocation: {
                x: 460,
                y: 245,
            },
        },
        {
            title: 'Munich',
            name: 'Munich',
            tileType: 'landTile',
            id: 'l Munich',
            tags: ['landlocked', 'supply'],
            path: "M 234 366 L 243 370 L 246 369 L 250 371 L 267 368 L 271 370 L 269 362 L 275 362 L 281 356 L 276 346 L 268 343 L 264 329 L 266 325 L 278 326 L 288 321 L 284 314 L 288 305 L 263 310 L 243 322 L 237 322 L 219 344 L 211 346 L 213 352 L 209 363 L 222 365 L 225 362 L 232 363 L 234 366",
            textLocation: {
                x: 250,
                y: 337,
            },
        },
        {
            title: 'Naples',
            name: 'Naples',
            tileType: 'landTile',
            id: 'l Naples',
            tags: ['coastal', 'supply'],
            path: "M 271 464 L 276 474 L 290 487 L 294 502 L 289 511 L 290 514 L 295 515 L 308 500 L 311 491 L 304 484 L 293 481 L 279 458 L 271 464",
            textLocation: {
                x: 296,
                y: 496,
            },
        },
        {
            title: 'North_Africa',
            name: 'North Africa',
            tileType: 'landTile',
            id: 'l North_Africa',
            tags: ['coastal'],
            path: "M 203 520 L 179 515 L 169 518 L 150 511 L 117 509 L 106 511 L 99 515 L 89 512 L 84 518 L 79 520 L 68 516 L 68 511 L 64 514 L 46 509 L 42 502 L 41 494 L 37 495 L 33 496 L 17 518 L 0 520 L 0 559 L 195 559 L 197 527 L 203 520",
            textLocation: {
                x: 105,
                y: 530,
            },
        },
        {
            title: 'Norway',
            name: 'Norway',
            tileType: 'landTile',
            id: 'l Norway',
            tags: ['coastal', 'supply'],
            path: "M 397 48 L 391 47 L 395 41 L 394 38 L 384 33 L 382 40 L 380 33 L 377 31 L 374 38 L 371 33 L 366 42 L 366 33 L 362 33 L 357 39 L 343 44 L 324 54 L 320 64 L 310 75 L 309 84 L 303 86 L 292 111 L 277 132 L 269 134 L 264 142 L 258 141 L 236 154 L 237 160 L 233 167 L 231 180 L 233 186 L 229 192 L 231 201 L 241 209 L 246 210 L 266 201 L 270 193 L 275 203 L 279 204 L 287 177 L 285 170 L 290 164 L 292 133 L 301 132 L 300 126 L 309 115 L 308 104 L 311 101 L 324 71 L 332 74 L 330 64 L 341 65 L 342 61 L 346 54 L 355 62 L 369 61 L 370 49 L 379 48 L 388 54 L 386 58 L 388 61 L 397 48",
            textLocation: {
                x: 265,
                y: 163,
            },
        },
        {
            title: 'Paris',
            name: 'Paris',
            tileType: 'landTile',
            id: 'l Paris',
            tags: ['landlocked', 'supply'],
            path: "M 146 365 L 149 372 L 156 374 L 165 365 L 185 344 L 188 332 L 172 328 L 165 331 L 159 331 L 148 329 L 146 337 L 146 365",
            textLocation: {
                x: 165,
                y: 341,
            },
        },
        {
            title: 'Picardy',
            name: 'Pic.',
            tileType: 'landTile',
            id: 'l Picardy',
            tags: ['coastal'],
            path: "M 169 311 L 153 315 L 155 320 L 150 319 L 148 329 L 159 331 L 165 331 L 172 328 L 188 332 L 192 323 L 184 315 L 169 311",
            textLocation: {
                x: 177,
                y: 314,
            },
        },
        {
            title: 'Piedmont',
            name: 'Pied.',
            tileType: 'landTile',
            id: 'l Piedmont',
            tags: ['coastal'],
            path: "M 207 386 L 204 390 L 207 396 L 201 399 L 204 402 L 203 410 L 211 416 L 222 410 L 233 415 L 236 411 L 233 404 L 246 392 L 243 388 L 229 385 L 227 390 L 221 385 L 213 387 L 207 386",
            textLocation: {
                x: 224,
                y: 393,
            },
        },
        {
            title: 'Portugal',
            name: 'Portugal',
            tileType: 'landTile',
            id: 'l Portugal',
            tags: ['coastal', 'supply'],
            path: "M 32 396 L 30 406 L 17 427 L 14 427 L 10 433 L 13 440 L 15 441 L 12 450 L 13 454 L 8 462 L 19 469 L 27 468 L 36 457 L 34 447 L 40 441 L 37 431 L 42 432 L 52 412 L 61 411 L 62 407 L 55 400 L 42 399 L 43 395 L 32 396",
            textLocation: {
                x: 25,
                y: 420,
                rotate: -63,
            },
        },
        {
            title: 'Prussia',
            name: 'Prussia',
            tileType: 'landTile',
            id: 'l Prussia',
            tags: ['coastal'],
            path: "M 347 243 L 347 248 L 348 254 L 344 262 L 337 264 L 334 273 L 328 274 L 326 265 L 314 266 L 307 273 L 294 275 L 292 290 L 297 296 L 296 300 L 320 303 L 324 299 L 326 292 L 341 287 L 345 289 L 359 286 L 365 281 L 367 265 L 362 260 L 356 261 L 354 251 L 347 243",
            textLocation: {
                x: 330,
                y: 275,
            },
        },
        {
            title: 'Rome',
            name: 'Rome',
            tileType: 'landTile',
            id: 'l Rome',
            tags: ['coastal', 'supply'],
            path: "M 247 442 L 248 447 L 256 458 L 271 464 L 279 458 L 280 455 L 279 451 L 274 447 L 263 434 L 250 438 L 247 442",
            textLocation: {
                x: 257,
                y: 444,
            },
        },
        {
            title: 'Ruhr',
            name: 'Ruhr',
            tileType: 'landTile',
            id: 'l Ruhr',
            tags: ['landlocked'],
            path: "M 213 302 L 210 313 L 208 315 L 210 326 L 205 331 L 204 338 L 211 346 L 219 344 L 237 322 L 243 322 L 241 316 L 232 308 L 213 302",
            textLocation: {
                x: 221,
                y: 319,
            },
        },
        {
            title: 'Rumania',
            name: 'Rumania',
            tileType: 'landTile',
            id: 'l Rumania',
            tags: ['coastal', 'supply'],
            path: "M 403 360 L 404 371 L 394 376 L 395 382 L 401 385 L 406 396 L 401 402 L 387 402 L 367 406 L 365 412 L 367 421 L 370 425 L 375 423 L 382 427 L 390 425 L 398 427 L 404 422 L 410 420 L 422 420 L 430 423 L 432 409 L 439 404 L 438 397 L 427 399 L 422 382 L 423 376 L 414 372 L 411 361 L 403 360",
            textLocation: {
                x: 390,
                y: 410,
            },
        },
        {
            title: 'Serbia',
            name: 'Serbia',
            tileType: 'landTile',
            id: 'l Serbia',
            tags: ['landlocked', 'supply'],
            path: "M 365 412 L 360 413 L 342 410 L 338 412 L 335 410 L 332 410 L 330 416 L 331 424 L 327 429 L 330 437 L 337 446 L 346 452 L 346 466 L 350 471 L 356 471 L 361 467 L 369 464 L 365 461 L 371 456 L 366 439 L 371 438 L 368 433 L 365 425 L 367 421 L 365 412",
            textLocation: {
                x: 349,
                y: 428,
            },
        },
        {
            title: 'Sevastopol',
            name: 'Sevastopol',
            tileType: 'landTile',
            id: 'l Sevastopol',
            tags: ['coastal', 'supply'],
            path: "M 438 397 L 446 378 L 459 375 L 461 377 L 459 379 L 465 383 L 476 381 L 478 383 L 472 385 L 468 392 L 477 396 L 477 401 L 486 404 L 488 397 L 494 396 L 497 392 L 507 389 L 506 384 L 494 387 L 485 378 L 503 364 L 526 351 L 527 354 L 514 365 L 517 371 L 520 371 L 515 384 L 511 383 L 510 386 L 517 393 L 528 394 L 554 406 L 567 408 L 573 417 L 570 427 L 589 442 L 594 439 L 603 441 L 609 440 L 609 330 L 597 330 L 569 321 L 564 305 L 554 304 L 549 284 L 533 283 L 526 287 L 516 286 L 505 280 L 494 295 L 477 289 L 468 295 L 470 303 L 466 307 L 460 345 L 445 350 L 434 360 L 432 372 L 423 376 L 422 382 L 427 399 L 438 397",
            textLocation: {
                x: 524,
                y: 338,
            },
        },
        {
            title: 'Silesia',
            name: 'Silesia',
            tileType: 'landTile',
            id: 'l Silesia',
            tags: ['landlocked'],
            path: "M 288 321 L 297 322 L 311 334 L 314 332 L 321 339 L 325 340 L 329 338 L 333 330 L 326 327 L 323 322 L 320 303 L 296 300 L 288 305 L 284 314 L 288 321",
            textLocation: {
                x: 307,
                y: 310,
            },
        },
        {
            title: 'Smyrna',
            name: 'Smyrna',
            tileType: 'landTile',
            id: 'l Smyrna',
            tags: ['coastal', 'supply'],
            path: "M 417 489 L 420 495 L 417 498 L 417 507 L 423 510 L 427 524 L 435 523 L 435 530 L 441 526 L 447 528 L 453 534 L 464 531 L 466 521 L 475 520 L 485 528 L 491 530 L 505 526 L 511 514 L 520 517 L 527 508 L 530 509 L 536 494 L 545 486 L 555 484 L 563 479 L 562 471 L 556 467 L 555 460 L 546 462 L 531 460 L 508 480 L 501 482 L 490 480 L 473 491 L 466 491 L 452 495 L 432 493 L 423 487 L 417 489",
            textLocation: {
                x: 460,
                y: 510,
            },
        },
        // ! SORT THIS OUT AS WELL
        {
            title: 'Spain',
            name: 'Spain',
            tileType: 'landTile',
            tags: ['coastal', 'supply', 'dual'],
            id: 'l',
            path: "",
        },
        {
            title: 'Spain__nc',
            name: 'Spain',
            tileType: 'landTile',
            tags: ['coast'],
            id: 'l',
            path: "M 134 417 L 123 412 L 113 407 L 112 399 L 101 396 L 96 397 L 72 384 L 59 381 L 54 375 L 48 374 L 46 378 L 39 375 L 33 381 L 35 384 L 32 396 L 43 395 L 42 399 L 55 400 L 62 407 L 61 411 L 52 412 L 42 432 L 37 431 L 40 441 L 134 417",
        },
        {
            title: 'Spain__sc',
            name: 'Spain',
            tileType: 'landTile',
            tags: ['coast'],
            id: 'l',
            path: "M 40 441 L 34 447 L 36 457 L 27 468 L 33 475 L 34 484 L 37 490 L 47 488 L 52 489 L 60 486 L 78 491 L 83 494 L 86 485 L 90 483 L 98 484 L 107 474 L 113 473 L 115 469 L 110 461 L 124 444 L 131 439 L 146 438 L 157 432 L 158 425 L 154 427 L 142 417 L 135 414 L 134 417 L 40 441",
            textLocation: {
                x: 85,
                y: 450,
            },
        },
        // Maybe combine nc & sc into one svg?
        {
            title: 'St_Petersburg',
            name: 'St Petersburg',
            tileType: 'landTile',
            id: 'l St_Petersburg',
            tags: ['coast', 'supply', 'dual'],
            path: "",
            textLocation: {
                x: 460,
                y: 149,
            },
        },
        {
            title: 'St_Petersburg__nc',
            name: '(nc)',
            tileType: 'landTile',
            id: 'l St_Petersburg',
            tags: ['coast'],
            path: "M 534 164 L 564 159 L 573 143 L 598 132 L 609 117 L 609 0 540 0 L 535 9 L 530 6 L 517 19 L 516 33 L 513 38 L 513 23 L 507 20 L 505 26 L 499 33 L 492 48 L 495 58 L 488 60 L 479 57 L 477 55 L 481 50 L 473 43 L 466 45 L 472 62 L 478 66 L 478 74 L 472 72 L 468 74 L 457 91 L 469 100 L 467 106 L 462 109 L 444 101 L 442 110 L 447 115 L 454 119 L 452 122 L 434 118 L 426 103 L 426 94 L 414 88 L 412 83 L 445 84 L 457 79 L 459 66 L 453 61 L 417 47 L 405 49 L 401 45 L 397 48 L 388 61 L 387 68 L 393 73 L 392 92 L 401 110 L 402 118 L 410 130 L 414 147 L 534 164",
            textLocation: {
                x: 475,
                y: 90,
            },
        },
        {
            title: 'St_Petersburg__sc',
            name: '(sc)',
            tileType: 'landTile',
            id: 'l St_Petersburg',
            tags: ['coast'],
            path: "M 414 147 L 410 152 L 412 161 L 402 177 L 403 183 L 411 184 L 414 187 L 408 187 L 400 192 L 399 197 L 387 196 L 371 198 L 369 202 L 372 205 L 382 206 L 394 205 L 405 217 L 409 228 L 421 229 L 428 225 L 439 211 L 447 209 L 451 213 L 457 210 L 456 207 L 458 194 L 476 183 L 489 184 L 515 169 L 534 164 L 414 147",
            textLocation: {
                x: 408,
                y: 200,
            },
        },
        {
            title: 'Sweden',
            name: 'Sweden',
            tileType: 'landTile',
            id: 'l Sweden',
            tags: ['coastal', 'supply'],
            path: "M 275 203 L 277 218 L 276 224 L 282 236 L 279 240 L 279 243 L 282 253 L 289 254 L 294 245 L 305 244 L 312 229 L 311 220 L 314 209 L 322 206 L 328 203 L 331 193 L 326 183 L 320 182 L 321 161 L 330 146 L 343 138 L 351 128 L 347 121 L 349 112 L 355 104 L 362 107 L 356 71 L 342 61 L 341 65 L 330 64 L 332 74 L 324 71 L 311 101 L 308 104 L 309 115 L 300 126 L 301 132 L 292 133 L 290 164 L 285 170 L 287 177 L 279 204 L 275 203",
            textLocation: {
                x: 305,
                y: 187,
            },
        },
        {
            title: 'Syria',
            name: 'Syria',
            tileType: 'landTile',
            id: 'l Syria',
            tags: ['coastal'],
            path: "M 530 509 L 536 494 L 545 486 L 555 484 L 563 479 L 584 478 L 609 493 L 609 559 L 528 559 L 532 535 L 526 530 L 525 518 L 530 509",
            textLocation: {
                x: 570,
                y: 535,
            },
        },
        {
            title: 'Trieste',
            name: 'Trieste',
            tileType: 'landTile',
            id: 'l Trieste',
            tags: ['coastal', 'supply'],
            path: "M 276 399 L 275 403 L 278 410 L 282 401 L 286 402 L 289 418 L 306 436 L 331 454 L 330 445 L 337 446 L 330 437 L 327 429 L 331 424 L 330 416 L 332 410 L 323 408 L 321 398 L 311 394 L 308 383 L 299 385 L 294 380 L 289 385 L 276 386 L 279 389 L 276 399",
            textLocation: {
                x: 307,
                y: 411,
            },
        },
        {
            title: 'Tunis',
            name: 'Tunis',
            tileType: 'landTile',
            id: 'l Tunis',
            tags: ['coastal', 'supply'],
            path: "M 232 559 L 234 551 L 232 544 L 225 535 L 231 531 L 236 524 L 233 523 L 224 527 L 223 518 L 218 516 L 212 517 L 208 521 L 203 520 L 197 527 L 195 559 L 232 559",
            textLocation: {
                x: 213,
                y: 534,
            },
        },
        {
            title: 'Tuscany',
            name: 'Tuscany',
            tileType: 'landTile',
            id: 'l Tuscany',
            tags: ['coastal'],
            path: "M 233 415 L 238 431 L 247 442 L 250 438 L 263 434 L 253 418 L 246 416 L 240 415 L 236 411 L 233 415",
            textLocation: {
                x: 240,
                y: 425,
            },
        },
        {
            title: 'Tyrolia',
            name: 'Tyrolia',
            tileType: 'landTile',
            id: 'l Tyrolia',
            tags: ['landlocked'],
            path: "M 234 366 L 243 370 L 246 369 L 250 371 L 267 368 L 271 370 L 269 362 L 275 362 L 281 356 L 292 357 L 295 362 L 294 380 L 289 385 L 276 386 L 268 385 L 259 388 L 255 394 L 250 397 L 246 392 L 243 388 L 245 384 L 241 378 L 234 374 L 234 366",
            textLocation: {
                x: 268,
                y: 373,
            },
        },
        {
            title: 'Ukraine',
            name: 'Ukraine',
            tileType: 'landTile',
            id: 'l Ukraine',
            tags: ['landlocked'],
            path: "M 383 327 L 385 332 L 399 338 L 404 354 L 403 360 L 411 361 L 414 372 L 423 376 L 432 372 L 434 360 L 445 350 L 460 345 L 466 307 L 470 303 L 468 295 L 456 292 L 390 306 L 386 309 L 383 327",
            textLocation: {
                x: 425,
                y: 327,
            },
        },
        {
            title: 'Venice',
            name: 'Venice',
            tileType: 'landTile',
            id: 'l Venice',
            tags: ['coastal', 'supply'],
            path: "M 278 443 L 272 424 L 260 417 L 261 401 L 270 398 L 276 399 L 279 389 L 276 386 L 268 385 L 259 388 L 255 394 L 250 397 L 246 392 L 233 404 L 236 411 L 240 415 L 246 416 L 253 418 L 263 434 L 274 447 L 278 443",
            textLocation: {
                x: 250,
                y: 404,
            },
        },
        {
            title: 'Vienna',
            name: 'Vienna',
            tileType: 'landTile',
            id: 'l Vienna',
            tags: ['landlocked', 'supply'],
            path: "M 292 357 L 295 349 L 303 346 L 316 348 L 322 347 L 329 346 L 337 350 L 335 354 L 322 370 L 311 375 L 308 383 L 299 385 L 294 380 L 295 362 L 292 357",
            textLocation: {
                x: 311,
                y: 356,
            },
        },
        {
            title: 'Wales',
            name: 'Wales',
            tileType: 'landTile',
            id: 'l Wales',
            tags: ['coastal'],
            path: "M 100 291 L 112 287 L 122 281 L 130 282 L 127 276 L 119 272 L 116 272 L 115 265 L 128 262 L 143 262 L 150 264 L 153 271 L 150 277 L 145 281 L 147 295 L 134 294 L 124 291 L 120 295 L 110 292 L 100 291",
            textLocation: {
                x: 130,
                y: 275,
            },
        },
        {
            title: 'Warsaw',
            name: 'Warsaw',
            tileType: 'landTile',
            id: 'l Warsaw',
            tags: ['landlocked', 'supply'],
            path: "M 333 330 L 326 327 L 323 322 L 320 303 L 324 299 L 326 292 L 341 287 L 345 289 L 359 286 L 365 281 L 372 283 L 379 290 L 386 309 L 383 327 L 379 324 L 374 327 L 367 329 L 361 324 L 356 323 L 353 327 L 344 332 L 341 330 L 333 330",
            textLocation: {
                x: 354,
                y: 305,
            },
        },
        {
            title: 'Yorkshire',
            name: 'Yorkshire',
            tileType: 'landTile',
            id: 'l Yorkshire',
            tags: ['coastal'],
            path: "M 163 226 L 163 239 L 168 246 L 170 252 L 169 265 L 166 269 L 153 271 L 150 264 L 151 248 L 155 239 L 155 228 L 163 226",
            textLocation: {
                x: 160,
                y: 248,
            },
        },
    ],
};
/* harmony default export */ __webpack_exports__["default"] = (countryData);


/***/ }),

/***/ "./src/client/devTools/setupGame.ts":
/*!******************************************!*\
  !*** ./src/client/devTools/setupGame.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! await-to-js */ "./node_modules/await-to-js/dist/await-to-js.es5.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.range */ "./node_modules/lodash.range/index.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.shuffle */ "./node_modules/lodash.shuffle/index.js");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var setupNewFullGame = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, err, res, game, numbers, devIDs, prodIDs, IDs;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('Creating a new game...');
                return [4 /*yield*/, Object(await_to_js__WEBPACK_IMPORTED_MODULE_0__["default"])(axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/game'))];
            case 1:
                _a = _b.sent(), err = _a[0], res = _a[1];
                if (err)
                    return [2 /*return*/, Promise.reject(err)];
                game = res.data;
                numbers = lodash_shuffle__WEBPACK_IMPORTED_MODULE_3___default()(lodash_range__WEBPACK_IMPORTED_MODULE_2___default()(1, 25)).map(function (x) { return x.toString().padStart(2, '0'); });
                devIDs = ['5cd85783c26513e12f695ce2', '5cd8988c463115ffdbc672b3', '5ce28c5b63ca37c488983f92', '5ce28c7563ca37c488983f93', '5ce28c9663ca37c488983f94', '5ce28cbd63ca37c488983f95', '5ce28cd263ca37c488983f96'];
                prodIDs = ['5e8a6040505fed0021be01eb', '5e8ad95766a29400215ebe2d', '5e8b206400462a0021d55454', '5e8b207600462a0021d55455', '5e8b208d00462a0021d55456', '5e8b20ab00462a0021d55457', '5e8b20ea00462a0021d55458'];
                IDs =  false ? undefined : devIDs;
                return [4 /*yield*/, Promise.all([
                        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/game/join', { gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop() }),
                        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/game/join', { gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop() }),
                        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/game/join', { gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop() }),
                        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/game/join', { gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop() }),
                        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/game/join', { gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop() }),
                        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/game/join', { gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop() }),
                        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/game/join', { gameID: game.id, playerID: IDs.pop(), colour: 'e' + numbers.pop() }),
                    ])];
            case 2:
                _b.sent();
                return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/game/" + game.id + "/start")];
            case 3:
                _b.sent();
                return [2 /*return*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/game/" + game.id)];
        }
    });
}); };
/* harmony default export */ __webpack_exports__["default"] = (setupNewFullGame);


/***/ }),

/***/ "./src/client/utils/scrollToElement.ts":
/*!*********************************************!*\
  !*** ./src/client/utils/scrollToElement.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_0__);

function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
function scrollToElementById(id) {
    var element = document.getElementById(id);
    var offset = getOffset(element);
    react_scroll__WEBPACK_IMPORTED_MODULE_0__["animateScroll"].scrollTo(offset.top);
}
/* harmony default export */ __webpack_exports__["default"] = (scrollToElementById);


/***/ }),

/***/ "./src/shared/types/enums/OrderType.ts":
/*!*********************************************!*\
  !*** ./src/shared/types/enums/OrderType.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var OrderType = {
    BUILD: 'Build',
    MOVE: 'Move',
    MOVEVIACONVOY: 'MoveViaConvoy',
    HOLD: 'Hold',
    CONVOY: 'Convoy',
    SUPPORT: 'Support',
    DISBAND: 'Disband',
};
/* harmony default export */ __webpack_exports__["default"] = (OrderType);


/***/ }),

/***/ "./src/shared/types/enums/UnitType.ts":
/*!********************************************!*\
  !*** ./src/shared/types/enums/UnitType.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UnitType = {
    FLEET: 'Fleet',
    ARMY: 'Army',
};
/* harmony default export */ __webpack_exports__["default"] = (UnitType);


/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map