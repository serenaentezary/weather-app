import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GoogleMapReact from 'google-map-react'
import LocationPin from '../LocationPin'
import Weather from '../Weather';
import { cityLocations } from '../../constants'; 
import { isNullOrUndefined } from '../../utils/helpers';

const Map = ({ location = cityLocations[2], zoomLevel }) => {
  const [ chosenCity, setChosenCity ] = useState(cityLocations[2]);
  const [ data, setData ] = useState([]);
  const [ isClosed, setIsClosed ] = useState(true);
  const [ apiKey, setApiKey ] = useState('');

  const handleClose = () => {
    setIsClosed(true);
  }

  const handleOpen = () => {
    setIsClosed(false);
  }

  const getData = (selectedCity = chosenCity) => {
    const lat = selectedCity.data.lat;
    const lon = selectedCity.data.lng;

    axios.get(`https://api.weather.gov/points/${lat},${lon}`)
      .then(res => {
        axios.get(res.data.properties.forecast)
        .then(response => {
          if (!isNullOrUndefined(response.data.properties)) {
            setData(response.data.properties.periods);
          }
        })
        .catch(err => console.error(err))
      })
      .catch(error => console.error(error));
  }

  const handleCityClick = (target, citySelector) => {
    if (target === citySelector.city && citySelector !== chosenCity) {
      setChosenCity(citySelector);
      handleOpen();
    }
  }

  const getURLKey = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api');
      setApiKey(response.data.key);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getURLKey();
    getData(chosenCity);
  }, [ chosenCity ]); 

  return (
    <>
      {apiKey && <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={location.data}
            defaultZoom={zoomLevel}
          >
            {cityLocations.map((pinLocation) => {
              const googleData = pinLocation.data;
              
              return <LocationPin
                key={pinLocation.city}
                lat={googleData.lat}
                lng={googleData.lng}
                onClick={() => handleCityClick(pinLocation.city, pinLocation)}
                text={pinLocation.city}
              />
            })}
          </GoogleMapReact>
        </div>
      </div>}
      <button
          aria-label="Click here to see weather results" 
          className={`reopen is-displayed-${isClosed}`}
          key="open-weather-results"
          onClick={handleOpen}
        >
          <p className="display-results">Click here to display weather results</p>
        </button>
      <div className={`bottom-section is-closed-${isClosed}`}>
        <button
          aria-label="Click here to close the weather information"
          className="close"
          key="close"
          onClick={handleClose}
          >
            X
        </button>
        <div className="button-selectors">
          {cityLocations.map((buttonLocation, i) => {
            const buttonClass = buttonLocation.city === chosenCity.city ? ' button-selected' : '';
            return (
              <button 
                className={`city-button${buttonClass}`}
                key={`button-${i}`}
                onClick={() => handleCityClick(buttonLocation.city, buttonLocation)}
                type="button"
              >
                {buttonLocation.city}
              </button>
            )
          })}
        </div>
        
        <Weather
          data={data}
          selectedCity={chosenCity} />
      </div>
    </>
  )  
}

export default Map;
