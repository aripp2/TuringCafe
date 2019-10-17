import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  makeReservation = (e) => {
    e.preventDefault()
    const { addReservation } = this.props
    const details = {...this.state, id: Date.now()}
    addReservation(details)

  }

  render() {

    return (
      <form className='resy-form'>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.changeHandler}
        />
        <input 
          type='text'
          name='date'
          value={this.state.date}
          placeholder='Date (mm/dd)'
          onChange={this.changeHandler}
        />
        <input 
          type='time'
          step='600'
          name='time'
          min="1:00" 
          max="12:00"
          value={this.state.time}
          placeholder='Time'
          onChange={this.changeHandler}
        />
        <input 
          type='number'
          name='number'
          value={this.state.number}
          placeholder='Number of guests'
          onChange={this.changeHandler}
        />
        <button
          onClick={this.makeReservation}
        >Make Reservation</button>
      </form>
      )
  }
}

export default Form;