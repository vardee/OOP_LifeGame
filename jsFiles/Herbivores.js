import { Animal } from "./AnimalAbstractClass.js";
export class Herbivores extends Animal {
    speed;
    satiety;
    health;
    sex;
    damage;
    animalID;
    timeToRest;
    hungerValue;
    constructor(speed, satiety, health, sex, damage, animalID, timeToRest, hungerValue) {
        super(speed, satiety, health, sex, damage, animalID, timeToRest, hungerValue);
        this.speed = speed;
        this.satiety = satiety;
        this.health = health;
        this.sex = sex;
        this.damage = damage;
        this.animalID = animalID;
        this.timeToRest = timeToRest;
        this.hungerValue = hungerValue;
    }
    findGrass() {
    }
    eat() {
    }
}
