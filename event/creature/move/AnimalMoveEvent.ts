namespace EventNamespace {

    export class AnimalMoveEvent extends CreatureEvent {

        constructor(protected eventBus: EventBus, protected entity: Creature, protected from: Position, protected to: Position) {
            super(eventBus, entity);
            this.entity = entity;
            this.from = from;
            this.to = to;
        }

        getType(): typeof Event {
            return CreatureEvent;
        }

        getEntity() : Creature {
            return this.entity;
        }

        getFrom() : Position {
            return this.from;
        }

        getTo() : Position {
            return this.to;
        }

    }


}