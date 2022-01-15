var express = require('express');
var app = express();
const fetch = require('node-fetch');
const Moralis  = require('moralis/node');
const dotenv = require('dotenv')
dotenv.config()



fetch('https://deep-index.moralis.io/api/v2/dateToBlock?chain=eth&date=1', {
    method: 'GET',
    headers: {'accept' : 'application/json', 'X-API-Key': process.env.API_KEY}
}).then(json => console.log(json));



 module.exports = app;
