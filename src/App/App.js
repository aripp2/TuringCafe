import React, { Component } from 'react';
import Form from '../Form/Form';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import './App.scss';
import { getReservations, postReservation } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
      isLoading: true
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations, isLoading: false}))
      .catch(err => this.setState({ error: err.message }))
  }

  addReservation = (resy) => {
    postReservation(resy)
      .then(reservation => this.setState({ reservations: [...this.state.reservations, reservation] }))
      .catch(err => this.setState({ error: err.message }))
  }

  render() {
    const { reservations, error, isLoading } = this.state

    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation} />
        <ReservationContainer reservations={reservations} />
      </main>
    )
  }
}

export default App;
