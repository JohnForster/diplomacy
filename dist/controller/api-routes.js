"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
router.get("/", function(req, res) {
    res.json({
        status: "API Its Working",
        message: "Welcome to RESTHub crafted with love!",
    });
});
exports.default = router;
