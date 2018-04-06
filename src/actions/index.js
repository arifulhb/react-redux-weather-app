import axios from 'axios';

const API_KEY = 'be5c0ad90d4a34973922ca0f4fca5a50';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


/**
 * Fetch weather
 *
 * @param city
 * @returns {{type: string}}
 */
export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},malaysia`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload: request
    }

}