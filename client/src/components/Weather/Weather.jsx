import React, { useState } from 'react';
import DailyWeather from '../DailyWeather/DailyWeather';

const Weather = ({ data, selectedCity }) => {
  const [ isClosed, setIsClosed ] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  }

  const handleOpen = () => {
    setIsClosed(false);
  }

  return (
    <>
      <div aria-label="Click here to reopen weather results" className={`reopen is-displayed-${isClosed}`} onClick={handleOpen}>
        <a className="display-results" href="#">Click here to display weather results</a>
      </div>
      <div className={`weather-bar is-closed-${isClosed}`}>
        <button aria-label="Click here to close the weather information" className="close"
          onClick={handleClose}>X</button>
        <div className="city-header">
          <h2>
            {selectedCity.city}
          </h2>
          <DailyWeather data={data} />
        </div>
      </div>
    </>
  )
}

export default Weather;
