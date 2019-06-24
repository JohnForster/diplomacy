"use strict";
var __importStar = (this && this.__importStar) || function(mod) {
    if (mod && mod.__esModule) { return mod; }
    var result = {};
    if (mod != null) { for (var k in mod) { if (Object.hasOwnProperty.call(mod, k)) { result[k] = mod[k]; } } }
    result.default = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express = __importStar(require("express"));
var game_1 = __importDefault(require("../model/game"));
var GameController = /** @class */ (function() {
    function GameController() {
    }
    GameController.view = function(req, res) {
        game_1.default.findById(req.params.game_id, function(err, game) {
            if (err) {
                res.send(err);
                return;
            }
            console.log("Returning game with id: " + req.params.game_id);
            res.json(game);
        });
    };
    GameController.create = function(req, res) {
        var game = new game_1.default();
        game.territories = req.body.territories;
        game.save(function(err) {
            if (err) {
                res.json(err);
                return;
            }
            res.json({
                message: "Game created!",
                data: game,
            });
        });
    };
    return GameController;
}());
// Move into API Routes file?
var router = express.Router();
router.route("/:game_id")
    .get(GameController.view)
    .post(GameController.create);
exports.default = router;
