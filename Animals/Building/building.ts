import { Coordinates } from "../../Plant/PlantClasses/Coordinates"
import { Human } from "../AnimalsObjects/Human"

export class Building{
    constructor(
        private ID: number,
        private owner: Human,
        private amountOfFood: number, 
        private amountOfWood: number,
        private coordinates: Coordinates,
    ){}
    public getOwner():Human{
        return this.owner
    }
    public getAmountOfWood(): number{
        return this.amountOfWood
    }

    public getAmountOfFood(): number{
        return this.amountOfFood
    }

    public setAmountOfFood(amountOfFood: number){
        this.amountOfFood += amountOfFood
    }

    public setAmountOfWood(amountOfWood: number){
        this.amountOfWood += amountOfWood
    }
}


export enum BuildingTypes{
    Building = "Building"
}