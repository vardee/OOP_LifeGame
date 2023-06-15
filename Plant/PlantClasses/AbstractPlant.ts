import { Creature } from "./creature.js"
import { PlantDataBase } from "../../image/BruhDataBase.js"
import { Coordinates } from "./Coordinates.js"

export abstract class Plant extends Creature{
        constructor(
            protected timeToDeath: number,
            protected growingSpeed: number,
            protected coordinates: Coordinates,
            ){
            super(timeToDeath)
            this.growingSpeed = growingSpeed
            this.coordinates = coordinates
        }
        abstract grow<T>(dataBase: PlantDataBase, plant: T, tick: number)

        public getTimeToGrow(): number{
            return this.growingSpeed
        }

        public getCoordinates(){
            return this.coordinates
        }

        public setTimeToGrow(tick: number){
            this.growingSpeed += tick
        }

        abstract getType();

        abstract setDeath();

        abstract use<T extends Creature>(plant: T): number

    } 
