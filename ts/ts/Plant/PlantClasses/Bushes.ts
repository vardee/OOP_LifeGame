import { PlantDataBase } from "ts/ts/BruhDataBase.js";
import { Plant } from "./AbstractPlant.js";
import { Coordinates } from "ts/ts/Animals/Coordinates.js";
import { BushTypes } from "../types.js";
import { RandomValues } from "simulation/randomValues.js";
import { SimulationMap } from "ts/ts/SimulationOfLife.js";

    export class Bushes extends Plant{
        constructor(
            satiety: number,
            timeToDeath: number, 
            protected damage: number,
              timeToGrow: number,
              coordinates: Coordinates,
              protected type: BushTypes
              ){
            super(satiety, timeToDeath, timeToGrow, coordinates)
            this.damage = damage;
            this.type = type
        }
    
        public dropFruit(){} //Нужно подвязать сюда Fruit

        public getDamage(): number{
            return this.damage
        }

        public override grow(dataBase: PlantDataBase, plant: any, tick: number, map: SimulationMap) {
            const randomizer = RandomValues.getInstance();
            if (tick === plant.getTimeToGrow())
            {const newPlant = new Bushes(
                randomizer.createRandomValue(plant.getSatiety() - 3, plant.getSatiety() + 2),
                tick + randomizer.createRandomValue(10, 20),
                randomizer.createRandomValue(plant.getDamage() - 3, plant.getDamage() + 2),
                tick + randomizer.createRandomValue(1, 7),
                randomizer.createRandomCoordinate(dataBase, plant.getCoordinates().x, plant.getCoordinates().y, 3, plant, map),
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

        public override use (animal: any): number {
            this.die(this, "use")
            return this.damage
        }
    }
