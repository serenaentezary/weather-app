import DailyWeather from '.';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('DailyWeather', () => {
  const periods = [
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
  ];

  const wrapper = shallow(<DailyWeather data={periods} />);

  it('should handle if the period of time has bad or good data', () => {
    expect(wrapper.find('.weather-time-of-day')).toHaveLength(4);
    expect(wrapper.find('h3')).toHaveLength(2);
    expect(wrapper.find('.icon')).toHaveLength(2);
    expect(wrapper.find('.forecast-text')).toHaveLength(2);
  });
});