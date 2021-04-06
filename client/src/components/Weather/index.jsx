import React from 'react';
import DailyWeather from '../DailyWeather';

const Weather = ({ data, selectedCity }) => {
  return (
    <div className="weather-bar">
      <div className="city-header">
        <h2>
          {selectedCity.city}
        </h2>
        <DailyWeather data={data} />
      </div>
    </div>
  )
}

export default Weather;
