import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeatherIcon } from '../utils/weatherIcons'; // Import the utility function
import './weatherForcast.css';

const WeatherForecast = ({ forecastData }) => {

    return (
        forecastData.length > 0 && (
            <div className="forecast">
                <h2>5-Day Forecast</h2>
                <div className="forecast-container">
                    {forecastData.map((data, index) => (
                        <div className="forecast-card" key={index}>
                            <p>Date: {data.date}</p>
                            <p>Temperature: {data.temperature}°C</p>
                            <div className="weather-icon">
                                {getWeatherIcon(data.weatherDescription) && (
                                    <FontAwesomeIcon
                                        icon={getWeatherIcon(data.weatherDescription).icon}
                                        className={getWeatherIcon(data.weatherDescription).className}
                                    />
                                )}
                            </div>
                            <p>Weather: {data.weatherDescription}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default WeatherForecast;
