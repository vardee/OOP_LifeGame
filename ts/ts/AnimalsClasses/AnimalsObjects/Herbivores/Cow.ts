namespace AnimalNamespace{
    export abstract class Cow extends Herbivores{
        constructor(protected speed: number, protected satiety: number, protected health: number,protected sex: sex, protected damage: number, protected animalID: number, protected timeToRest: number, protected hungerValue: number, protected timeToRestoreMilk: number){
            super(speed,satiety,health,sex,damage,animalID,timeToRest,hungerValue)
            this.timeToRestoreMilk = timeToRestoreMilk
        } 
        public getTimeToRestorMilk(): number{
            return this.timeToRestoreMilk
        }

        public reproduction(): void{

        }
        public giveMilk(){ //Молочка бы сюда

        }
    }
}