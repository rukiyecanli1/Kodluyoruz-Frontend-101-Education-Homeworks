import React from 'react';
import styled from '@emotion/styled';
import WeatherCard from './WeatherCard';

const WeatherListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  justify-items: center;
`;

const WeatherList = ({ weatherData }) => {
  return (
    <WeatherListContainer>
      {weatherData &&  //weatherData null değilse
      //her bir güne ait hava durumu weatherCard component ile gösterilir
        weatherData.map((data, index) => (
          <WeatherCard
            key={index}
            day={index === 0 ? 'Bugün' : data.datetime}
            weather={data.weather}
            temp={data.temp}
          />
        ))}
    </WeatherListContainer>
  );
};

export default WeatherList;
