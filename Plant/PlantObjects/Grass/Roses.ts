import {Grass} from "/VisualCodeProject/OOP-OOP-2023-OOP2023Team26/Plant/PlantClasses/Grass.js";
    export class Roses extends Grass{
        constructor(protected timeToDeath: number, protected satiety: number, protected recoveryTime: number, protected growingSpeed: number){
            super(timeToDeath, growingSpeed, recoveryTime, satiety);
        }
        public grow(): void {
            
        }
    }
