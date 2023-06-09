import {Bushes} from "/VisualCodeProject/OOP-OOP-2023-OOP2023Team26/Plant/PlantClasses/Bushes";
    export class Raspberries extends Bushes{
        constructor(protected timeToDeath: number,
             protected damage: number,
              protected haveFruit: boolean,
               protected recoveryTime: number,
                protected growingSpeed: number
                ){
            super(timeToDeath, damage, haveFruit, recoveryTime, growingSpeed);
        }
        public grow(): void {
            
        }
    }
