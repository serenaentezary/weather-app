import DailyWeather from '.';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('DailyWeather', () => {
  const goodPeriods = [
    {
      "number": 1,
      "name": "This Afternoon",
      "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
      "detailedForecast": "Sunny, with a high near 79. West wind around 5 mph."
    },
    {
      "number": 2,
      "name": "Tonight",
      "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
      "detailedForecast": "Mostly clear, with a low around 55. Southwest wind 0 to 5 mph."
    }
  ];

  const badPeriods = [
    undefined,
    null,
    {
      "number": 1,
      "name": undefined,
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

  const goodWrapper = shallow(<DailyWeather data={goodPeriods} />);
  const badWrapper = shallow(<DailyWeather data={badPeriods} />);

  it('should handle if the period of time has good data', () => {
    expect(goodWrapper.find('.weather-time-of-day')).toHaveLength(2);
    expect(goodWrapper.find('h3')).toHaveLength(2);
    expect(goodWrapper.find('.icon')).toHaveLength(2);
    expect(goodWrapper.find('.forecast-text')).toHaveLength(2);
  });

  it('should handle if the period of time has bad data', () => {
    expect(badWrapper.find('.weather-time-of-day')).toHaveLength(2);
    expect(badWrapper.find('h3')).toHaveLength(0);
    expect(badWrapper.find('.icon')).toHaveLength(0);
    expect(badWrapper.find('.forecast-text')).toHaveLength(0);
  });
});