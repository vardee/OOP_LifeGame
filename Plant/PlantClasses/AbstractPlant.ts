import { Creature } from "./creature.js"
import { BruhDataBase } from "../../image/BruhDataBase.js"
import { Coordinates } from "./Coordinates.js"

export abstract class Plant extends Creature{
        constructor(
            protected timeToDeath: number,
            protected recoveryTime: number, 
            protected growingSpeed: number,
            protected coordinates: Coordinates,
            ){
            super(timeToDeath)
            this.recoveryTime = recoveryTime
            this.growingSpeed = growingSpeed
            this.coordinates = coordinates
        }
        abstract grow<T>(dataBase: BruhDataBase, plant: T, tick: number)

        public getRecoveryTime(): number{
            return this.recoveryTime
        }

        public getGrowingSpeed(): number{
            return this.growingSpeed
        }

        public getCoordinates(){
            return this.coordinates
        }

        public setGrowingSpeed(tick: number){
            this.growingSpeed += tick
        }

        abstract getType();

        abstract setDeath();

        abstract use<T extends Creature>(plant: T): number

    } 
