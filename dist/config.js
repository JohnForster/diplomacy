"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // 1. MongoDB
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/diplomacy',
    // 2. JWT
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'secret',
    // 3. Express Server Port
    LISTEN_PORT: process.env.LISTEN_PORT || 8080,
};
