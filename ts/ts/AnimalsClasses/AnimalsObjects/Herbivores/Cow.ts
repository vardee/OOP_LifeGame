import { Herbivores } from "../../Herbivores.js"
import { sex } from "../../../sex.js"
export abstract class Cow extends Herbivores{
    constructor(
         speed: number, 
         satiety: number, 
         health: number,
         sex: sex, 
         damage: number, 
         animalID: number, 
         timeToRest: number, 
         hungerValue: number, 
        protected timeToRestoreMilk: number){
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