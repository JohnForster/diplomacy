"use strict";
exports.__esModule = true;
exports["default"] = (function (req, res, next) {
    if (!req.isAuthenticated())
        return res.status(401).send('Request not authenticated');
    next();
});
exports.confirmAuthentication = (function (req, res) {
    return res.send({ userID: req.session.passport.user });
});
