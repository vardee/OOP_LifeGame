namespace PlantNamespace{
    export class Spruce extends Trees{
        constructor(protected numberOfWood: number, protected recoveryTime: number, protected growingSpeed: number){
            super(growingSpeed, recoveryTime, numberOfWood);
        }
        public grow(): void {
            
        }
    }
}