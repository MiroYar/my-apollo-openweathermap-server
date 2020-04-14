// import axios from 'axios';
const axios = require("axios");
const API_KEY = "55c28cdd4128ce9e1de8f25671385cb3";

const fetchWeather = async ({ cityName, countryCode }) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        cityName
    )},${encodeURIComponent(countryCode)}&appid=${API_KEY}`;
    return axios.get(url).then(response => response.data);
};

const fetchCurrentWeather = async ({ cityName, countryCode }) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
    )},${encodeURIComponent(countryCode)}&appid=${API_KEY}`;
    return axios.get(url).then(response => response.data);
};

const avg = (obj, total) => obj.reduce((a, b) => a + b, 0) / total;
const toFarenheit = temp => ((temp * 9) / 5 - 459.67).toFixed(2);
const toCelsius = temp => (temp - 273.15).toFixed(2);
const toKelvin = temp => temp.toFixed(2);

module.exports = {
    fetchWeather,
    fetchCurrentWeather,
    avg,
    toFarenheit,
    toCelsius,
    toKelvin
};
