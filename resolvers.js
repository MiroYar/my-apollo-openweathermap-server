const {
    fetchWeather,
    fetchCurrentWeather,
    avg,
    toFarenheit,
    toCelsius,
    toKelvin
} = require("./helper");

const resolvers = {
    Query: {
        getWeather: async (_, { cityName, countryCode }) => {
            const { cod, message, cnt, city, list } = await fetchWeather({
                cityName,
                countryCode
            });

            return {
                cod,
                message,
                cnt,
                list: list.map(weather => ({
                    ...weather,
                    main: {
                        ...weather.main,
                        temp_f: toFarenheit(weather.main.temp),
                        temp_c: toCelsius(weather.main.temp)
                    },
                    rain: weather.rain
                        ? {
                              h1: weather.rain["1h"],
                              h3: weather.rain["3h"]
                          }
                        : null,
                    snow: weather.snow
                        ? {
                              h1: weather.snow["1h"],
                              h3: weather.snow["3h"]
                          }
                        : null
                })),
                city,
                fahrenheit_avg: toFarenheit(
                    avg(list.map(weather => weather.main.temp), list.length)
                ),
                celcius_avg: toCelsius(
                    avg(list.map(weather => weather.main.temp), list.length)
                ),
                kelvin_avg: toKelvin(
                    avg(list.map(weather => weather.main.temp), list.length)
                ),
                fahrenheit_max_avg: toFarenheit(
                    avg(list.map(weather => weather.main.temp_max), list.length)
                ),
                celcius_max_avg: toCelsius(
                    avg(list.map(weather => weather.main.temp_max), list.length)
                ),
                kelvin_max_avg: toKelvin(
                    avg(list.map(weather => weather.main.temp_max), list.length)
                ),
                pressure_avg: avg(
                    list.map(weather => weather.main.pressure),
                    list.length
                ).toFixed(2),
                humidity_avg: avg(
                    list.map(weather => weather.main.humidity),
                    list.length
                ).toFixed(2),
                sea_level_avg: avg(
                    list.map(weather => weather.main.sea_level),
                    list.length
                ).toFixed(2),
                pressure: list.map(weather => weather.main.pressure),
                humidity: list.map(weather => weather.main.humidity),
                temp_farenheit: list.map(weather =>
                    toFarenheit(weather.main.temp)
                ),
                temp_celcius: list.map(weather => toCelsius(weather.main.temp)),
                temp_kelvin: list.map(weather => toKelvin(weather.main.temp)),
                sea_level: list.map(weather => toKelvin(weather.main.sea_level))
            };
        },
        getCurrentWeather: async (_, { cityName, countryCode }) => {
            const {
                coord,
                weather,
                base,
                main,
                visibility,
                wind,
                clouds,
                rain,
                snow,
                dt,
                sys,
                timezone,
                id,
                name,
                cod
            } = await fetchCurrentWeather({
                cityName,
                countryCode
            });

            return {
                coord,
                weather,
                base,
                main: {
                    ...main,
                    temp_f: toFarenheit(main.temp),
                    temp_c: toCelsius(main.temp)
                },
                visibility,
                wind,
                clouds,
                rain: rain
                    ? {
                          h1: rain["1h"],
                          h3: rain["3h"]
                      }
                    : null,
                snow: snow
                    ? {
                          h1: snow["1h"],
                          h3: snow["3h"]
                      }
                    : null,
                dt,
                sys,
                timezone,
                id,
                name,
                cod
            };
        }
    }
};

module.exports = resolvers;
