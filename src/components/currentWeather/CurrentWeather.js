import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeatherIcon } from '../utils/weatherIcons'; // Import the utility function
import './currentWeather.css';

const CurrentWeather = ({ currentWeather }) => {
    const weatherIconData = getWeatherIcon(currentWeather?.weatherDescription);

    return (
        currentWeather && (
            <div className="current-weather">
                <h2>Current Weather</h2>
                {weatherIconData && (
                    <FontAwesomeIcon
                        icon={weatherIconData.icon}
                        className={`weather-icon ${weatherIconData.className}`}
                    />
                )}
                <p>Temperature: {currentWeather.temperature}°C</p>
                <p>Weather: {currentWeather.weatherDescription}</p>
                <p>Humidity: {currentWeather.humidity}%</p>
                <p>Wind Speed: {currentWeather.windSpeed} m/s</p>
            </div>
        )
    );
};

export default CurrentWeather;
