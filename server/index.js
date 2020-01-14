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
  
  res.render('table', templateVars);
  // res.send(JSON.stringify(books.data));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});