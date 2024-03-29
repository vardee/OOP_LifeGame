import { PlantDataBase } from "../../image/BruhDataBase.js";
import { Plant } from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { TreeTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { SimulationMap } from "../../simulation/Map.js";
import { Human } from "../../Animals/AnimalsObjects/Humans.js";
import { HumanDataBase } from "../../image/BruhDataBase.js";

export class Trees extends Plant {
    constructor(
        satiety: number,
        timeToDeath: number,
        protected numberOfWood: number,
        timeToGrow: number,
        coordinates: Coordinates,
        protected type: TreeTypes,
    ) {
        super(satiety, timeToDeath, timeToGrow, coordinates);
        this.numberOfWood = numberOfWood;
        this.type = type
    }

    public getNumberOfWoods(): number {
        return this.numberOfWood
    }

    public override grow(dataBase: PlantDataBase, plant: any, tick: number, map: SimulationMap) {
        const randomizer = RandomValues.getInstance();
        if (tick === plant.getTimeToGrow()) {
            const newPlant = new Trees(
                randomizer.createRandomValue(25, 32),
                tick + randomizer.createRandomValue(10, 13),
                randomizer.createRandomValue(plant.getNumberOfWoods() - 3, plant.getNumberOfWoods() + 2),
                tick + randomizer.createRandomValue(1, 1),
                randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3, plant, map),
                plant.getType()
            )
            dataBase.addObject(newPlant)
            this.setTimeToGrow(tick)
        }
    }
    public override getType() {
        return this.type
    }

    public setDeath() {
        this.type = TreeTypes.Dead
    }

    public override use(animal: any) {
        const humanDataBase = HumanDataBase.getInstance();
        if (animal instanceof Human) {
            animal.setCountOfWood(this.numberOfWood)
            animal.setHungerValue(this.satiety)
        }
        else
            animal.setHungerValue(this.satiety)
        this.die(this, "use")
    }

}
