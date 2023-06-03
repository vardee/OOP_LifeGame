namespace EventNamespace {

    export class EntityAttackEntityEvent extends CreatureEvent {

        constructor(protected eventBus: EventBus, protected entity: Creature, protected defencingEntity: Creature) {
            super(eventBus, entity);
            this.entity = entity;
            this.defencingEntity = defencingEntity;
        }

        getType(): typeof Event {
            return CreatureEvent;
        }

        getEntity() : Creature {
            return this.entity;
        }

        getDefencingEntity() : Creature {
            return this.defencingEntity;
        }

    }


}