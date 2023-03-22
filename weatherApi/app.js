import { resolve, dirname } from "path";
import { ServiceBroker } from "moleculer";
import config from "@lib/config";

//инициализируем брокер
const broker = new ServiceBroker(config.BROKER_CONFIG);
//импортируем сервисы
broker.loadServices(resolve(__dirname, "services"), "*/Service.js");
//стартуем приложение, при старте выдаём общее сообщение run для реализации какой-либо логики при старте проекта
broker.start().then((res) => {
  broker.broadcast("run");
  console.log(`Service started at: http://localhost:${config.BROKER_CONFIG.port}`);
});
