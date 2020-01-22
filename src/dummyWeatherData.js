// Note: For Dev purposes, replace with more current example once this is outdated
// TODO: test what happens when all this is expired

const dummyData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1579564800,
      main: {
        temp: 270.54,
        feels_like: 261.94,
        temp_min: 270.54,
        temp_max: 271.54,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1027,
        humidity: 51,
        temp_kf: -1
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 7.79,
        deg: 332
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-21 00:00:00"
    },
    {
      dt: 1579575600,
      main: {
        temp: 269.59,
        feels_like: 260.88,
        temp_min: 269.59,
        temp_max: 270.34,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1028,
        humidity: 57,
        temp_kf: -0.75
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 7.99,
        deg: 338
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-21 03:00:00"
    },
    {
      dt: 1579586400,
      main: {
        temp: 269.31,
        feels_like: 261.51,
        temp_min: 269.31,
        temp_max: 269.81,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1028,
        humidity: 57,
        temp_kf: -0.5
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 6.66,
        deg: 341
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-21 06:00:00"
    },
    {
      dt: 1579597200,
      main: {
        temp: 269.64,
        feels_like: 262.7,
        temp_min: 269.64,
        temp_max: 269.89,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1028,
        humidity: 56,
        temp_kf: -0.25
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 5.45,
        deg: 346
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-21 09:00:00"
    },
    {
      dt: 1579608000,
      main: {
        temp: 269.65,
        feels_like: 263.45,
        temp_min: 269.65,
        temp_max: 269.65,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1029,
        humidity: 54,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 4.34,
        deg: 346
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-21 12:00:00"
    },
    {
      dt: 1579618800,
      main: {
        temp: 269.98,
        feels_like: 263.34,
        temp_min: 269.98,
        temp_max: 269.98,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1030,
        humidity: 57,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 5.07,
        deg: 332
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-21 15:00:00"
    },
    {
      dt: 1579629600,
      main: {
        temp: 271.67,
        feels_like: 265.36,
        temp_min: 271.67,
        temp_max: 271.67,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1029,
        humidity: 44,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 4.43,
        deg: 329
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-21 18:00:00"
    },
    {
      dt: 1579640400,
      main: {
        temp: 273.05,
        feels_like: 266.61,
        temp_min: 273.05,
        temp_max: 273.05,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1028,
        humidity: 42,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 4.69,
        deg: 347
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-21 21:00:00"
    },
    {
      dt: 1579651200,
      main: {
        temp: 273.69,
        feels_like: 266.06,
        temp_min: 273.69,
        temp_max: 273.69,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1030,
        humidity: 48,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 6.62,
        deg: 336
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-22 00:00:00"
    },
    {
      dt: 1579662000,
      main: {
        temp: 272.77,
        feels_like: 265.66,
        temp_min: 272.77,
        temp_max: 272.77,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1030,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 90
      },
      wind: {
        speed: 6.09,
        deg: 337
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-22 03:00:00"
    },
    {
      dt: 1579672800,
      main: {
        temp: 272.96,
        feels_like: 265.64,
        temp_min: 272.96,
        temp_max: 272.96,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1029,
        humidity: 61,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 56
      },
      wind: {
        speed: 6.48,
        deg: 346
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-22 06:00:00"
    },
    {
      dt: 1579683600,
      main: {
        temp: 272.68,
        feels_like: 265.74,
        temp_min: 272.68,
        temp_max: 272.68,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1028,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 5.93,
        deg: 337
      },
      rain: {},
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-22 09:00:00"
    },
    {
      dt: 1579694400,
      main: {
        temp: 272,
        feels_like: 266.6,
        temp_min: 272,
        temp_max: 272,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1030,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 3.64,
        deg: 357
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-22 12:00:00"
    },
    {
      dt: 1579705200,
      main: {
        temp: 272.12,
        feels_like: 267.81,
        temp_min: 272.12,
        temp_max: 272.12,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1031,
        humidity: 60,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.05,
        deg: 8
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-22 15:00:00"
    },
    {
      dt: 1579716000,
      main: {
        temp: 272.69,
        feels_like: 269.25,
        temp_min: 272.69,
        temp_max: 272.69,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1030,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.84,
        deg: 283
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-22 18:00:00"
    },
    {
      dt: 1579726800,
      main: {
        temp: 273.59,
        feels_like: 269.65,
        temp_min: 273.59,
        temp_max: 273.59,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1029,
        humidity: 52,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.46,
        deg: 22
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-22 21:00:00"
    },
    {
      dt: 1579737600,
      main: {
        temp: 274.71,
        feels_like: 270.82,
        temp_min: 274.71,
        temp_max: 274.71,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1030,
        humidity: 47,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.35,
        deg: 35
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-23 00:00:00"
    },
    {
      dt: 1579748400,
      main: {
        temp: 275.08,
        feels_like: 270.86,
        temp_min: 275.08,
        temp_max: 275.08,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1030,
        humidity: 46,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.83,
        deg: 49
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-23 03:00:00"
    },
    {
      dt: 1579759200,
      main: {
        temp: 275.39,
        feels_like: 271.73,
        temp_min: 275.39,
        temp_max: 275.39,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1029,
        humidity: 47,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 6
      },
      wind: {
        speed: 1.1,
        deg: 41
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-23 06:00:00"
    },
    {
      dt: 1579770000,
      main: {
        temp: 275.09,
        feels_like: 270.88,
        temp_min: 275.09,
        temp_max: 275.09,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1028,
        humidity: 50,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 73
      },
      wind: {
        speed: 1.96,
        deg: 349
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-23 09:00:00"
    },
    {
      dt: 1579780800,
      main: {
        temp: 274.78,
        feels_like: 271.18,
        temp_min: 274.78,
        temp_max: 274.78,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1029,
        humidity: 51,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 86
      },
      wind: {
        speed: 1.08,
        deg: 14
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-23 12:00:00"
    },
    {
      dt: 1579791600,
      main: {
        temp: 275.27,
        feels_like: 271.45,
        temp_min: 275.27,
        temp_max: 275.27,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1029,
        humidity: 52,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 41
      },
      wind: {
        speed: 1.48,
        deg: 328
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-23 15:00:00"
    },
    {
      dt: 1579802400,
      main: {
        temp: 276,
        feels_like: 272.3,
        temp_min: 276,
        temp_max: 276,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1027,
        humidity: 53,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 54
      },
      wind: {
        speed: 1.44,
        deg: 303
      },
      rain: {
        "3h": 0.185
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-23 18:00:00"
    },
    {
      dt: 1579813200,
      main: {
        temp: 276.68,
        feels_like: 273.47,
        temp_min: 276.68,
        temp_max: 276.68,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1026,
        humidity: 49,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 49
      },
      wind: {
        speed: 0.69,
        deg: 224
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-23 21:00:00"
    },
    {
      dt: 1579824000,
      main: {
        temp: 277.35,
        feels_like: 273.5,
        temp_min: 277.35,
        temp_max: 277.35,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1026,
        humidity: 53,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 74
      },
      wind: {
        speed: 1.85,
        deg: 221
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-24 00:00:00"
    },
    {
      dt: 1579834800,
      main: {
        temp: 276.74,
        feels_like: 272.61,
        temp_min: 276.74,
        temp_max: 276.74,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1025,
        humidity: 58,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.34,
        deg: 243
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-24 03:00:00"
    },
    {
      dt: 1579845600,
      main: {
        temp: 276.39,
        feels_like: 270.88,
        temp_min: 276.39,
        temp_max: 276.39,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1024,
        humidity: 61,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.37,
        deg: 262
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-24 06:00:00"
    },
    {
      dt: 1579856400,
      main: {
        temp: 276.12,
        feels_like: 271.28,
        temp_min: 276.12,
        temp_max: 276.12,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1023,
        humidity: 58,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.26,
        deg: 292
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-24 09:00:00"
    },
    {
      dt: 1579867200,
      main: {
        temp: 276.14,
        feels_like: 271.77,
        temp_min: 276.14,
        temp_max: 276.14,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1023,
        humidity: 52,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 2.39,
        deg: 325
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-24 12:00:00"
    },
    {
      dt: 1579878000,
      main: {
        temp: 276.4,
        feels_like: 271.67,
        temp_min: 276.4,
        temp_max: 276.4,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 55,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.04,
        deg: 11
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-24 15:00:00"
    },
    {
      dt: 1579888800,
      main: {
        temp: 277.01,
        feels_like: 273.62,
        temp_min: 277.01,
        temp_max: 277.01,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 54,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.18,
        deg: 0
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-24 18:00:00"
    },
    {
      dt: 1579899600,
      main: {
        temp: 277.88,
        feels_like: 274.37,
        temp_min: 277.88,
        temp_max: 277.88,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 50,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.32,
        deg: 8
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-24 21:00:00"
    },
    {
      dt: 1579910400,
      main: {
        temp: 278.33,
        feels_like: 273.48,
        temp_min: 278.33,
        temp_max: 278.33,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1021,
        humidity: 56,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.55,
        deg: 46
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-25 00:00:00"
    },
    {
      dt: 1579921200,
      main: {
        temp: 277.86,
        feels_like: 271.84,
        temp_min: 277.86,
        temp_max: 277.86,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1021,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 5.42,
        deg: 73
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-25 03:00:00"
    },
    {
      dt: 1579932000,
      main: {
        temp: 278,
        feels_like: 272.07,
        temp_min: 278,
        temp_max: 278,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1020,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 98
      },
      wind: {
        speed: 5.72,
        deg: 72
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-25 06:00:00"
    },
    {
      dt: 1579942800,
      main: {
        temp: 276.93,
        feels_like: 269.93,
        temp_min: 276.93,
        temp_max: 276.93,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1019,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 7.6,
        deg: 60
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-25 09:00:00"
    },
    {
      dt: 1579953600,
      main: {
        temp: 276.9,
        feels_like: 269.27,
        temp_min: 276.9,
        temp_max: 276.9,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 8.54,
        deg: 69
      },
      rain: {
        "3h": 0.19
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-01-25 12:00:00"
    },
    {
      dt: 1579964400,
      main: {
        temp: 278.04,
        feels_like: 268.29,
        temp_min: 278.04,
        temp_max: 278.04,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1016,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 11.89,
        deg: 79
      },
      rain: {
        "3h": 1.94
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-25 15:00:00"
    },
    {
      dt: 1579975200,
      main: {
        temp: 278.5,
        feels_like: 266.85,
        temp_min: 278.5,
        temp_max: 278.5,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 14.59,
        deg: 85
      },
      rain: {
        "3h": 1.62
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-25 18:00:00"
    },
    {
      dt: 1579986000,
      main: {
        temp: 278.63,
        feels_like: 266.1,
        temp_min: 278.63,
        temp_max: 278.63,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1008,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 15.93,
        deg: 82
      },
      rain: {
        "3h": 2.25
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-01-25 21:00:00"
    }
  ],
  city: {
    name: "Brooklyn",
    coord: {
      lat: 40.6251,
      lon: -74.0303
    },
    country: "US",
    timezone: -18000,
    sunrise: 1579522529,
    sunset: 1579557489
  }
};

export default dummyData;
