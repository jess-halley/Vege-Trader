import React from 'react'
const api = require('../api')

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    this.refreshList
  }

  refreshList () {
    api.getUser((err, users) => this.setState(err, users))
  }

  saveUser(user){
    api.saveUser(user, (user_id) => {
      user.id = user_id
    })

    // this.setState({users})
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
      email: '',
      vegetables:'',
      quantity:'',
      imgURL:''
    }
  }
}
  handleSubmit(evt){
    evt.preventDefault()
    this.props.saveUser(this.state.user);
    this.setState = {
      user: {
        name: '',
        email: '',
        vegetables:'',
        quantity:'',
        imgURL:''
      }
    }
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
      <input type='text' name='vegetables' placeholder='veges for trading'onChange= {evt => this.handleChange(evt)}/>
      <input type='text' name='quantity' placeholder='how many?'onChange= {evt => this.handleChange(evt)}/>
      <input type='url' name='imgURL' placeholder='post a photo'onChange= {evt => this.handleChange(evt)}/>
      <input type='submit' value='Save'/>
    </form>
    )
  }
}

export default App
