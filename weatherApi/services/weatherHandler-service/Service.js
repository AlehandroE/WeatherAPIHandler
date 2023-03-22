import Weather from "./lib/handleWeather";
import Base from "../base";

export default class WeatherHandlerService extends Base {
  setName() {
    return "WeatherHandlerService";
  }
  setEvents() {
    return {
      handleWeatherData: {
        params: {
          ctime: { type: "date" },
          temperature: { type: "number" }
        },
        handler: Weather.handleWeatherData
      }
    };
  }
}
