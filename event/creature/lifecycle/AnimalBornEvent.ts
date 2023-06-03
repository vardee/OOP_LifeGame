

namespace EventNamespace {    

    import Pair = Utils.Pair;

    export class AnimalBornEvent extends CreatureEvent {

        constructor(protected eventBus: EventBus, protected entity: Animal, protected parents: Pair<Animal, Animal>) {
            super(eventBus, entity);
            this.entity = entity;
            this.parents = parents;
        }

        getType(): typeof Event {
            return CreatureEvent;
        }

        getEntity() : Creature {
            return this.entity;
        }

        getParents() : Pair<Animal, Animal> {
            return this.parents;
        }

    }


}