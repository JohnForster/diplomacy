"use strict";
exports.__esModule = true;
var path = require("path");
var express = require("express");
var api_routes_1 = require("./controller/api-routes");
var game_1 = require("./controller/game");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.connect('mongodb://localhost/diplomacy');
var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var HTML_FILE = path.join(__dirname, 'client/index.html');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Serve up static files
app.use(express.static(path.join(__dirname, '/client')));
app.get('/', function (req, res) {
    res.sendFile(HTML_FILE);
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening to " + PORT + "...");
    console.log('Press Ctrl+C to quit.');
});
app.use('/api', api_routes_1["default"]);
app.use('/game', game_1["default"]);
exports["default"] = app;
