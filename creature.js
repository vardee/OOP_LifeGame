import { Timer } from "./simulation/timer.js";
export class Creature {
    satiety;
    timeToDeath;
    coordinates;
    constructor(satiety, timeToDeath, coordinates) {
        this.satiety = satiety;
        this.timeToDeath = timeToDeath;
        this.coordinates = coordinates;
        this.timeToDeath = timeToDeath;
        this.coordinates = coordinates;
    }
    die(creature, reason) {
        const tick = Timer.getInstance();
        if (creature.getTimeToDeath() === tick.getTime() || reason === "use" || reason === "die") {
            creature.setDeath();
        }
    }
    getCoordinates() {
        return this.coordinates;
    }
    getTimeToDeath() {
        return this.timeToDeath;
    }
}
