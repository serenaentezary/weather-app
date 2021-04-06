import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GoogleMapReact from 'google-map-react'
import LocationPin from '../LocationPin/LocationPin'
import Weather from '../Weather';
import { cityLocations } from '../../constants'; 
import { isNullOrUndefined } from '../../utils/helpers';

const Map = ({ location = cityLocations[2], zoomLevel }) => {
  const [ chosenCity, setChosenCity ] = useState(cityLocations[2]);
  const [ weatherLocationData, setWeatherLocationData ] = useState('');
  const [ data, setData ] = useState([]);
  const [ isButtonSelected, setIsButtonSelected ] = useState({ city: chosenCity.city, isSelected: false});
  const [ isClosed, setIsClosed ] = useState(true);
  const [ apiKey, setApiKey ] = useState('');

  const handleClose = () => {
    setIsClosed(true);
  }

  const handleOpen = () => {
    setIsClosed(false);
  }

  const getData = async (selectedCity = chosenCity) => {
    const lat = selectedCity.data.lat;
    const lon = selectedCity.data.lng;

    const weatherLocationDataUrl = await axios.get(`https://api.weather.gov/points/${lat},${lon}`)
      .then(res => {
        setWeatherLocationData(res.data.properties.forecast);
        return res.data.properties.forecast;
      })
      .catch(error => console.error(error));
    
    const weatherDataUrl = await weatherLocationDataUrl;
    const getWeather = await axios.get(`${weatherDataUrl}`)
      .then(response => {
        if (!isNullOrUndefined(response.data.properties)) {
          setData(response.data.properties.periods);
          return response.data.properties.periods;
        }
      })
      .catch(error => console.error(error));

      return getWeather;
  }

  const handleCityClick = (target, citySelector) => {
    if (target === citySelector.city && citySelector !== chosenCity) {
      setChosenCity(citySelector);
      setIsButtonSelected({ city: citySelector.city, isSelected: true });
      getData(citySelector);
    }
  }

  const getURLKey = async () => {
    await axios.get('http://localhost:3001/api')
    .then(response => {
      return setApiKey(response.data.key);
    })
    .catch(error => console.error(error));
  }

  useEffect(() => {
    getURLKey();
    setIsButtonSelected({ city: chosenCity.city, isSelected: true });
    getData();
  }, []);

  return (
    <>
      { apiKey !== '' ? <div className="map">
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
        </div> : '' }
      <button
          aria-label="Click here to see weather results" 
          className={`reopen is-displayed-${isClosed}`}
          onClick={handleOpen}
        >
          <p className="display-results">Click here to display weather results</p>
        </button>
      <div className={`bottom-section is-closed-${isClosed}`}>
        <button
          aria-label="Click here to close the weather information"
          className="close"
          onClick={handleClose}
          >
            X
        </button>
        <div className="button-selectors">
          {cityLocations.map((buttonLocation, i) => {
            const addSelectedClass = isButtonSelected.isSelected && isButtonSelected.city === buttonLocation.city;
            const buttonClass = addSelectedClass ? ' button-selected' : '';
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
