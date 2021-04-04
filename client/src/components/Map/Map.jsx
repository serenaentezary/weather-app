import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import GoogleMapReact from 'google-map-react'
import LocationPin from '../LocationPin/LocationPin'
import { cityLocations } from '../../constants';
import Weather from '../Weather/Weather';
import { isNullOrUndefined } from '../../utils/helpers';

const Map = ({ location = cityLocations[2].data.google, zoomLevel }) => {
  const [ chosenCity, setChosenCity ] = useState(cityLocations[2]);
  const [ weatherLocationData, setWeatherLocationData ] = useState('');
  const [ data, setData ] = useState([]);
  
  const getData = async (selectedCity = chosenCity) => {
    const lat = selectedCity.data.weather.coord.lat;
    const lon = selectedCity.data.weather.coord.lon;

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

  useEffect(() => {
    getData(chosenCity);
  }, [])

  return (
    <>
      <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCLqxS2Hlhf0Zrz70tMqEs-dezJcYZ_V04' }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            {cityLocations.map((location) => {
              const googleData = location.data.google;

              const handleCityClick = target => {
                if (target === location.city) {
                  console.log(location);
                  setChosenCity(location);
                  getData(location);
                }
              }            
              
              return <LocationPin
                key={location.city}
                lat={googleData.lat}
                lng={googleData.lng}
                onClick={() => handleCityClick(location.city)}
                text={location.city}
              />
            })}
          </GoogleMapReact>
        </div>
      </div>
      <Weather
        data={data}
        selectedCity={chosenCity} />
    </>
  )  
}

export default Map;
