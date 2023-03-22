import { CronJob } from "cron";
import Base from "../base";

export default class CronService extends Base {
  setName() {
    return "CronService";
  }

  run() {
    let cronjob_list = this.getCronJobsList();
    for (let { time, action } of cronjob_list)
      new CronJob(time, action).start();
    return true;
  }

  getCronJobsList() {
    return [this.getWeather()];
  }

  getWeather() {
    // let time = "*/10 * * * * *";//debug only!!! (each 10 seconds)
    let time = "* */10 * * * *";
    let action = () => {
      console.log("Get weather in London");
      this.broker.emit("loadWeather");
    };
    return { time, action };
  }
}
