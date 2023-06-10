import {Trees} from "/VisualCodeProject/OOP-OOP-2023-OOP2023Team26/Plant/PlantClasses/Trees.js";
    export class Birch extends Trees{
        constructor(protected timeToDeath: number, protected numberOfWood: number, protected recoveryTime: number, protected growingSpeed: number){
            super(timeToDeath, growingSpeed, recoveryTime, numberOfWood);
        }
        public grow(): void {
            
        }
    }