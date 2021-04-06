import React from 'react';
import { isNullOrUndefined } from '../../utils/helpers'

const DailyWeather = ({ data }) => {
  return (
    <div className="daily-weather-container">
      {data.map((period, index) => {
        return (
          isNullOrUndefined(period) ? '' : <div
            className="weather-time-of-day"
            key={period.number ? `weather-${period.number}` : `weather-${index}`}
          >
            {period.name && <h3>{period.name}</h3>}
            {period.icon && <img alt="Icon for weather" className="icon" src={`${period.icon}`} />}
            {period.detailedForecast && <p className="forecast-text">
              {period.detailedForecast}
            </p>}
          </div>
        )
      })}
    </div>
  );
}

export default DailyWeather;
