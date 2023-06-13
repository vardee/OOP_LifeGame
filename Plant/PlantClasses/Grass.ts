import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { GrassTypes } from "../types.js";

    export class Grass extends Plant{
        constructor(
            timeToDeath: number,
             protected satiety: number,
            recoveryTime: number,
            growingSpeed: number,
            coordinates: Coordinates,
            protected type: GrassTypes
               ){
            super(timeToDeath, growingSpeed, recoveryTime, coordinates);
            this.satiety = satiety;
            this.type = type
        }
        public getSatiety(): number{
            return this.satiety
        }
        public grow <T>(dataBase: BruhDataBase, plant: T) {
            
        }
        public getType(){
            return this.type
        }
    }
    