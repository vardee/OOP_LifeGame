import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { GrassTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";

    export class Grass extends Plant{
        constructor(
            timeToDeath: number,
             protected satiety: number,
            recoveryTime: number,
            growingSpeed: number,
            coordinates: Coordinates,
            protected type: GrassTypes
               ){
            super(timeToDeath, growingSpeed, recoveryTime, coordinates);
            this.satiety = satiety;
            this.type = type
        }
        public getSatiety(): number{
            return this.satiety
        }
        public override grow(dataBase: BruhDataBase, plant: any, tick: number) {
            const randomizer = RandomValues.getInstance();
            console.log(tick, plant.getGrowingSpeed())
            if (tick === plant.getGrowingSpeed())
            {const newPlant = new Grass(
                randomizer.createRandomValue(plant.timeToDeath - 3, plant.timeToDeath + 2) * 5,
                randomizer.createRandomValue(plant.numberOfWood - 3, plant.numberOfWood + 2),
                randomizer.createRandomValue(plant.recoveryTime - 3, plant.recoveryTime + 2),
                tick + randomizer.createRandomValue(plant.recoveryTime - 3, plant.recoveryTime + 2),
                randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3),
                plant.getType()
                )
            dataBase.addPlant(newPlant)
            this.setGrowingSpeed(tick)
        }
        }
        public override getType(){
            return this.type
        }
    }
    