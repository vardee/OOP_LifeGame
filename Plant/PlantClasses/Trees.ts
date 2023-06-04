namespace PlantNamespace{
    export abstract class Trees extends Plant{
        constructor(protected numberOfWood: number, protected recoveryTime: number, protected growingSpeed: number){
            super(growingSpeed, recoveryTime);
            this.numberOfWood = numberOfWood;
        }

        public getNumberOfWoods(): number{
            return this.numberOfWood
        }
        
    }
}