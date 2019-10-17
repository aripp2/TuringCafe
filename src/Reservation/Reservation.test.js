import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Reservation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Reservation
      id={2}
      name='Amy'
      date='10/10'
      time='2:00'
      number={2}
      cancelReservation={jest.fn()}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
