"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var game_controller_1 = __importDefault(require("./controllers/game.controller"));
var user_controller_1 = __importDefault(require("./controllers/user.controller"));
exports.default = (function(app, isDev) {
    var middlePath = isDev ? "../../dist" : "";
    app.use(express_1.default.static(path_1.default.join(__dirname, middlePath, "/client")));
    app.use("/api/game", game_controller_1.default);
    app.use("/api/user", user_controller_1.default);
    var index = path_1.default.join(__dirname, middlePath, "/client/index.html");
    app.get("*", function(req, res) {
        res.sendFile(index);
    });
});
