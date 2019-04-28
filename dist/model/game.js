"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var gameSchema = new mongoose.Schema({
    territories: [{
            empire: String,
            ownedTerritories: [String]
        }]
});
exports["default"] = mongoose.model('game', gameSchema);
// Example Schema:
// const userSchema: Schema = new Schema({
//   email: { type: String, index: { unique: true }, required: true },
//   name: { type: String, index: { unique: true }, required: true },
//   password: { type: String, required: true }
// });
