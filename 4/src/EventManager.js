export default class EventManager {
  constructor(events) {
    this.events = events;
  }

  run() {
    console.log("RUNNING");
    this.events.forEach((event) =>
      new Promise((resolve) =>
        setTimeout(() => resolve(1), event.second * 1000)
      ).then((result) => this.manage(event))
    );
  }

  manage(event) {
    console.log(
      `At second ${event.second}: {type: ${event.type}, message: ${event.message}}`
    );
  }
};