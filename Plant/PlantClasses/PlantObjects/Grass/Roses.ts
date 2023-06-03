namespace PlantNamespace{
    export class Roses extends Grass{
        constructor(protected satiety: number, protected recoveryTime: number, protected growingSpeed: number){
            super(growingSpeed, recoveryTime, satiety);
        }
        public grow(): void {
            
        }
    }
}