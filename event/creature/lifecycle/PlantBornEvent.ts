

namespace EventNamespace {    

    export class PlantBornEvent extends CreatureEvent {

        constructor(protected eventBus: EventBus, protected entity: Plant, protected parent: Plant) {
            super(eventBus, entity);
            this.entity = entity;
            this.parent = parent;
        }

        getType(): typeof Event {
            return CreatureEvent;
        }

        getEntity() : Creature {
            return this.entity;
        }

        getParent() : Plant {
            return this.parent;
        }

    }


}