import { Plant } from "./AbstractPlant.js";
import { TreeTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { Human } from "../../Animals/AnimalsObjects/Humans.js";
import { HumanDataBase } from "../../image/BruhDataBase.js";
export class Trees extends Plant {
    numberOfWood;
    type;
    constructor(satiety, timeToDeath, numberOfWood, timeToGrow, coordinates, type) {
        super(satiety, timeToDeath, timeToGrow, coordinates);
        this.numberOfWood = numberOfWood;
        this.type = type;
        this.numberOfWood = numberOfWood;
        this.type = type;
    }
    getNumberOfWoods() {
        return this.numberOfWood;
    }
    grow(dataBase, plant, tick, map) {
        const randomizer = RandomValues.getInstance();
        if (tick === plant.getTimeToGrow()) {
            const newPlant = new Trees(randomizer.createRandomValue(10, 20), tick + randomizer.createRandomValue(10, 13), randomizer.createRandomValue(plant.getNumberOfWoods() - 3, plant.getNumberOfWoods() + 2), tick + randomizer.createRandomValue(1, 1), randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3, plant, map), plant.getType());
            dataBase.addObject(newPlant);
            this.setTimeToGrow(tick);
        }
    }
    getType() {
        return this.type;
    }
    setDeath() {
        this.type = TreeTypes.Dead;
    }
    use(animal) {
        const humanDataBase = HumanDataBase.getInstance();
        if (animal instanceof Human) {
            animal.setCountOfWood(this.numberOfWood);
        }
        else
            animal.setHungerValue(this.satiety);
        this.die(this, "use");
    }
}
