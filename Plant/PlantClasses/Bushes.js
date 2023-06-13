import { Plant } from "./AbstractPlant.js";
export class Bushes extends Plant {
    timeToDeath;
    damage;
    haveFruit;
    recoveryTime;
    growingSpeed;
    coordinates;
    type;
    constructor(timeToDeath, damage, haveFruit, recoveryTime, growingSpeed, coordinates, type) {
        super(timeToDeath, recoveryTime, growingSpeed, coordinates);
        this.timeToDeath = timeToDeath;
        this.damage = damage;
        this.haveFruit = haveFruit;
        this.recoveryTime = recoveryTime;
        this.growingSpeed = growingSpeed;
        this.coordinates = coordinates;
        this.type = type;
        this.damage = damage;
        this.haveFruit = haveFruit;
    }
    dropFruit() { } //Нужно подвязать сюда Fruit
    getDamage() {
        return this.damage;
    }
    getHaveFruit() {
        return this.haveFruit;
    }
    grow(dataBase) {
    }
    getType() {
        return this.type;
    }
}
