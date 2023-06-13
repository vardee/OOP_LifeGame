import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { GrassTypes } from "../types.js";

    export class Grass extends Plant{
        constructor(
            protected timeToDeath: number,
             protected satiety: number,
              protected recoveryTime: number,
               protected growingSpeed: number,
               protected coordinates: Coordinates,
               protected type: GrassTypes
               ){
            super(timeToDeath, growingSpeed, recoveryTime, coordinates);
            this.satiety = satiety;
        }
        public getSatiety(): number{
            return this.satiety
        }
        public grow(dataBase: BruhDataBase) {
            
        }
        public getType(){
            return this.type
        }
    }
    