namespace EventNamespace {

    export class CreatureEvent extends Event {

        constructor(protected eventBus: EventBus, protected entity: Creature) {
            super(eventBus);
            this.entity = entity;
        }

        getType(): typeof Event {
            return CreatureEvent;
        }

        getEntity() : Creature {
            return this.entity;
        }

    }

}