import { Creature } from "./creature.js"
import { PlantDataBase } from "../../image/BruhDataBase.js"
import { Coordinates } from "./Coordinates.js"
import { SimulationMap } from "../../simulation/Map.js"

export abstract class Plant extends Creature{
        constructor(
            protected timeToDeath: number,
            protected timeToGrow: number,
            protected coordinates: Coordinates,
            ){
            super(timeToDeath, coordinates)
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
