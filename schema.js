const { gql } = require("apollo-server");

const typeDefs = gql`
    type CurrentWeather {
        coord: Coord
        weather: [Weather]
        base: String
        main: MainCW
        visibility: Int
        wind: Wind
        clouds: Clouds
        rain: Rain
        snow: Snow
        dt: Int
        sys: SysCW
        timezone: Int
        id: ID
        name: String
        cod: Int
    }

    type MainCW {
        temp: Float
        temp_f: Float
        temp_c: Float
        feels_like: Float
        temp_min: Float
        temp_max: Float
        pressure: Float
        humidity: Int
    }

    type SysCW {
        type: Int
        id: ID
        country: String
        sunrise: Int
        sunset: Int
    }

    type ForecastWeather {
        cod: String
        message: Float
        cnt: Int
        list: [List]
        city: City
        fahrenheit_avg: Float
        celcius_avg: Float
        kelvin_avg: Float
        fahrenheit_max_avg: Float
        celcius_max_avg: Float
        kelvin_max_avg: Float
        pressure_avg: Float
        humidity_avg: Float
        sea_level_avg: Float
        pressure: [Float]
        humidity: [Float]
        temp_farenheit: [Float]
        temp_celcius: [Float]
        temp_kelvin: [Float]
        sea_level: [Float]
    }

    type Forecast {
        cod: String
        message: Float
        cnt: Int
        city: City
        list: [List]
    }

    type City {
        id: ID
        name: String
        country: String
        coord: Coord
        population: Int
        timezone: Int
        sunrise: Int
        sunset: Int
    }

    type Coord {
        lat: Float
        lon: Float
    }

    type List {
        dt: Int
        main: Main
        weather: [Weather]
        clouds: Clouds
        wind: Wind
        rain: Rain
        snow: Snow
        sys: Sys
        dt_txt: String
    }

    type Main {
        temp: Float
        feels_like: Float
        temp_min: Float
        temp_max: Float
        temp_kf: Float
        temp_f: Float
        temp_c: Float
        pressure: Float
        sea_level: Float
        grnd_level: Float
        humidity: Int
    }

    type Weather {
        id: ID
        main: String
        description: String
        icon: String
    }

    type Clouds {
        all: Int
    }

    type Wind {
        speed: Float
        deg: Float
    }

    type Rain {
        h1: Float
        h3: Float
    }

    type Snow {
        h1: Float
        h3: Float
    }

    type Sys {
        pod: String
    }

    type Query {
        getWeather(cityName: String, countryCode: String): ForecastWeather
        getCurrentWeather(cityName: String, countryCode: String): CurrentWeather
    }
`;

module.exports = typeDefs;
