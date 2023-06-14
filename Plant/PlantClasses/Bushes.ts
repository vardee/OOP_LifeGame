import { BruhDataBase } from "../../image/BruhDataBase.js";
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

        public override grow(dataBase: BruhDataBase, plant: any, tick: number) {
            const randomizer = RandomValues.getInstance();
            if (tick === plant.getTimeToGrow())
            {const newPlant = new Bushes(
                tick + randomizer.createRandomValue(plant.getTimeToDeath() - 3, plant.getTimeToDeath() + 2) * 2,
                randomizer.createRandomValue(plant.getDamage() - 3, plant.getDamage() + 2),
                tick + randomizer.createRandomValue(plant.getTimeToGrow() - 3, plant.getTimeToGrow() + 2),
                randomizer.createRandomCoordinate(plant.getCoordinates().x, plant.getCoordinates().y, 3),
                plant.getType()
                )
            dataBase.addPlant(newPlant)
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
