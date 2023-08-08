import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherSelect = ({ cities, selectedCity, setSelectedCity }) => {
  const { setWeatherData } = useContext(WeatherContext);

  const handleChange = async (e) => {
    setSelectedCity(e.target.value);
    setWeatherData(null); // bir önceki data temizlenir
  };

  return (
    <select value={selectedCity} onChange={handleChange}>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default WeatherSelect;
