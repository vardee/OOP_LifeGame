import { Creature } from "ts/ts/creature.js"
import { PlantDataBase } from "ts/ts/BruhDataBase"
import { Coordinates } from "ts/ts/Animals/Coordinates.js"
import { SimulationMap } from "ts/ts/SimulationOfLife.js"

export abstract class Plant extends Creature{
        constructor(
            protected satiety: number,
            protected timeToDeath: number,
            protected timeToGrow: number,
            protected coordinates: Coordinates,
            ){
            super(satiety, timeToDeath, coordinates)
            this.timeToGrow = timeToGrow
            this.coordinates = coordinates
        }
        abstract grow<T>(dataBase: PlantDataBase, plant: T, tick: number, map: SimulationMap)

        public getTimeToGrow(): number{
            return this.timeToGrow
        }

        public setTimeToGrow(tick: number){
            this.timeToGrow += tick
        }

        abstract getType();

        abstract setDeath();

        abstract use(animal: any): number

    } 
