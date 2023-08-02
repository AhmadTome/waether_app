import { faCloud, faCloudShowersHeavy, faCloudSun, faSun } from '@fortawesome/free-solid-svg-icons';

export const getWeatherIcon = (weatherDescription) => {
    switch (weatherDescription) {
        case 'clear sky':
            return { icon: faSun, className: 'sun' };
        case 'few clouds':
        case 'scattered clouds':
            return { icon: faCloudSun, className: 'cloud-sun' };
        case 'broken clouds':
        case 'overcast clouds':
            return { icon: faCloud, className: 'cloud' };
        case 'shower rain':
        case 'rain':
        case 'thunderstorm':
            return { icon: faCloudShowersHeavy, className: 'cloud-showers-heavy' };
        case 'light rain':
        case 'moderate rain':
            return { icon: faCloudShowersHeavy, className: 'cloud-showers-light' };
        case 'mist':
            return { icon: faCloud, className: 'cloud-mist' };
        // Add other cases here for all weather descriptions you encounter

        default:
            return null;
    }
};
