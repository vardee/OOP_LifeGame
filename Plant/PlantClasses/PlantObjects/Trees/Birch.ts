namespace PlantNamespace{
    export class Birch extends Trees{
        constructor(protected numberOfWood: number, protected recoveryTime: number, protected growingSpeed: number){
            super(growingSpeed, recoveryTime, numberOfWood);
        }
        public grow(): void {
            
        }
    }
}