import { Creature } from "./creature.js";
export class Plant extends Creature {
    timeToDeath;
    recoveryTime;
    growingSpeed;
    coordinates;
    constructor(timeToDeath, recoveryTime, growingSpeed, coordinates) {
        super(timeToDeath);
        this.timeToDeath = timeToDeath;
        this.recoveryTime = recoveryTime;
        this.growingSpeed = growingSpeed;
        this.coordinates = coordinates;
        this.recoveryTime = recoveryTime;
        this.growingSpeed = growingSpeed;
        this.coordinates = coordinates;
    }
    getRecoveryTime() {
        return this.recoveryTime;
    }
    getGrowingSpeed() {
        return this.growingSpeed;
    }
    getCoordinates() {
        return this.coordinates;
    }
}
