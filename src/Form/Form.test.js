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
})