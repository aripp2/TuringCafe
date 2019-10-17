import React from 'react';
import './Reservation.scss';

const Reservation = ({ id, name, date, time, number }) => {
  // console.log('in reservation')
  return (
      <div>
        <h3>{name}</h3>
        <h4>{date}</h4>
        <h4>{time}</h4>
        <h4>Number of Guests: {number}</h4>
        <button>Cancel</button>
      </div>
    )
}

export default Reservation;