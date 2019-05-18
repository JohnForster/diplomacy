"use strict";
exports.__esModule = true;
function default_1(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(400).send('User not authenticated');
}
exports["default"] = default_1;
