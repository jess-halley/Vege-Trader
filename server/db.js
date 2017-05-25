
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser,
  getVegetables
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function addUser (user, connection){
  return connection ('users')
  .insert(user)
}

function getVegetables (connection){
  console.log("double hit");
  return connection ('vegetables')
  .join('users','vegetables.user_id',"=","users.id")
  .select('*', 'vegetables.id as vege_id')
}
