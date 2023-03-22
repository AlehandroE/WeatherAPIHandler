import Weather from "./lib/weather";
import Base from "../base";

export default class WeatherService extends Base {
  setName() {
    return "WeatherService";
  }
  setEvents() {
    return {
      loadWeather: {
        params: {},
        handler: Weather.loadWeather
      }
    };
  }
}
