const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//Server Setup
const http = require('http');
//Express app
const app = express();
//view engine setup
//Logs requests to the console (middleware)
app.use(logger('dev'));
// parse incoming data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//models
const models =require('./models');
//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});
//Require our routes into the application
require('./routes')(app);
//setup default catch-all route that sends back welcome message in JSON format
app.get('/api/list', (req, res) => 
res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));
//set our port for our server 
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;