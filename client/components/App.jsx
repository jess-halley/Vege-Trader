import React from 'react'
import UserForm from './forms'
const api = require('../api')

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    this.refreshList()
  }

  refreshList () {
    api.getVegetables((err, users) => {
      this.setState({users})
    })
  }

  saveUser(user){
    api.saveUser(user, (user_id) => {
      user.id = user_id
    })
  }

  render(){
    return (
      <div>
        <UserForm saveUser={this.saveUser.bind(this)}/>
        {this.state.users.map((u, i) => <User user={u} key={i}/>)}
      </div>
    )
  }
}

const User = ({user}) => {
  return (
    <div className = 'user'>
      <h1>{user.name} : {user.email}</h1>
      <img src={user.imgURL}/>
    </div>
  )
}



export default App
