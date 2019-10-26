
const API_KEY = '8561a5b7b131a9f8f6f5996bf4bb2c07';
export const WEATHER_API = (city, country) => `http://api.epenweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`;