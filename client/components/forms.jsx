import React from 'react'
const api = require('../api')

class UserForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        name: '',
        email: ''
      },
      users: []
    }
  }
  handleSubmit(evt){
    evt.preventDefault()
    this.props.saveUser(this.state.user);
    this.setState = {
      user: {
        name: '',
        email: ''
      }
    }
  }
  componentDidMount () {
    api.getUsers((err, users) => {
      this.setState({users})
    })
  }
  handleChange(evt){
    let user = {...this.state.user}
    user[evt.target.name] = evt.target.value
    this.setState({user})
    console.log(this.state);
  }
  renderUserOptions() {
    return this.state.users.map((user) => {
      return <option value={user.id}>{user.name}</option>
    })
  }

  render(){
    return(
      <form onSubmit={(evt) => this.handleSubmit(evt)}>
        <select name="user_id" onChange={e => this.handleChange(e)}>
          <option selected disabled>Existing User</option> />
          {this.renderUserOptions()}


        </select>
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

export default UserForm
