namespace AnimalNamespace{
    export abstract class Hedgehog extends Omnivores{
        constructor(protected speed: number, protected satiety: number, protected health: number,protected sex: sex, protected damage: number, protected animalID: number, protected timeToRest: number, protected hungerValue: number){
            super(speed,satiety,health,sex,damage,animalID,timeToRest,hungerValue)

        } 

        public reproduction(): void{
        }
        public killSomeBody() {
        }
    }
}