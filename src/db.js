let MySql = require('mysql');
let Express = require('express');
let Routes = require('./routes.js');
//import MySql from 'mysql'
//import Express from 'express'
//import Routes from './routes.js'

let app = Express();

app.use(function(req, res, next){
  res.locals.connection = MySql.createConnection({
    host: 'myboba.cdh1vnifpmci.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'myboba123',
    database: 'myboba'
  });
  res.locals.connection.connect();
  next();
});

app.listen(4000);

console.log('App listening on port 4000');

//  Use routes defined in Route.js and prefix it with api
app.use('/api', Routes);

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Pass to next layer of middleware
  next()
});