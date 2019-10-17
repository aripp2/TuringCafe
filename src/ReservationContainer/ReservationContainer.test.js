import React from 'react';
import { shallow } from 'enzyme';
import ReservationContainer from './ReservationContainer';

describe('ReservationContainer', () => {
  let wrapper;
  const mockReservations = [
    {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
    },
    {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
    }
  ]

  beforeEach(() => {
    wrapper = shallow(<ReservationContainer
      reservations={mockReservations}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})