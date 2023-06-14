import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { GrassTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { Creature } from "./creature.js";

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
        public override grow(dataBase: BruhDataBase, plant: any, tick: number) {
            const randomizer = RandomValues.getInstance();

            if (tick === plant.getTimeToGrow())
            {const newPlant = new Grass(
                tick + randomizer.createRandomValue(plant.getTimeToDeath() - 3, plant.getTimeToDeath() + 2) * 2,
                randomizer.createRandomValue(plant.getSatiety() - 3, plant.getSatiety() + 2),
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
            this.type = GrassTypes.Dead
        }

        public use<T extends Creature>(plant: T): number{
            plant.die(plant, "use")
            return this.satiety
        }

    }
    