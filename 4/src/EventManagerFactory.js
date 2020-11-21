import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        const acceptedEvents = [];
        events.forEach(event => {
            if (types.includes(event.type)){
                acceptedEvents.push(
                  new Event(event.message, event.second, event.type)
                );
            }
        });

        return new EventManager(acceptedEvents);
    }
};