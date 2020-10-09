"use strict";
// master comment

const PORT = 8080;
const express =  require('express');
const bodyParser = require('body-parser');
const app = express();

const api = require('../lib/api');
const sampleData = require('../lib/Private/sample');
// const checkCache = require('../lib/middleware');

const cache = {};

// app.use(express.static(__dirname + "/public/"));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
  // get the books and store them in the 'cache'
});

app.get('/error', (req, res) => {
  res.render('error');
});


app.get('/odds/:league/:line', async (req, res) => {

  // if (!cache[req.params.league]) {
  if (false) {
    console.log('in the league IF');
    let result = await api(req.params.league);
    cache[req.params.league] = result.data;
  }


  // if (!cache.sortedBooks) {
  if (false) {
    console.log('in the cache sortedBooks IF');
    let books = await api();
  
    let sortedBooks = {};
    books.data.affiliates.forEach(book => {
      sortedBooks[book.affiliate_id] = book.affiliate_name;
    });

    cache.sortedBooks = sortedBooks;
  }


  let myEvents = [];

  // result.data.events.forEach(event => {
  sampleData.events.forEach(event => {
  // cache[req.params.league].events.forEach(event => {
    console.log('in the loop building myEvents')
    let lines = [];

    // for (let id in sortedBooks) {
    for (let id in sampleData.sortedBooks) {
    // for (let id in cache.sortedBooks) {
      console.log('building lines with existing or empty object')
      lines.push(event.lines[id] || {});
    }
    myEvents.push({
      'teams': event.teams,
      'teams_normalized': event.teams_normalized,
      'lines': lines,
    });
    console.log('populated myEvents')
  });


  let templateVars = {
    view: req.params.line,
    events: myEvents,

    // sortedBooks: sortedBooks
    sortedBooks: sampleData.sortedBooks
    // sortedBooks: cache.sortedBooks
  }
  
  res.render('table', templateVars);

  // res.send(JSON.stringify(books.data));
  // res.send(JSON.stringify(templateVars));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});