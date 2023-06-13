import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { BushTypes } from "../types.js";


    export class Bushes extends Plant{
        constructor(
            timeToDeath: number, 
            protected damage: number,
             recoveryTime: number,
              growingSpeed: number,
              coordinates: Coordinates,
              protected type: BushTypes
              ){
            super(timeToDeath, recoveryTime, growingSpeed, coordinates)
            this.damage = damage;
            this.type = type
        }
    
        public dropFruit(){} //Нужно подвязать сюда Fruit

        public getDamage(): number{
            return this.damage
        }

        public grow(dataBase: BruhDataBase) {
            
        }
        public getType() {
            return this.type
        }
    }
