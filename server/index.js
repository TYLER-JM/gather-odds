"use strict";

const PORT = 8080;
const express =  require('express');
const app = express();

const api = require('../lib/api');

app.use(express.static('public'));

// const oddsRoutes = require('./oddsRoutes.js')();
// app.use('/odds', oddsRoutes);

app.get('/odds', async (req, res) => {
  // console.log('the req: ', req);
  try {
    let result = await api();
    console.log("after the api: ", result);
    res.send(result);
  } catch (err) {
    console.log("What's wrong???", err);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});