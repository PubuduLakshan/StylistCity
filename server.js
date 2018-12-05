const express = require('express');
const homeApi = require('./app/routes/homeApi.js');
const searchApi = require('./app/routes/searchApi.js');
const stylistProfileApi = require('./app/routes/stylistProfileApi.js');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
var db = require('./models');

// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
//use cors to call port 3000 to port 8000
app.use(cors());
// Log requests to the console.
app.use(logger('dev'));


// Parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

searchApi(app,db);
homeApi(app,db);
stylistProfileApi(app,db);



db.sequelize.sync().then(()=>{
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
