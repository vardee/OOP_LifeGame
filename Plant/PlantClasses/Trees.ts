import {Plant} from "./AbstractPlant.js";
    export abstract class Trees extends Plant{
        constructor(
            protected timeToDeath: number,
             protected numberOfWood: number,
              protected recoveryTime: number,
               protected growingSpeed: number
            ){
            super(timeToDeath, growingSpeed, recoveryTime);
            this.numberOfWood = numberOfWood;
        }

        public getNumberOfWoods(): number{
            return this.numberOfWood
        }     
    }
