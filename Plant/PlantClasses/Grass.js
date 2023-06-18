import { Plant } from "./AbstractPlant.js";
import { GrassTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";
export class Grass extends Plant {
    satiety;
    type;
    constructor(timeToDeath, satiety, timeToGrow, coordinates, type) {
        super(satiety, timeToDeath, timeToGrow, coordinates);
        this.satiety = satiety;
        this.type = type;
        this.satiety = satiety;
        this.type = type;
    }
    getSatiety() {
        return this.satiety;
    }
    grow(dataBase, plant, tick, map) {
        const randomizer = RandomValues.getInstance();
        if (tick === plant.getTimeToGrow()) {
            const newPlant = new Grass(tick + randomizer.createRandomValue(10, 20), randomizer.createRandomValue(plant.getSatiety() - 3, plant.getSatiety() + 2), tick + randomizer.createRandomValue(1, 1), randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3, "plant", map), plant.getType());
            dataBase.addObject(newPlant);
            this.setTimeToGrow(tick);
        }
    }
    getType() {
        return this.type;
    }
    setDeath() {
        this.type = GrassTypes.Dead;
    }
    use(animal) {
        animal.setHungerValue(this.satiety);
        this.die(this, "use");
    }
}
