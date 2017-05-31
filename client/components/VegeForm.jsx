import React from 'react'
import * as api from '../api'

export default class VegeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vegetables: '',
      quantity: 1,
      imgURL: '',
      user_id: this.props.userId()
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    this.setState({user_id: this.props.userId()})
    // this.setState({
    //   user_id: this.props.userId(),
    //   [e.target.name]: e.target.value
    // })
    console.log("VegeForm user Id = " + this.state.user_id)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.setState({user_id: this.props.userId()})
    api.saveVege(this.state, (err) => {
      if (!err) console.log("veges saved to db");
    })
  }
  renderQuantities() {
    let arr = []
    for (var i = 1; i <= 100; i++) {
      arr.push(<option value={i}>{i}</option>)
    }
    return <select name="quantity" onChange={(e) => this.handleChange(e)}>
      <option selected disabled>Quantity</option>
      {arr}
    </select>
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" placeholder='vegetable' name='vegetables' onChange={(e) => this.handleChange(e)}/>
        {this.renderQuantities()}
        <input type="text" placeholder="image url" name='imgURL' onChange={(e) => this.handleChange(e)}/>
        <input type="submit"  value="submit"/>
      </form>
    )
  }
}
