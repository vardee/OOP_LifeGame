import { PlantDataBase } from "ts/ts/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { RandomValues } from "simulation/randomValues.js";
import { Coordinates } from "ts/ts/Animals/Coordinates.js";
import { TreeTypes } from "../types.js";
import { SimulationMap } from "ts/ts/SimulationOfLife.js";

    export  class Trees extends Plant{
        constructor(
            satiety: number,
            timeToDeath: number,
            protected numberOfWood: number,
            timeToGrow: number,
            coordinates: Coordinates,
            protected type: TreeTypes,
            ){
            super(satiety, timeToDeath, timeToGrow, coordinates);
            this.numberOfWood = numberOfWood;
            this.type = type
        }

        public getNumberOfWoods(): number{
            return this.numberOfWood
        }

        public override grow(dataBase: PlantDataBase, plant: any, tick: number, map: SimulationMap) {
            const randomizer = RandomValues.getInstance();
            if (tick === plant.getTimeToGrow())
            {const newPlant = new Trees(
                randomizer.createRandomValue(plant.getSatiety() - 3, plant.getSatiety() + 2),
                tick + randomizer.createRandomValue(10, 20),
                randomizer.createRandomValue(plant.getNumberOfWoods() - 3, plant.getNumberOfWoods() + 2),
                tick + randomizer.createRandomValue(1, 7),
                randomizer.createRandomCoordinate(dataBase, plant.getCoordinates().x, plant.getCoordinates().y, 3, plant, map),
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
            this.type = TreeTypes.Dead
        }

        public override use (animal: any): number{
            this.die(this, "use")
            return this.numberOfWood     
        }
    }
