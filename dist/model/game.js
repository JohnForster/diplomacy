"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var mongoose = __importStar(require("mongoose"));
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
