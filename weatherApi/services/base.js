import { Service } from "moleculer";

//базовый класс, в нём прописаны общие конфиги, которые могут переопределяться в зависимости от нужд сервиса
export default class BaseService extends Service {
  setName() {
    return "base";
  }
  constructor(broker) {
    super(broker);
    this.parseServiceSchema({
      name: this.setName(),
      actions: {
        ...this.setActions()
      },
      events: {
        run: {
          params: {},
          handler: this.run
        },
        ...this.setEvents()
      }
    });
  }
  run() {
    return;
  }

  setEvents() {
    return {};
  }
  setActions() {
    return {};
  }
}
