import { Creature } from "./creature"
export abstract class Plant extends Creature{
        constructor(
            protected timeToDeath: number,
             protected recoveryTime: number, 
             protected growingSpeed: number
             ){
            super(timeToDeath)
            this.recoveryTime = recoveryTime
            this.growingSpeed = growingSpeed
        }
        public grow(){
        //Cвязать с EventBus и PlantBornEvent
        
        } 

        public getRecoveryTime(): number{
            return this.recoveryTime
        }

        public getGrowingSpeed(): number{
            return this.growingSpeed
        }
    } 
