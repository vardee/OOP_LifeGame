import { Trees } from "../../PlantClasses/Trees";


export class Spruce extends Trees{
    constructor(
        protected timeToDeath: number, 
        protected numberOfWood: number, 
        protected recoveryTime: number,          
        protected growingSpeed: number,
            private color: string
            ){
            super(timeToDeath, growingSpeed, recoveryTime, numberOfWood);
        }
        public grow(): void {
            
        }

        public getColor(): string{
            return this.color
        }
    }
