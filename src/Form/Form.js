import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  render() {

    return (
      <form className='resy-form'>
        Form
        <input 
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          
        />
        <input />
        <input />
        <input />
        <button>Make Reservation</button>
      </form>
      )
  }
}

export default Form;