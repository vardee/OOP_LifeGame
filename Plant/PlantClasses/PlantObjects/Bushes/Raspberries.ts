namespace PlantNamespace{
    export class Raspberries extends Bushes{
        constructor(protected timeToDeath: number, protected damage: number, protected haveFruit: boolean, protected recoveryTime: number, protected growingSpeed: number){
            super(timeToDeath, damage, haveFruit, recoveryTime, growingSpeed);
        }
        public grow(): void {
            
        }
    }
}