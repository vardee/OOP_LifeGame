import { PlantDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { BushTypes } from "../types.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { Creature } from "./creature.js";

    export class Bushes extends Plant{
        constructor(
            timeToDeath: number, 
            protected damage: number,
              timeToGrow: number,
              coordinates: Coordinates,
              protected type: BushTypes
              ){
            super(timeToDeath, timeToGrow, coordinates)
            this.damage = damage;
            this.type = type
        }
    
        public dropFruit(){} //Нужно подвязать сюда Fruit

        public getDamage(): number{
            return this.damage
        }

        public override grow(dataBase: PlantDataBase, plant: any, tick: number) {
            const randomizer = RandomValues.getInstance();
            if (tick === plant.getTimeToGrow())
            {const newPlant = new Bushes(
                tick + randomizer.createRandomValue(10, 20),
                randomizer.createRandomValue(plant.getDamage() - 3, plant.getDamage() + 2),
                tick + randomizer.createRandomValue(1, 7),
                randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3, plant),
                plant.getType()
                )
            dataBase.addObject(newPlant)
            this.setTimeToGrow(tick)
        }
        }
        public override getType() {
            return this.type
        }

        public setDeath(){
            this.type = BushTypes.Dead
        }

        public override use <T extends Creature>(plant: T): number {
            plant.die(plant, "use")
            return this.damage
        }
    }
