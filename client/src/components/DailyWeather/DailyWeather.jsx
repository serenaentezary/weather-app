import React from 'react';
import { isNullOrUndefined } from '../../utils/helpers'

const DailyWeather = ({ data }) => {
  return (
    <div className="daily-weather-container">
      {data.map((period) => {
        return (
          isNullOrUndefined(period) ? '' : <div className="weather-time-of-day" key={`weather-${period.number}`}>
            <h3>{period.name}</h3>
            <img alt="Icon for weather" className="icon" src={`${period.icon}`} />
            <p className="forecast-text">
              {period.detailedForecast}
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default DailyWeather;
