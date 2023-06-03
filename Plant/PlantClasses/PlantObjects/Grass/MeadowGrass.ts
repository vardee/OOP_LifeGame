namespace PlantNamespace{
    export class MeadowGrass extends Grass{
        constructor(protected satiety: number, protected recoveryTime: number, protected growingSpeed: number){
            super(growingSpeed, recoveryTime, satiety);
        }
        public grow(): void {
            
        }
    }
}