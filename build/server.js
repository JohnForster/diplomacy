"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _connectMongodbSession = _interopRequireDefault(require("connect-mongodb-session"));

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _path = _interopRequireDefault(require("path"));

var _game = _interopRequireDefault(require("./controllers/game.controller"));

var _turn = _interopRequireDefault(require("./controllers/turn.controller"));

var _user = _interopRequireDefault(require("./controllers/user.controller"));

var _passport = _interopRequireDefault(require("./services/passport/passport"));

var _checkAuthentication = _interopRequireWildcard(require("./_helpers/checkAuthentication"));

var _config = _interopRequireDefault(require("./config"));

var isDev = process.env.NODE_ENV !== 'production'; // Connect to mongoDB

_mongoose["default"].connect(_config["default"].MONGO_URI, {
  useNewUrlParser: true
});

_mongoose["default"].connection.on('error', function (err) {
  console.log('Something went wrong connecting to mongoDB!');
  console.log(err);
}); // Start the App


var app = (0, _express["default"])(); // Set up MongoDB for sessions

var MongoDBStore = (0, _connectMongodbSession["default"])(_expressSession["default"]);
var mongoDBStore = new MongoDBStore({
  uri: _config["default"].MONGO_URI,
  databaseName: 'diplomacy',
  collection: 'userSessions'
}, console.log);
app.use((0, _expressSession["default"])({
  secret: _config["default"].TOKEN_SECRET,
  store: mongoDBStore,
  // ? Why the below options?
  resave: false,
  saveUninitialized: true
})); // Configure bodyparser to handle post requests

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json()); // Setup passport
// Change to use '/api' as well?

(0, _passport["default"])(app, isDev); // API Routes

app.use('/api/auth', _checkAuthentication["default"], _checkAuthentication.confirmAuthentication);
app.use('/api/game', _game["default"]);
app.use('/api/turn', _turn["default"]);
app.use('/api/user', _user["default"]);
app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
}); // Front end routes
// const middlePath = isDev ? 'build' : ''

var clientPath = _path["default"].join(__dirname, '/client');

app.use(_express["default"]["static"](clientPath));
app.get('*', function (req, res) {
  res.sendFile("".concat(clientPath, "/index.html"));
});
app.listen(_config["default"].LISTEN_PORT, function () {
  console.log("App listening to ".concat(_config["default"].LISTEN_PORT, "..."));
  console.log("App available at http://localhost:".concat(_config["default"].LISTEN_PORT));
  console.log('Press Ctrl+C to quit.');
});
var _default = app;
exports["default"] = _default;