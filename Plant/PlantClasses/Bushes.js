import { Plant } from "./AbstractPlant.js";
import { BushTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";
export class Bushes extends Plant {
    damage;
    type;
    constructor(satiety, timeToDeath, damage, timeToMultiply, coordinates, type) {
        super(timeToMultiply, satiety, timeToDeath, coordinates);
        this.damage = damage;
        this.type = type;
        this.damage = damage;
        this.type = type;
    }
    getDamage() {
        return this.damage;
    }
    grow(dataBase, plant, tick, map) {
        const randomizer = RandomValues.getInstance();
        if (tick === plant.getTimeToGrow()) {
            const newPlant = new Bushes(randomizer.createRandomValue(5, 13), tick + randomizer.createRandomValue(10, 15), randomizer.createRandomValue(plant.getDamage() - 3, plant.getDamage() + 2), tick + randomizer.createRandomValue(1, 1), randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3, plant, map), plant.getType());
            dataBase.addObject(newPlant);
            this.setTimeToGrow(tick);
        }
    }
    getType() {
        return this.type;
    }
    setDeath() {
        this.type = BushTypes.Dead;
    }
    use(animal) {
        animal.setHungerValue(this.getSatiety());
        this.die(this, "use");
        animal.setHealth(-this.getDamage());
    }
}
