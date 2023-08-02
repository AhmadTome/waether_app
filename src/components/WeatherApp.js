import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './searchBar/SearchBar';
import CurrentWeather from './currentWeather/CurrentWeather';
import WeatherForecast from './weatherForecast/WeatherForecast';
import ErrorMessage from "./ErrorMessage";



const WeatherForecastApp = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const apiKey = process.env.REACT_APP_API_KEY;

    console.log(apiKey)

    const handleSearch = (location) => {
        setLoading(true);
        setError('');

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
            .then((response) => {
                setCurrentWeather({
                    temperature: response.data.main.temp,
                    weatherDescription: response.data.weather[0].description,
                    humidity: response.data.main.humidity,
                    windSpeed: response.data.wind.speed,
                });
            })
            .catch((error) => {
                setCurrentWeather(null);
                if (error.response) {
                    setError('Error fetching current weather data: ' + error.response.data.message);
                } else {
                    setError('Network error. Please check your internet connection.');
                }
            });

        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`)
            .then((response) => {
                const forecastList = response.data.list;
                const groupedForecastData = {};

                forecastList.forEach((data) => {
                    const date = data.dt_txt.split(' ')[0];
                    if (!groupedForecastData[date]) {
                        groupedForecastData[date] = {
                            date,
                            temperature: data.main.temp,
                            weatherDescription: data.weather[0].description,
                        };
                    } else {
                        // Choose the data with the most recent time for each date
                        if (data.dt_txt.split(' ')[1] === '12:00:00') {
                            groupedForecastData[date] = {
                                date,
                                temperature: data.main.temp,
                                weatherDescription: data.weather[0].description,
                            };
                        }
                    }
                });

                const forecastDataArray = Object.values(groupedForecastData);
                setForecastData(forecastDataArray);

                setError('');
            })
            .catch((error) => {
                setForecastData([]);
                if (error.response) {
                    setError('Error fetching forecast data: ' + error.response.data.message);
                } else {
                    setError('Network error. Please check your internet connection.');
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="app-container">
            <h1>Weather Forecast App</h1>
            <SearchBar handleSearch={handleSearch} />
            <CurrentWeather currentWeather={currentWeather} />
            <WeatherForecast forecastData={forecastData} />
            <ErrorMessage error={error} />
        </div>
    );
};

export default WeatherForecastApp;
