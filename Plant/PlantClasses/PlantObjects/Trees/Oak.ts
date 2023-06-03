namespace PlantNamespace{
    export class Oak extends Trees{
        constructor(protected numberOfWood: number, protected recoveryTime: number, protected growingSpeed: number){
            super(growingSpeed, recoveryTime, numberOfWood);
        }
        public grow(): void {
            
        }
    }
}