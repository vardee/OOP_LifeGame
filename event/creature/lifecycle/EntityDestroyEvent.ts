

namespace EventNamespace {    

    export class AnimalBornEvent extends CreatureEvent {

        constructor(protected eventBus: EventBus, protected entity: Creature, protected reason: EntityDestoryReason, protected killer: Creature?) {
            super(eventBus, entity);
            this.entity = entity;
            this.killer = killer;
        }

        getType(): typeof Event {
            return CreatureEvent;
        }

        getEntity() : Creature {
            return this.entity;
        }

        getKiller() : Creature? {
            return this.killer;
        }

        getReason() : EntityDestroyReason {
            return this.reason;
        }

    }

    export enum EntityDestroyReason {

        DEATH_BY_HUNGER,
        KILLED_BY_OTHER_ENTITY

    }


}