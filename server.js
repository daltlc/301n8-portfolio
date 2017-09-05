'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();
const conString = 'postgres://USERNAME:PASSWORD@HOST:PORT';
const client = new pg.Client(conString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
