export default class EventManager {
  constructor(events) {
    this.events = events;
  }

  run() {
    console.log("RUNNING");
    this.events.forEach((event) =>
      setTimeout(() => this.manage(event), event.second * 1000)
    );
  }

  manage(event) {
    console.log(
      `At second ${event.second}: {type: ${event.type}, message: ${event.message}}`
    );
  }
};