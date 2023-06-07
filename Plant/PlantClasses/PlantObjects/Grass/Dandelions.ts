namespace PlantNamespace{
    export class Dandelions extends Grass{
        constructor(protected timeToDeath: number, protected satiety: number, protected recoveryTime: number, protected growingSpeed: number){
            super(timeToDeath, growingSpeed, recoveryTime, satiety);
        }
        public grow(): void {
            
        }
    }
}