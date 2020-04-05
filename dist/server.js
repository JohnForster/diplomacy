"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var mongoose_1 = __importDefault(require("mongoose"));
var path_1 = __importDefault(require("path"));
var game_controller_1 = __importDefault(require("./controllers/game.controller"));
var turn_controller_1 = __importDefault(require("./controllers/turn.controller"));
var user_controller_1 = __importDefault(require("./controllers/user.controller"));
var passport_1 = __importDefault(require("./services/passport/passport"));
var checkAuthentication_1 = __importStar(require("./_helpers/checkAuthentication"));
var config_1 = __importDefault(require("./config"));
var isDev = process.env.NODE_ENV !== 'production';
// Connect to mongoDB
mongoose_1.default.connect(config_1.default.MONGO_URI);
mongoose_1.default.connection.on('error', function (err) {
    console.log('Something went wrong connecting to mongoDB!');
    console.log(err);
});
// Start the App
var app = express_1.default();
// Set up MongoDB for sessions
var MongoDBStore = connect_mongodb_session_1.default(express_session_1.default);
var mongoDBStore = new MongoDBStore({
    uri: config_1.default.MONGO_URI,
    databaseName: 'diplomacy',
    collection: 'userSessions',
}, console.log);
app.use(express_session_1.default({
    secret: config_1.default.TOKEN_SECRET,
    store: mongoDBStore,
    // ? Why the below options?
    resave: false,
    saveUninitialized: true,
}));
// Configure bodyparser to handle post requests
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
// Setup passport
// Change to use '/api' as well?
passport_1.default(app, isDev);
// API Routes
app.use('/api/auth', checkAuthentication_1.default, checkAuthentication_1.confirmAuthentication);
app.use('/api/game', game_controller_1.default);
app.use('/api/turn', turn_controller_1.default);
app.use('/api/user', user_controller_1.default);
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
// Front end routes
var middlePath = isDev ? '../../dist' : '';
app.use(express_1.default.static(path_1.default.join(__dirname, middlePath, '/client')));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, middlePath, '/client/index.html'));
});
app.listen(config_1.default.LISTEN_PORT, function () {
    console.log("App listening to " + config_1.default.LISTEN_PORT + "...");
    console.log("App available at http://localhost:" + config_1.default.LISTEN_PORT);
    console.log('Press Ctrl+C to quit.');
});
exports.default = app;
