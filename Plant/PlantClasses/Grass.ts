namespace PlantNamespace{
    export abstract class Grass extends Plant{
        constructor(protected satiety: number, protected recoveryTime: number, protected growingSpeed: number){
            super(growingSpeed, recoveryTime);
            this.satiety = satiety;
        }
        
        public getSatiety(): number{
            return this.satiety
        }
    }
}