# my-apollo-openweathermap-server

Created with CodeSandbox

Легкий [Apollo](https://www.apollographql.com/docs/apollo-server/) сервер для получения данных с сайта погоды [openweathermap.org](openweathermap.org) при разработке приложений с системой запрсов данных на основе [Apollo](https://www.apollographql.com/docs/react/) клиент.

## Использование

### Локально

Скачать, пройти в командной строке в дирректорию сервера и набрать команду для установки всех зависимостей:

```
npm install
```

Для запуска проекта набрать команду:

```
npm start
```

Точка подключения после запуска сервера:

```
http://localhost:4000
```

По умолчанию порт `4000`. Чтобы сменить номер порта откройте файл `server.js` в корне проекта, и замените на нужный номер значение следующей переменной:

```js
const PORT = 4000;
```

### Сервер онлайн

Также можно использовать развернутый онлайн сервер на [Codesandbox.io](https://codesandbox.io/). В таком случае точка подключения к серверу:

```
https://7b3u2.sse.codesandbox.io/
```

## Query запросы

```js
getWeather(cityName: String, countryCode: String) {}

getCurrentWeather(cityName: String, countryCode: String) {}
```

## Схема тела запроса

В комментариях ожидаемый тип ответа

```js
getWeather(cityName: String, countryCode: String) {
    cod // String
    message // Float
    cnt // Int
    list { // [List]
        dt // Int
        main { // Main
            temp // Float
            feels_like // Float
            temp_min // Float
            temp_max // Float
            temp_kf // Float
            temp_f // Float
            temp_c // Float
            pressure // Float
            sea_level // Float
            grnd_level // Float
            humidity // Int
        }
        weather { // [Weather]
            id // ID
            main // String
            description // String
            icon // String
        }
        clouds { // Clouds
            all // Int
        }
        wind { // Wind
            speed // Float
            deg // Float
        }
        rain { // Rain
            h1 // Float
            h3 // Float
        }
        snow { // Snow
            h1 // Float
            h3 // Float
        }
        sys { // Sys
            pod // String
        }
        dt_txt// String
    }
    city { // City
        id // ID
        name // String
        country // String
        coord { // Coord
            lat // Float
            lon // Float
        }
        population // Int
        timezone // Int
        sunrise // Int
        sunset // Int
    }
    fahrenheit_avg // Float
    celcius_avg // Float
    kelvin_avg // Float
    fahrenheit_max_avg // Float
    celcius_max_avg // Float
    kelvin_max_avg // Float
    pressure_avg // Float
    humidity_avg // Float
    sea_level_avg // Float
    pressure // [Float]
    humidity // [Float]
    temp_farenheit // [Float]
    temp_celcius // [Float]
    temp_kelvin // [Float]
    sea_level // [Float]
}

getCurrentWeather(cityName: String, countryCode: String) {
    coord { // Coord
        lat // Float
        lon // Float
    }
    weather { // [Weather]
        id // ID
        main // String
        description // String
        icon // String
    }
    base // String
    main { // MainCW
        temp // Float
        temp_f // Float
        temp_c // Float
        feels_like // Float
        temp_min // Float
        temp_max // Float
        pressure // Float
        humidity // Int
    }
    visibility // Int
    wind { // Wind
        speed // Float
        deg // Float
    }
    clouds { // Clouds
        all // Int
    }
    rain { // Rain
        h1 // Float
        h3 // Float
    }
    snow { // Snow
        h1 // Float
        h3 // Float
    }
    dt // Int
    sys { // SysCW
        type // Int
        id // ID
        country // String
        sunrise // Int
        sunset // Int
    }
    timezone // Int
    id // ID
    name // String
    cod // Int
}
```
