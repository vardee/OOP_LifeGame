

namespace EventNamespace {

    export class EventBus {   

        private eventListenerMap: Map<typeof Event, Set<EventListener<any>>> = new Map();

        registerListener<T extends Event>(event: typeof Event, listener: EventListener<T>) : void {
            if (!this.eventListenerMap.has(event)) {
                this.eventListenerMap.set(event, new Set());
            }
            this.eventListenerMap.get(event)?.add(listener);
        }

        callEvent(event: Event) {
            event.isCalled = true;
            let listeners = this.eventListenerMap.get(event.getType());
            if (listeners != undefined) {
                for (const listener of listeners) {
                    listener.onEventExecute(event);
                }
            }
        }

    }

}
