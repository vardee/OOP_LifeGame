import { Predator } from "../../Predator.js"
import { sex } from "../../../sex.js"
export abstract class Crocodile extends Predator{
    constructor(
        speed: number, 
        satiety: number, 
        health: number,
        sex: sex, 
        damage: number, 
        animalID: number, 
        timeToRest: number, 
        hungerValue: number){
            super(speed,satiety,health,sex,damage,animalID,timeToRest,hungerValue)

    } 

    public reproduction(): void{

    }
    public killSomeBody() {
            
    }
}
