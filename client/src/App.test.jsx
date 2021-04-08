import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('App component', () => {
  const wrapper = shallow(<App  />)

  it('renders map component', () => {
    expect(wrapper.find('Map')).toHaveLength(1);
    expect(wrapper.find('Map').prop('zoomLevel')).toEqual(3.5);
  });
});
