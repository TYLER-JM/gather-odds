"use strict";

const PORT = 8080;
const express =  require('express');
const app = express();

const api = require('../lib/api.js');

app.use(express.static('public'));

const oddsRoutes = require('./oddsRoutes.js')();
app.use('/odds', oddsRoutes);

// app.get('/odds', (req, res) => {
//   // let result = api(req);
//   console.log('the req: ', req);
//   // console.log(result);
//   res.status(400).end();
//   // res.writeHead(200, {'Content-Type': 'application/json' });
//   // res.write(JSON.stringify({status: OK }));
//   // res.status(400);
//   // res.send("hey");
// });


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});