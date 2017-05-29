import React from 'react'
import NewUserForm from './NewUserForm';
import UserForm from './UserForm'
import VegeForm from './VegeForm'
const api = require('../api')

const newUser = "newUser";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      user_id: null

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
  selectUser(user_id) {
    console.log({user_id});
    // let user = this.state.users.find((user) => user.id == user_id)
    this.setState({user_id})
  }

  isUserSelected() {
    const { user_id } = this.state;

    return user_id !== null || user_id !== newUser;
  }

  isNewUser() {
    const { user_id } = this.state;

    return user_id === newUser;
  }

  render(){
    return (
      <div className="row main">
        <UserForm selectUser={this.selectUser.bind(this)} saveUser={this.saveUser.bind(this)}/>
        { this.isNewUser() && <NewUserForm updateUserList={() => this.refreshList()} /> }
        { this.isUserSelected() && <VegeForm userId={this.state.user_id}/> }
        { this.state.users.map((u, i) => <User user={u} key={i}/>) }
      </div>
    )
  }
}

const User = ({user}) => {
  return (
    <div className="twelve columns listing user">
      <div className="six columns listing">
        <h4>{user.name} :</h4>
        <h5>{user.vegetables} : {user.quantity}</h5>
        <p className="emailAddress">{user.email}</p>
        <hr />
      </div>
      <div className="five columns listing">
        <img src={user.imgURL}/>
      </div>
    </div>
  )
}


export default App
