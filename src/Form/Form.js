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
    this.setState({ [e.targe.name]: e.target.value })
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
        <button>Make Reservation</button>
      </form>
      )
  }
}

export default Form;