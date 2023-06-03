namespace EventNamespace {

    export abstract class ObjectSpawnEvent extends CreatureEvent {

        constructor(protected eventBus: EventBus, protected entity: Creature) {
            super(eventBus, entity);
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