import React, { Component } from 'react';
import Form from '../Form/Form';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import './App.scss';
import { getReservations, postReservation, deleteReservation } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations }))
      .catch(err => this.setState({ error: err.message }))
  }

  addReservation = (resy) => {
    postReservation(resy)
      .then(reservation => this.setState({ reservations: [...this.state.reservations, reservation] }))
      .catch(err => this.setState({ error: err.message }))
  }

  cancelReservation = (id) => {
    deleteReservation(id)
      .then(reservations => this.setState({ reservations}))
      .catch(err => this.setState({ error: err.message }))
  }

  render() {
    const { reservations, error } = this.state

    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {error && <h2>{error}</h2>}
        <Form addReservation={this.addReservation} />
        <ReservationContainer reservations={reservations} cancelReservation={this.cancelReservation}/>
      </main>
    )
  }
}

export default App;
