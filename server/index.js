"use strict";

const PORT = 8080;
const express =  require('express');
const app = express();

const api = require('../lib/api.js');

app.use(express.static('public'));

const oddsRoutes = require('./routes/oddsRoutes');
app.use('/odds', oddsRoutes);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});