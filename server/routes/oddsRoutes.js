const express = require('express');
const router = express.Router();
const api = require('../../lib/api.js');
//REQUIRE API DEAL
module.exports = () => {
  router.get('/odds', (req, res) => {
    let result = api(req);
    console.log(result);
    res.send(result);
    // res.render('odds')
  });
}