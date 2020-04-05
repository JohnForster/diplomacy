"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res, next) {
    if (!req.isAuthenticated())
        return res.status(401).send('Request not authenticated');
    next();
});
exports.confirmAuthentication = (function (req, res) {
    if (!req.session)
        return res.status(500).send('No session found');
    return res.send({ userID: req.session.passport.user });
});
