'use strict';
const express = require('express');
const app = express();
app.use(express.static('./public'));
// const requestProxy = require('express-request-proxy');
// const opn = require('opn'); //for opening in browser
// const bodyParser = require('body-parser').urlencoded({extended: true});
app.listen(3000, function(){
  console.log('server up!');
})
// const conString = 'postgres://USERNAME:PASSWORD@HOST:PORT';
// const client = new pg.Client(conString);
