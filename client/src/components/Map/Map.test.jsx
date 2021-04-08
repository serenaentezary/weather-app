import Map from '.';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('Map', () => {
  const wrapper = shallow(<Map
    location={{ 
      city: 'Chicago',
      data: {
        address: 'Chicago, IL',
        lat: 41.850,
        lng: -87.650
      }
    }}
    zoomLevel={3.5}
  />);

  it('should handle having Chicago location data', () => {
    expect(wrapper.find('.map')).toHaveLength(0);
    expect(wrapper.find('Weather')).toHaveLength(1);
  });
});
