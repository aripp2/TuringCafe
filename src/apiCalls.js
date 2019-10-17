export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => {
      if(!res.ok) {
        throw Error('Something went wrong getting you reservations. Try again later')
      }
      return res.json();
    })
}

export const postReservation = (resy) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      id: resy.id,
      name: resy.name,
      date: resy.date,
      time: resy.time,
      number: parseInt(resy.number)
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => {
      if(!res.ok) {
        throw Error('Something went wrong adding your reservation. Try again later')
      }
      return res.json();
    })
}