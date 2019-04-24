"use strict";
// Convert this to typescript?
exports.__esModule = true;
var path = require('path');
// const express = require('express')
// const app = express()
// const DIST_DIR = path.join(__dirname, 'dist')
// const HTML_FILE = path.join(DIST_DIR, 'index.html')
// app.use(express.static(DIST_DIR))
// app.use(express.static('assets'))
// app.get('*', (req, res) => {
//     res.sendFile(HTML_FILE)
// })
// const PORT = process.env.PORT || 8080
// app.listen(PORT, () => {
//     console.log(`App listening to ${PORT}....`)
//     console.log('Press Ctrl+C to quit.')
// })
var express = require('express');
// import path from 'path'
var app = express();
var HTML_FILE = path.join(__dirname, 'client/index.html');
// app.use(express.static(DIST_DIR))
// app.use(express.static('client'))
// app.use('/assets',express.static(path.join(__dirname, 'client/assets')));
app.use(express.static(path.join(__dirname, '/client')));
app.get('/', function (req, res) {
    res.sendFile(HTML_FILE);
    // res.send({
    //     message: 'hello world',
    // });
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening to " + PORT + "....");
    console.log('Press Ctrl+C to quit.');
});
