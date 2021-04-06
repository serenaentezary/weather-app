import React from 'react';
import DailyWeather from '../DailyWeather';

const Weather = ({ data, selectedCity }) => {
  return (
    <div className="weather-bar">
      <div className="city-header">
        {selectedCity.city && <h2>
          {selectedCity.city}
        </h2>}
        {data && <DailyWeather data={data} />}
      </div>
    </div>
  )
}

export default Weather;
