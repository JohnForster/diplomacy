(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/client/app/components/formBox/formBox.tsx":
/*!*******************************************************!*\
  !*** ./src/client/app/components/formBox/formBox.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/client/app/components/formBox/styled.ts");


var FormBox = function (_a) {
    var children = _a.children;
    return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_styled__WEBPACK_IMPORTED_MODULE_1__["FormBox"], null, children));
};
/* harmony default export */ __webpack_exports__["default"] = (FormBox);


/***/ }),

/***/ "./src/client/app/components/formBox/styled.ts":
/*!*****************************************************!*\
  !*** ./src/client/app/components/formBox/styled.ts ***!
  \*****************************************************/
/*! exports provided: FormBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBox", function() { return FormBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables/colors */ "./src/client/app/variables/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var FormBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @import url('https://fonts.googleapis.com/css?family=Notable|Arvo&display=swap');\n\n  font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  text-align: center;\n  font-size: 16px;\n  border-radius: 20px;\n  padding: 24px;\n  background-color: ", ";\n  color: ", ";\n  letter-spacing:2px;\n  box-shadow: 5px 5px 0px ", ";\n  margin: auto;\n\n  input[type=submit] {\n    width: 50%;\n    font-size: 12px;\n    font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    letter-spacing: 1px;\n  }\n\n  a {\n    color: ", ";\n  }\n"], ["\n  @import url('https://fonts.googleapis.com/css?family=Notable|Arvo&display=swap');\n\n  font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  text-align: center;\n  font-size: 16px;\n  border-radius: 20px;\n  padding: 24px;\n  background-color: ", ";\n  color: ", ";\n  letter-spacing:2px;\n  box-shadow: 5px 5px 0px ", ";\n  margin: auto;\n\n  input[type=submit] {\n    width: 50%;\n    font-size: 12px;\n    font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    letter-spacing: 1px;\n  }\n\n  a {\n    color: ", ";\n  }\n"])), _variables_colors__WEBPACK_IMPORTED_MODULE_1__["default"].highlight, _variables_colors__WEBPACK_IMPORTED_MODULE_1__["default"].offwhite, _variables_colors__WEBPACK_IMPORTED_MODULE_1__["default"].shadow, _variables_colors__WEBPACK_IMPORTED_MODULE_1__["default"].offwhite);
var templateObject_1;


/***/ }),

/***/ "./src/client/app/pages/register/register.tsx":
/*!****************************************************!*\
  !*** ./src/client/app/pages/register/register.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! await-to-js */ "./node_modules/await-to-js/dist/await-to-js.es5.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.clone */ "./node_modules/lodash.clone/index.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.es.js");
/* harmony import */ var _components_formBox_formBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/formBox/formBox */ "./src/client/app/components/formBox/formBox.tsx");
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






var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            formFields: {},
        };
        _this.handleSubmit = function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var _a, err, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        evt.preventDefault();
                        return [4 /*yield*/, Object(await_to_js__WEBPACK_IMPORTED_MODULE_0__["default"])(axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/user/register', this.state.formFields))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            console.log(err);
                        if (res)
                            Object(preact_router__WEBPACK_IMPORTED_MODULE_4__["route"])('/', true);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleChange = function (field) {
            return function (evt) {
                var formFields = lodash_clone__WEBPACK_IMPORTED_MODULE_2___default()(_this.state.formFields);
                formFields[field] = evt.target.value;
                _this.setState({ formFields: formFields });
            };
        };
        return _this;
    }
    Register.prototype.render = function (props, state) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])(preact__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null,
            Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])(_components_formBox_formBox__WEBPACK_IMPORTED_MODULE_5__["default"], null,
                Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("form", { action: '/user/register', method: 'post', onSubmit: this.handleSubmit },
                    "Username:",
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("br", null),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("input", { type: 'text', name: 'username', value: state.formFields.username, onChange: this.handleChange('username') }),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("br", null),
                    "Name:",
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("br", null),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("input", { type: 'text', name: 'name', value: state.formFields.name, onChange: this.handleChange('name') }),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("br", null),
                    "Email:",
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("br", null),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("input", { type: 'text', name: 'email', value: state.formFields.email, onChange: this.handleChange('email') }),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("br", null),
                    "Password:",
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("br", null),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("input", { type: 'password', name: 'password', value: state.formFields.password, onChange: this.handleChange('password') }),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("br", null),
                    Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("input", { type: 'submit', value: 'Submit' })))));
    };
    return Register;
}(preact__WEBPACK_IMPORTED_MODULE_3__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Register);


/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map