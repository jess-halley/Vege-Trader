
import request from 'superagent'
var traderUrl = 'http://localhost:3000/react'

module.exports = {
  saveUser
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
