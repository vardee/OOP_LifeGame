namespace PlantNamespace{
    export class Spruce extends Trees{
        constructor(protected timeToDeath: number, protected numberOfWood: number, protected recoveryTime: number, protected growingSpeed: number){
            super(timeToDeath, growingSpeed, recoveryTime, numberOfWood);
        }
        public grow(): void {
            
        }
    }
}