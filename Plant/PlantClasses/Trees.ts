import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { TreeTypes } from "../types.js";

    export  class Trees extends Plant{
        constructor(
            protected timeToDeath: number,
             protected numberOfWood: number,
              protected recoveryTime: number,
               protected growingSpeed: number,
               protected coordinates: Coordinates,
               protected type: TreeTypes,
            ){
            super(timeToDeath, growingSpeed, recoveryTime, coordinates);
            this.numberOfWood = numberOfWood;
        }

        public getNumberOfWoods(): number{
            return this.numberOfWood
        } 
        public grow<T>(dataBase: BruhDataBase, plant: T) {
            
        }
        public getType(){
            return this.type
        }
    }
