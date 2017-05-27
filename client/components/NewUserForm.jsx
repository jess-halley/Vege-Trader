import React from 'react'
const api = require('../api')


export default class NewUserForm extends React.Component {
  constructor(props){
    super(props)
    console.log("Constructing New User form")
    this.state = {
      name: '',
      email: ''
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("Submitting " + this.state.name + " " + this.state.email)
    api.saveUser(this.state, (err) => {
      if (!err) console.log("user saved to db");
    })
    this.props.updateUserList();
  }

  render(){
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" placeholder="name" name="name" onChange={(e) => this.handleChange(e)}/>
        <input type="email" placeholder="email" name="email" onChange={(e) => this.handleChange(e)}/>
        <input type="submit" value="submit"/>
      </form>

    )
  }

}
