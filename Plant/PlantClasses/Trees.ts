import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { TreeTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { Creature } from "./creature.js";

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
            const randomizer = RandomValues.getInstance();
            if (tick === plant.getGrowingSpeed())
            {const newPlant = new Trees(
                tick + randomizer.createRandomValue(plant.timeToDeath - 3, plant.timeToDeath + 2) * 2,
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

        public setDeath(){
            this.type = TreeTypes.Dead
        }

        public override use <T extends Creature>(plant: T): number{
            plant.die(plant, "use")
            return this.numberOfWood     
        }
    }
