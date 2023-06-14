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
            timeToGrow: number,
            coordinates: Coordinates,
            protected type: TreeTypes,
            ){
            super(timeToDeath, timeToGrow, coordinates);
            this.numberOfWood = numberOfWood;
            this.type = type
        }

        public getNumberOfWoods(): number{
            return this.numberOfWood
        }

        public override grow(dataBase: BruhDataBase, plant: any, tick: number) {
            const randomizer = RandomValues.getInstance();
            if (tick === plant.getTimeToGrow())
            {const newPlant = new Trees(
                tick + randomizer.createRandomValue(plant.getTimeToDeath() - 3, plant.getTimeToDeath() + 2) * 2,
                randomizer.createRandomValue(plant.getNumberOfWoods() - 3, plant.getNumberOfWoods() + 2),
                tick + randomizer.createRandomValue(plant.getTimeToGrow() - 3, plant.getTimeToGrow() + 2),
                randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3),
                plant.getType()
                )
            dataBase.addPlant(newPlant)
            this.setTimeToGrow(tick)
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
