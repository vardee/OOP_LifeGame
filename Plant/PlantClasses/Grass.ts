namespace PlantNamespace{
    export abstract class Grass extends Plant{
        constructor(protected timeToDeath: number, protected satiety: number, protected recoveryTime: number, protected growingSpeed: number){
            super(timeToDeath, growingSpeed, recoveryTime);
            this.satiety = satiety;
        }
        
        public getSatiety(): number{
            return this.satiety
        }
    }
}