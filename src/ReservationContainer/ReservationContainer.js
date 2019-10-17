import React from 'react';
import Reservation from '../Reservation/Reservation';
import './ReservationContainer.scss';

const ReservationContainer = ({ reservations }) => {

  const allResys = reservations.map(resy => {
    return <Reservation 
      key={resy.id}
      id={resy.id}
      name={resy.name}
      date={resy.date}
      time={resy.time}
      number={resy.number}
    />
  })

  return (
      <section className='resy-container'>
          { allResys }
      </section>
    )
}

export default ReservationContainer;