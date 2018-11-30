const express = require('express');
const routesHome = require('./routes/homeApi');
const routeSearchResults = require('./routes/searchResultsApi');
const routesStylistProfile = require('./routes/stylistProfileApi');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/home',routesHome);
app.use('/search',routeSearchResults);
app.use('/profile',routesStylistProfile);

var models = require('./models');

models.sequelize.sync().then(()=>{
    console.log('database Updated!')
}).catch((err)=>{
    console.log('something wrong in database update!');
})


//creating connection 
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
