import React, { useEffect, useState, useContext } from 'react';
import WeatherList from '../components/WeatherList';
import WeatherSelect from '../components/WeatherSelect';
import { WeatherContext } from '../context/WeatherContext';
import { getWeatherByCity, getWeatherForecastByCity } from '../services/weatherApi';

const cities = ['Istanbul', 'Ankara', 'Izmir', 'Antalya', 'Bursa']; 

const Home = () => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  //  hem değişkenlerin değeri değiştiğinde hem de sayfa ilk yüklendiğinde çağrılır
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const currentWeather = await getWeatherByCity(selectedCity);
        const forecastWeather = await getWeatherForecastByCity(selectedCity);

        // contxt'deki hava durumu verilerini günceller
        setWeatherData({
          current: currentWeather.data[0], // dizideki ilk element ilk günün hava durumunu içerir
          forecast: forecastWeather.data.slice(1), // dizideki diğer elementler bir sonraki günlerin havu durumlarını içerir
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, [selectedCity, setWeatherData]);

  //dropdown ve hava durumu listesi ekranda gösterilir
  //weatherSelect component'e şehirler ve seçilen şehir bilgileri gönderilir
  //weatherList component'e 7 günlük hava durumu bilgisi gönderilir
  return (
    <div>
      <WeatherSelect cities={cities} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      {weatherData ? (<WeatherList weatherData={weatherData.forecast} />) : ( <div>Loading...</div>)}
    </div>
  );
};

export default Home;
