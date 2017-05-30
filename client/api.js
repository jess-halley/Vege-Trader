
import request from 'superagent'
var traderUrl = '/api'

module.exports = {
  saveUser,
  getVegetables,
  getUsers,
  saveVege
}


function saveUser (user, callback) {
  request
    .post(traderUrl + '/user')
    .send(user)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}

function saveVege (vege, callback) {
  request
    .post(traderUrl + '/vegetables')
    .send(vege)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}

function getVegetables (callback) {
  request
  .get(traderUrl + '/vegetables')
  .end(function (err, res) {
    console.log({err, res: res.body});
    if (err) {
      callback(err)
    } else {
      callback(null, res.body)
    }
  })
}

function getUsers (callback) {
  console.log("getting all users");
  request
  .get(traderUrl + '/users')
  .end(function (err, res) {
    if (err) {
      callback(err)
    } else {
      callback(null, res.body)
    }
  })
}
