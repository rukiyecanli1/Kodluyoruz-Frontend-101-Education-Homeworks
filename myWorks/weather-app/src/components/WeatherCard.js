import React from 'react';
import styled from '@emotion/styled';

//eğer isToday prop'u true ise, kartın arkaplan rengi açık gri (#f1f1f1) ve bir kenarlık (border) çizilir. 
const WeatherCardContainer = styled.div`
  padding: 10px;
  background-color: ${({ isToday }) => (isToday ? '#f1f1f1' : 'transparent')};
  border: ${({ isToday }) => (isToday ? '2px solid #ddd' : 'none')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const WeatherCard = ({ day, weather, temp }) => {
  return (
    <WeatherCardContainer isToday={day === 'Today'}>
      <h2>{day}</h2>
      <img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}  alt={weather.description} />
    {/* <div>{weather.description}</div>  */} 
      <div>
        {temp}°C 
      </div>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
