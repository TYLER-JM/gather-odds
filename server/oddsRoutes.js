const express = require('express');
const router = express.Router();
// const api = require('../../lib/api.js');
module.exports = () => {
  router.get('/odds', (req, res) => {
    // let result = api(req);
    console.log('the req: ', req);
    // console.log(result);
    // res.status(400).end();
    // res.writeHead(200, {'Content-Type': 'application/json' });
    // res.write(JSON.stringify({status: OK }));
    // res.status(400);
    res.send("hey");
  });

  return router;
}