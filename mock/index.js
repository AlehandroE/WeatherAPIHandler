const express = require("express");

const app = express();

app.get("/data/2.5/weather", (req, res) => {
  res.send({
    coord: { lon: -0.1293, lat: 51.5107 },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n"
      }
    ],
    base: "stations",
    main: {
      temp: 10.69,
      feels_like: 9.88,
      temp_min: 8.87,
      temp_max: 11.82,
      pressure: 1006,
      humidity: 79
    },
    visibility: 10000,
    wind: { speed: 6.17, deg: 220 },
    clouds: { all: 88 },
    dt: 1679428701,
    sys: {
      type: 2,
      id: 2075535,
      country: "GB",
      sunrise: 1679378513,
      sunset: 1679422422
    },
    timezone: 0,
    id: 2643743,
    name: "London",
    cod: 200,
    mock_data: true
  });
});

app.listen(1234, () => {
  console.log("Mock started!");
});
