import { Creature } from "../../creature.js";
export class Plant extends Creature {
    satiety;
    timeToDeath;
    timeToGrow;
    coordinates;
    constructor(satiety, timeToDeath, timeToGrow, coordinates) {
        super(satiety, timeToDeath, coordinates);
        this.satiety = satiety;
        this.timeToDeath = timeToDeath;
        this.timeToGrow = timeToGrow;
        this.coordinates = coordinates;
        this.timeToGrow = timeToGrow;
        this.coordinates = coordinates;
    }
    getTimeToGrow() {
        return this.timeToGrow;
    }
    setTimeToGrow(tick) {
        this.timeToGrow += tick;
    }
    getSatiety() {
        return this.satiety;
    }
}
