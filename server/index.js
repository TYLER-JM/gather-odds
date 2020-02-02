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
});

app.get('/test', (req, res) => {
  let templateVars = {
    event: 'ottawa'
  }
  res.render('test', templateVars);
});

app.post('/odds', async (req, res) => {
  let result = await api(req.body.league);
  let books = await api();
  let sortedBooks = {};
  books.data.affiliates.forEach(book => {
    sortedBooks[book.affiliate_id] = book.affiliate_name;
  });
  let templateVars = {
    events: result.data.events,
    // books: books.data.affiliates,
    sortedBooks: sortedBooks
  }
  
  // res.render('table', templateVars);
  // res.send(JSON.stringify(books.data));
  res.send(JSON.stringify(templateVars));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});