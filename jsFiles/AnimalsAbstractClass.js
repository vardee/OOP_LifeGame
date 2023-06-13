import { Creature } from "./creature.js";

export class Animal extends Creature {
    timeToDeath;
    speed;
    satiety;
    health;
    sex;
    damage;
    animalID;
    timeToRest;
    hungerValue;

    constructor(
        timeToDeath,
        speed,
        satiety,
        health,
        sex,
        damage,
        animalID,
        timeToRest,
        hungerValue
    ) {
        super(timeToDeath);
        this.timeToDeath = timeToDeath;
        this.speed = speed;
        this.satiety = satiety;
        this.health = health;
        this.sex = sex;
        this.damage = damage;
        this.animalID = animalID;
        this.timeToRest = timeToRest;
        this.hungerValue = hungerValue;
    }

    eat() {
        if (this.hungerValue < 50) {
            // добавьте логику питания
        }
    }

    reproduction() {
        // добавьте логику размножения
    }

    sleep() {
        // добавьте логику сна
    }

    move() {
        // добавьте логику движения
    }

    defence() {
        // добавьте логику защиты
    }

    getSpeed() {
        return this.speed;
    }

    getSatiety() {
        return this.satiety;
    }

    getHealth() {
        return this.health;
    }

    getDamege() {
        return this.damage;
    }

    getAnimalID() {
        return this.animalID;
    }

    getTimeToRest() {
        return this.timeToRest;
    }

    getHungerValue() {
        return this.hungerValue;
    }
}
