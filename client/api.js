
import request from 'superagent'
var traderUrl = 'http://localhost:3000/api'

module.exports = {
  saveUser,
  getVegetables,
  getUsers,
  saveVege
}


function saveUser (user, callback) {
  request
    .post(traderUrl)
    .send(user)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body.user_id)
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
    if (err) {
      callback(err)
    } else {
      callback(null, res.body)
    }
  })
}

function getUsers (callback) {
  request
  .get(traderUrl + '/users')
  .end(function (err, res) {
    console.log(res.body);
    if (err) {
      callback(err)
    } else {
      callback(null, res.body || [])
    }
  })
}
