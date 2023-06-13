export class Crocodile extends Predator {
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
    reproduction() {
    }
    killSomeBody() {
    }
}
