namespace PlantNamespace{
    export class Hawthorn extends Bushes{
        constructor(protected damage: number, protected haveFruit: boolean, protected recoveryTime: number, protected growingSpeed: number){
            super(damage, haveFruit, recoveryTime, growingSpeed);
        }
        public grow(): void {
            
        }
    }
}