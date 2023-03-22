import db from "@lib/db";
const crypto = require("crypto");
async function handleWeatherData({ ctime, temperature }) {
  await db.create(`insert into weather (id, ctime, temperature)`, {
    id: crypto.randomUUID(),
    ctime: new Date(ctime).toISOString(),
    temperature
  });
  if (temperature)
    switch (temperature) {
      case Number(temperature) > 30: {
        console.log("Hot");
        break;
      }
      case Number(temperature) < 10: {
        console.log("Cold");
        break;
      }
      default: {
        console.log("Good");
        break;
      }
    }
  return true;
}

export default {
  handleWeatherData
};
