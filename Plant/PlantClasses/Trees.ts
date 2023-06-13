import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { TreeTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";

    export  class Trees extends Plant{
        constructor(
            timeToDeath: number,
             protected numberOfWood: number,
              recoveryTime: number,
               growingSpeed: number,
               coordinates: Coordinates,
               protected type: TreeTypes,
            ){
            super(timeToDeath, growingSpeed, recoveryTime, coordinates);
            this.numberOfWood = numberOfWood;
            this.type = type
        }

        public getNumberOfWoods(): number{
            return this.numberOfWood
        }

        public override grow(dataBase: BruhDataBase, plant: any, tick: number) {
            const randomizer = new RandomValues
            console.log(tick, plant.getGrowingSpeed())
            if (tick % Math.round(plant.getGrowingSpeed()) === 0)
            {const newPlant = new Trees(
                randomizer.createRandomValue(plant.timeToDeath - 3, plant.timeToDeath + 2) * 5,
                randomizer.createRandomValue(plant.numberOfWood - 3, plant.numberOfWood + 2),
                randomizer.createRandomValue(plant.recoveryTime - 3, plant.recoveryTime + 2),
                tick + randomizer.createRandomValue(plant.recoveryTime - 3, plant.recoveryTime + 2),
                randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3),
                plant.getType()
                )
            dataBase.addPlant(newPlant)

        }
        }
        public getType(){
            return this.type
        }
        public setGrowingSpeed(newGrowingSpeed: number){
            this.growingSpeed = newGrowingSpeed
        }
    }
