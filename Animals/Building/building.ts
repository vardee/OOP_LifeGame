import { Human } from "../AnimalsObjects/Humans";
import { Coordinates } from "../../Plant/PlantClasses/Coordinates";

export class Building {
    constructor(
        private inVillage: boolean,
        private owner: Human,
        private amountOfFood: number,
        private amountOfWood: number,
        private coordinates: Coordinates,
        private type: BuildingTypes
    ) { }
    public getOwner(): Human {
        return this.owner
    }
    public setOwner(Owner: Human) {
        this.owner = Owner;
    }
    public getAmountOfWood(): number {
        return this.amountOfWood
    }

    public getAmountOfFood(): number {
        return this.amountOfFood
    }

    public setAmountOfFood(amountOfFood: number) {
        this.amountOfFood += amountOfFood
    }

    public setAmountOfWood(amountOfWood: number) {
        this.amountOfWood += amountOfWood
    }
    public getCoordinates() {
        return this.coordinates
    }

    public getInVillage(): boolean{
        return this.inVillage
    }

    public getType(): any {
        return this.type
    }
    public use(human: Human) {
        if (this.amountOfFood > 0) {
            human.setHungerValue(+30)
            this.setAmountOfFood(-30)
        }
    }
}

export enum BuildingTypes {
    Building = "Building"
}
