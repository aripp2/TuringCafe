import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;
  const mockAddRes = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Form addReservation={mockAddRes}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when changeHandler is called', () => {
    const mockEvent = { target: {
      name: 'name',
      value: 'Amy'
    }}
    wrapper.instance().changeHandler(mockEvent)
    expect(wrapper.state('name')).toEqual('Amy')
  })

  it('should ')
})