import DailyWeather from '.';

describe('DailyWeather', () => {
  const periods = [
    {
      "number": 1,
      "name": "This Afternoon",
      "startTime": "2021-04-06T12:00:00-04:00",
      "endTime": "2021-04-06T18:00:00-04:00",
      "isDaytime": true,
      "temperature": 79,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "5 mph",
      "windDirection": "W",
      "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
      "shortForecast": "Sunny",
      "detailedForecast": "Sunny, with a high near 79. West wind around 5 mph."
    },
    undefined
  ]

  it('should handle if the period of time is null or undefined', () => {

  });

  it('should handle good data', () => {

  });
});