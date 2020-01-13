"use strict";

const PORT = 8080;
const express =  require('express');
const bodyParser = require('body-parser');
const app = express();

const api = require('../lib/api');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})
app.get('/odds/:league', async (req, res) => {
  try {
    // let result = await api(req.params.league);
    // console.log("after the api: ", result);
    res.render('table');
    // res.send(JSON.stringify(result.data));
  } catch (err) {
    console.log("What's wrong???", err);
  }
});
app.get('/odds', (req, res) => {
  res.render('table');
});
app.post('/odds', async (req, res) => {
  console.log('the req DOT body', req.body);
  let result = await api(req.body.league);
  res.render('table');
  // res.send(JSON.stringify(result.data));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});