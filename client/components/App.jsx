import React from 'react'

const App = prop => {
  return (
    <div>
      <div>Hello World</div>
      {prop.users.map((u, i) => <User user={u} key={i}/>)}
    </div>
  )
}

const User = ({user}) => {
  return (
    <div className = 'user'>
      {user.name} : {user.email}
    </div>
  )
}

export default App
