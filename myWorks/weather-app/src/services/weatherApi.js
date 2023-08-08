import axios from 'axios';


import API_KEY from '../config.js';


const BASE_URL = 'https://api.weatherbit.io/v2.0';

const getWeatherByCity = async (city) => {
  const response = await axios.get(`${BASE_URL}/current`, {
    params: {
      city: city,
      key: API_KEY,
      units: 'M', // 'M' for Celsius 
    },
  });
  return response.data;
};

const getWeatherForecastByCity = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast/daily`, {
    params: {
      city: city,
      key: API_KEY,
      units: 'M', // 'M' for Celsius 
      days: 7, // Fetch 7-day weather forecast
    },
  });
  return response.data;
};

export { getWeatherByCity, getWeatherForecastByCity };


/* sitedeki verilerin yapısı:
Field Decriptions:
count: Count of returned observations.
data: [
lat: Latitude (Degrees).
lon: Longitude (Degrees).
sunrise: Sunrise time UTC (HH:MM).
sunset: Sunset time UTC (HH:MM).
timezone: Local IANA Timezone.
station: [DEPRECATED] Nearest reporting station ID.
sources: List of data sources used in response.
ob_time: Last observation time (YYYY-MM-DD HH:MM).
datetime: [DEPRECATED] Current cycle hour (YYYY-MM-DD:HH).
ts: Last observation time (Unix timestamp).
city_name: City name.
country_code: Country abbreviation.
state_code: State abbreviation/code.
weather: {
icon:Weather icon code.
code:Weather code.
description: Text weather description.
}

]
*/
