import { PlantDataBase } from "ts/ts/BruhDataBase";
import { Plant } from "./AbstractPlant";
import { Coordinates } from "ts/ts/Animals/Coordinates";
import { GrassTypes } from "../types";
import { RandomValues } from "simulation/randomValues";
import { SimulationMap } from "ts/ts/SimulationOfLife";

    export class Grass extends Plant{
        constructor(
            timeToDeath: number,
             protected satiety: number,
             timeToGrow: number,
            coordinates: Coordinates,
            protected type: GrassTypes
               ){
            super(satiety, timeToDeath, timeToGrow, coordinates);
            this.satiety = satiety;
            this.type = type
        }
        public getSatiety(): number{
            return this.satiety
        }
        public override grow(dataBase: PlantDataBase, plant: any, tick: number, map: SimulationMap) {
            const randomizer = RandomValues.getInstance();

            if (tick === plant.getTimeToGrow())
            {const newPlant = new Grass(
                tick + randomizer.createRandomValue(10, 20),
                randomizer.createRandomValue(plant.getSatiety() - 3, plant.getSatiety() + 2),
                tick + randomizer.createRandomValue(1, 5),
                randomizer.createRandomCoordinate(dataBase, plant.getCoordinates().x, plant.getCoordinates().y, 3, "plant", map),
                plant.getType()
                )
            dataBase.addObject(newPlant)
            this.setTimeToGrow(tick)
        }
        }
        public override getType(){
            return this.type
        }

        public setDeath(){
            this.type = GrassTypes.Dead
        }

        public use(animal: any): number{
            this.die(this, "use")
            return this.satiety
        }

    }
    