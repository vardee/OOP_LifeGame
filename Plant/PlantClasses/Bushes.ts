import { BruhDataBase } from "../../image/BruhDataBase.js";
import {Plant} from "./AbstractPlant.js";
import { Coordinates } from "./Coordinates.js";
import { BushTypes } from "../types.js";


    export class Bushes extends Plant{
        constructor(
            protected timeToDeath: number, 
            protected damage: number, protected haveFruit: boolean,
             protected recoveryTime: number,
              protected growingSpeed: number,
              protected coordinates: Coordinates,
              protected type: BushTypes
              ){
            super(timeToDeath, recoveryTime, growingSpeed, coordinates)
            this.damage = damage;
            this.haveFruit = haveFruit;
        }
    
        public dropFruit(){} //Нужно подвязать сюда Fruit

        public getDamage(): number{
            return this.damage
        }

        public getHaveFruit(): boolean{
            return this.haveFruit
        }
        public grow(dataBase: BruhDataBase) {
            
        }
        public getType() {
            return this.type
        }
    }
