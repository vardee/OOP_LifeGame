import { PlantDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { GrassTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { Creature } from "./creature.js";
import { SimulationMap } from "../../simulation/Map.js";

    export class Grass extends Plant{
        constructor(
            timeToDeath: number,
             protected satiety: number,
             timeToGrow: number,
            coordinates: Coordinates,
            protected type: GrassTypes
               ){
            super(timeToDeath, timeToGrow, coordinates);
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
                randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3, "plant", map),
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
    