import React from 'react'
import NewUserForm from './NewUserForm'
import VegeForm from'./VegeForm'
const api = require('../api')

export default class UserForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_id: null,
      users: []
    }
  }
  handleSubmit(evt){
    // evt.preventDefault()
    this.props.saveUser(this.state.user);
  }
  componentDidMount () {
    console.log("Getting list of users");
    api.getUsers((err, users) => {
      this.setState({users})
    })
  }
  handleChange(evt){
    if (evt.target.name == 'user_id') this.props.selectUser(evt.target.value)
    this.setState({[evt.target.name]: evt.target.value})
  }
  renderUserOptions() {
    console.log(this.state.users);
    return this.state.users.map((user) => {
      return <option value={user.id}>{user.name}</option>
    })


  }
  render(){
    return(
      <form onSubmit={(evt) => this.handleSubmit(evt)}>
        <select name="user_id" onChange={e => this.handleChange(e)}>
          <option selected disabled value="existingUser">Existing User</option> />
          <option value="newUser">New User?</option>
          {this.renderUserOptions()}
        </select>
      </form>
    )
  }
}

// <input type='text' name='name' placeholder='name' onChange= {evt => this.handleChange(evt)}/>
// <input type='email' name='email' placeholder='email'onChange= {evt => this.handleChange(evt)}/>
// <input type='submit' value='Save'/>
// renderVegeOptions() {
//   return this.state.vegetables.map((vege) => {
//     return <option value={vege.id}>{vege.vegetables}</option>
//   })
// }


//
// <select name="vegetables_id" onChange={e => this.handleChange(e)}>
//   <option selected disabled>Pick Your Veges</option> />
//   {this.renderUserOptions()}
// </select>
