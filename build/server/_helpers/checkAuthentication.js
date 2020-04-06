"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmAuthentication = exports["default"] = void 0;

var _default = function _default(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send('Request not authenticated');
  next();
};

exports["default"] = _default;

var confirmAuthentication = function confirmAuthentication(req, res) {
  if (!req.session) return res.status(500).send('No session found');
  return res.send({
    userID: req.session.passport.user
  });
};

exports.confirmAuthentication = confirmAuthentication;