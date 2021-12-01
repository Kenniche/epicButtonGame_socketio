// Import express and path modules.
const express = require( 'express' );
const path = require('path');
// create the express app
const app = express();

const theCounter = 0;

// Define the static folder.
app.use(express.static(path.join(__dirname, "/static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Start Node server listening on port 9090, create server var and put it in listen method
const server = app.listen(9090, function() {
    console.log("listening on port 9090 for epicButtonGame");
});

//get all the routes
var routes = require('./routes/index.js')(app,server,theCounter);