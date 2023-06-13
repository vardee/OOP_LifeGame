import {Creature} from "./creature.js"
import { sex } from "./sex.js"
export abstract class Animal extends Creature {
    constructor(
        protected timeToDeath: number,
        protected speed: number,
        protected satiety: number,
        protected health: number,
        protected sex: sex,
        protected damage: number,
        protected animalID: number,
        protected timeToRest: number,
        protected hungerValue: number
    ) {
        super(timeToDeath);
        this.speed = speed;
        this.satiety = satiety;
        this.health = health;
        this.sex = sex;
        this.damage = damage;
        this.animalID = animalID;
        this.timeToRest = timeToRest;
        this.hungerValue = hungerValue;
    }

    public eat() {
        if (this.hungerValue < 50) {
            // добавьте логику питания
        }
    }

    public reproduction() {
        // добавьте логику размножения
    }

    public sleep() {
        // добавьте логику сна
    }

    public move() {
        // добавьте логику движения
    }

    public defence() {
        // добавьте логику защиты
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getSatiety(): number {
        return this.satiety;
    }

    public getHealth(): number {
        return this.health;
    }

    public getDamege(): number {
        return this.damage;
    }

    public getAnimalID(): number {
        return this.animalID;
    }

    public getTimeToRest(): number {
        return this.timeToRest;
    }

    public getHungerValue(): number {
        return this.hungerValue;
    }
}
