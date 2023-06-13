import { Animal } from "../../../jsFiles/AnimalsAbstractClass.js"
import { sex } from "../sex.js"
export abstract class Herbivores extends Animal{
    constructor(
        speed: number,
        satiety: number,
        health: number,
        sex: number,
        damage: number,
        animalID: number,
        timeToRest: number, 
        hungerValue: number){
        super(speed,satiety,health,sex,damage,animalID,timeToRest,hungerValue)

    }
    
    public findGrass(){

    }
    public eat(){

    }
}


