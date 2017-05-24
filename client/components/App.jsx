import React from 'react'
const api = require('../api')

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: props.users
    }
  }

  saveUser(user){
    api.saveUser(user, (user_id) => {
      user.id = user_id
    })
    let users = this.state.users
    users.push(user)
    this.setState({users})
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
      {user.name} : {user.email}
    </div>
  )
}



class UserForm extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    user: {
      name: '',
      email: ''
    }
  }
  }
  handleSubmit(evt){
    evt.preventDefault()
    this.props.saveUser(this.state.user);
  }

  handleChange(evt){
    let user = {...this.state.user}
    user[evt.target.name] = evt.target.value
    this.setState({user})
  }


  render(){
    return(
    <form onSubmit={(evt) => this.handleSubmit(evt)}>
      <input type='text' name='name' placeholder='name' onChange= {evt => this.handleChange(evt)}/>
      <input type='email' name='email' placeholder='email'onChange= {evt => this.handleChange(evt)}/>
      <input type='submit' value='Save'/>
    </form>
    )
  }
}

export default App
