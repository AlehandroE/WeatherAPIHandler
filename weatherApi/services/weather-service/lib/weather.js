import axios from "axios";
import config from "@lib/config";

async function loadWeather() {
  const LAT = "51.5085",
    LON = "-0.12574";
  let weather_data = await axios
    .get(
      `${config.WEATHER_API.url}/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${config.WEATHER_API.key}&units=metric`
    )
    .catch((e) => {
      console.log("Error while getting weather: ", e);
      throw "LOADING_WEATHER_ERROR";
    });
  this.broker.broadcast("handleWeatherData", {
    temperature: weather_data?.data?.main?.temp,
    ctime: new Date()
  });
  return true;
}

export default {
  loadWeather
};
