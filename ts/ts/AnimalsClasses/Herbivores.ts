namespace AnimalNamespace{
    export abstract class Herbivores extends Animal{
        constructor(protected speed: number, protected satiety: number, protected health: number,protected sex: sex, protected damage: number, protected animalID: number, protected timeToRest: number, protected hungerValue: number){
            super(speed,satiety,health,sex,damage,animalID,timeToRest,hungerValue)

        }
    
        public findGrass(){

        }
        public eat(){

        }
    }
}

