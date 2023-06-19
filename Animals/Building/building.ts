import { Coordinates } from "../../Plant/PlantClasses/Coordinates"
import { BuildingDataBase } from "../../image/BruhDataBase";
import { Human } from "../AnimalsObjects/Humans"
import { HumanDataBase } from "../../image/BruhDataBase";

export class Building{
    constructor(
        private ID: number,
        private owner: Human,
        private amountOfFood: number, 
        private amountOfWood: number,
        private coordinates: Coordinates,
        private type: BuildingTypes
    ){}
    public getOwner():Human{
        return this.owner
    }
    public setOwner(Owner: Human){
        this.owner = Owner;
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
    public getCoordinates(){
        return this.coordinates
    }

    public getID(): number{
        return this.ID
    }
    public getType(): any{
        return this.type
    }
    // public use (animal: any){
    //     const humanDataBase = HumanDataBase.getInstance();
    //     if (animal instanceof Human){
    //         animal.setHungerValue(+(100 - animal.getHungerValue()))
    //     }
    // }
}


export enum BuildingTypes{
    Building = "Building"
}