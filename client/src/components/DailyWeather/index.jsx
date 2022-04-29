import React from 'react';
import { isNullOrUndefined } from '../../utils/helpers'

const DailyWeather = ({ data }) => {
  return (
    <div className="daily-weather-container">
      {data.map((timePeriod, index) => {
        return (
          isNullOrUndefined(timePeriod) ? '' : <div
            className="weather-time-of-day"
            key={timePeriod.number ? `weather-${timePeriod.number}` : `weather-${index}`}
          >
            {timePeriod.name && <h3>{timePeriod.name}</h3>}
            {timePeriod.icon && <img alt="Icon for weather" className="icon" src={`${timePeriod.icon}`} />}
            {timePeriod.detailedForecast && <p className="forecast-text">
              {timePeriod.detailedForecast}
            </p>}
          </div>
        )
      })}
    </div>
  );
}

export default DailyWeather;
