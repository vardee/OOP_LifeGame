import {Plant} from "./AbstractPlant.js";
    export abstract class Bushes extends Plant{
        constructor(
            protected timeToDeath: number, 
            protected damage: number, protected haveFruit: boolean,
             protected recoveryTime: number,
              protected growingSpeed: number
              ){
            super(timeToDeath, recoveryTime, growingSpeed)
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
    }
