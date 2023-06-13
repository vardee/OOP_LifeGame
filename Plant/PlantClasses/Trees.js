import { Plant } from "./AbstractPlant.js";
export class Trees extends Plant {
    timeToDeath;
    numberOfWood;
    recoveryTime;
    growingSpeed;
    coordinates;
    type;
    constructor(timeToDeath, numberOfWood, recoveryTime, growingSpeed, coordinates, type) {
        super(timeToDeath, growingSpeed, recoveryTime, coordinates);
        this.timeToDeath = timeToDeath;
        this.numberOfWood = numberOfWood;
        this.recoveryTime = recoveryTime;
        this.growingSpeed = growingSpeed;
        this.coordinates = coordinates;
        this.type = type;
        this.numberOfWood = numberOfWood;
    }
    getNumberOfWoods() {
        return this.numberOfWood;
    }
    grow(dataBase, plant) {
    }
    getType() {
        return this.type;
    }
}
