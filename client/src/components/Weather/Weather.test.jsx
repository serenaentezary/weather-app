import Weather from '.';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('Weather', () => {
  const wrapper = shallow(<Weather
    data={[
      {
        "number": 1,
        "name": "This Afternoon",
        "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
        "detailedForecast": "Sunny, with a high near 79. West wind around 5 mph."
      },
      undefined,
      {
        "number": 2,
        "name": "Tonight",
        "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
        "detailedForecast": "Mostly clear, with a low around 55. Southwest wind 0 to 5 mph."
      },
      {
        "number": 3,
        "name": '',
        "icon": undefined,
        "detailedForecast": undefined
      },
      {
        "number": null,
        "name": null,
        "icon": null,
        "detailedForecast": null
      }
    ]}
    selectedCity={{ 
      city: 'Chicago',
      data: {
        address: 'Chicago, IL',
        lat: 41.850,
        lng: -87.650
      }
    }}
  />);

  it('should handle having Chicago location data', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('DailyWeather')).toHaveLength(1);
  });
});