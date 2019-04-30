"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var game_1 = __importDefault(require("./controller/game"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
mongoose_1["default"].connect('mongodb://localhost/diplomacy');
var isDev = process.env.NODE_ENV !== 'production';
var app = express_1["default"]();
var HTML_FILE = isDev ? path_1["default"].join(__dirname, '../../dist/client/index.html') : path_1["default"].join(__dirname, 'client/index.html');
// Configure bodyparser to handle post requests
app.use(body_parser_1["default"].urlencoded({
    extended: true
}));
app.use(body_parser_1["default"].json());
// Serve up static files
app.use(express_1["default"].static(path_1["default"].join(__dirname, isDev ? '../../dist/client' : '/client')));
app.get('/', function (req, res) {
    res.sendFile(HTML_FILE);
    console.log('hey!');
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening to " + PORT + "...");
    console.log('Press Ctrl+C to quit.');
});
app.use('/game', game_1["default"]);
exports["default"] = app;
