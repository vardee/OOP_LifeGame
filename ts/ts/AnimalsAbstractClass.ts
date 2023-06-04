namespace AnimalNamespace{
    export abstract class Animal{
        constructor(protected speed: number, protected satiety: number, protected health: number, protected sex: sex , protected damage: number, protected animalID: number, protected timeToRest: number, protected hungerValue: number){
            this.speed = speed
            this.satiety = satiety
            this.health = health
            this.sex = sex
            this.damage = damage
            this.animalID = animalID
            this.timeToRest = timeToRest
            this.hungerValue = hungerValue
        }

        public eat(){
        } 

        public reproduction(){
        } 

        public sleep(){
        } 

        public move(){
        } 

        public defence(){
        } 

        public getSpeed(): number{
            return this.speed
        }

        public getSatiety(): number{
            return this.satiety
        }
        public getHealth(): number{
            return this.health
        }
        public getDamege(): number{
            return this.damage
        }
        public getAnimalID(): number{
            return this.animalID
        }
        public getTimeToRest(): number{
            return this.timeToRest
        }
        public getHungerValue(): number{
            return this.hungerValue
        }
    } 
}
