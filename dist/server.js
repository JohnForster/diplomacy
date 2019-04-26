"use strict";
exports.__esModule = true;
var path = require("path");
var express = require("express");
var exampleGameState_1 = require("./exampleGameState");
var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var HTML_FILE = path.join(__dirname, 'client/index.html');
app.use(express.static(path.join(__dirname, '/client')));
app.get('/', function (req, res) {
    res.sendFile(HTML_FILE);
});
app.get('/game', function (req, res) {
    res.send(exampleGameState_1["default"]);
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening to " + PORT + "....");
    console.log('Press Ctrl+C to quit.');
});
