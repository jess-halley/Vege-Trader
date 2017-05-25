var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/vegetables', function (req, res) {
  console.log("hit");
  db.getVegetables(req.app.get('connection'))
    .then(function (users) {
      console.log({users});
      res.json(users)
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users', (req, res) => {
  db.getUsers(req.app.get('connection'))
  .then(function (users) {
    res.json(users)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/user', (req, res) => {
  db.addUser(req.body, req.app.get('connection'))
  .then(function (response) {
    res.status(201).send({user_id: response[0]})
  })
  .catch(function (err){
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
