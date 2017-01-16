"use strict"; //For use with ES6
const express = require('express');
const app = express();
var server = require('http').createServer(app);
const morgan = require('morgan');
const bodyParser = require('body - parser');
const methodOverride = require('method - override');
const cors = require('cors');
const mongoose = require('mongoose');
app.use(morgan('dev')); // log with Morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application / vnd.api + json'
}));
app.use(methodOverride());
app.use(cors()); //enable CORS
//Mount our route file that we have yet to create.   Note how we pass the instance of 'app' to the route.
const appRoutes = require('. / routes / s3.routes.js')(app)
server.listen(5000, () => {
    console.log('Server listening at port 5000');
});