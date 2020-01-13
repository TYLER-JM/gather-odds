"use strict";

const PORT = 8080;
const express =  require('express');
const app = express();

const api = require('../lib/api');

app.use(express.static('public'));

app.get('/odds/:league', async (req, res) => {
  try {
    let result = await api(req.params.league);
    // console.log("after the api: ", result);
    res.send(JSON.stringify(result.data));
  } catch (err) {
    console.log("What's wrong???", err);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});