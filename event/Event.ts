

namespace EventNamespace {    

    export abstract class Event {

        isCalled: Boolean = false;
        private isCancelled: Boolean = false;

        constructor(protected eventBus: EventBus) {
            this.eventBus = eventBus;
        }

        setCancelled(isCancelled: Boolean) {
            this.isCancelled = isCancelled;
        }

        callEvent() {
            this.eventBus.callEvent(this);
        }

        abstract getType() : typeof Event

    }

}