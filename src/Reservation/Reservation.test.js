import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Reservation', () => {
  let wrapper;
  const mockCancel = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Reservation
      id={2}
      name='Amy'
      date='10/10'
      time='2:00'
      number={2}
      cancelReservation={mockCancel}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call cancelReservation when button is clicked', () => {
    wrapper.find('button').simulate('click')
    expect(mockCancel).toHaveBeenCalledWith(2)
  })
})
