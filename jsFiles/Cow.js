export class Cow extends Herbivores {
    speed;
    satiety;
    health;
    sex;
    damage;
    animalID;
    timeToRest;
    hungerValue;
    timeToRestoreMilk;
    constructor(speed, satiety, health, sex, damage, animalID, timeToRest, hungerValue, timeToRestoreMilk) {
        super(speed, satiety, health, sex, damage, animalID, timeToRest, hungerValue);
        this.speed = speed;
        this.satiety = satiety;
        this.health = health;
        this.sex = sex;
        this.damage = damage;
        this.animalID = animalID;
        this.timeToRest = timeToRest;
        this.hungerValue = hungerValue;
        this.timeToRestoreMilk = timeToRestoreMilk;
        this.timeToRestoreMilk = timeToRestoreMilk;
    }
    getTimeToRestorMilk() {
        return this.timeToRestoreMilk;
    }
    reproduction() {
    }
    giveMilk() {
    }
}
