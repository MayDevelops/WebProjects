const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to convert to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/Pokemon', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: [
        'secretValue'
    ],
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// import the trainers module and setup its API path
const trainers = require("./trainers.js");
app.use("/api/trainers", trainers.routes);

const pokes = require("./pokes.js");
app.use("/api/pokes", pokes.routes);

const comments = require("./comments.js");
app.use("/api/comments", comments.routes);


app.listen(3002, () => console.log('Server listening on port 3002!'));