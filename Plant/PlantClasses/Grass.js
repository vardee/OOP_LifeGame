import { Plant } from "./AbstractPlant.js";
export class Grass extends Plant {
    timeToDeath;
    satiety;
    recoveryTime;
    growingSpeed;
    coordinates;
    type;
    constructor(timeToDeath, satiety, recoveryTime, growingSpeed, coordinates, type) {
        super(timeToDeath, growingSpeed, recoveryTime, coordinates);
        this.timeToDeath = timeToDeath;
        this.satiety = satiety;
        this.recoveryTime = recoveryTime;
        this.growingSpeed = growingSpeed;
        this.coordinates = coordinates;
        this.type = type;
        this.satiety = satiety;
    }
    getSatiety() {
        return this.satiety;
    }
    grow(dataBase) {
    }
    getType() {
        return this.type;
    }
}
