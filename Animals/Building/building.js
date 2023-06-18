export class Building {
    ID;
    owner;
    amountOfFood;
    amountOfWood;
    coordinates;
    constructor(ID, owner, amountOfFood, amountOfWood, coordinates) {
        this.ID = ID;
        this.owner = owner;
        this.amountOfFood = amountOfFood;
        this.amountOfWood = amountOfWood;
        this.coordinates = coordinates;
    }
    getOwner() {
        return this.owner;
    }
    getAmountOfWood() {
        return this.amountOfWood;
    }
    getAmountOfFood() {
        return this.amountOfFood;
    }
    setAmountOfFood(amountOfFood) {
        this.amountOfFood += amountOfFood;
    }
    setAmountOfWood(amountOfWood) {
        this.amountOfWood += amountOfWood;
    }
}
export var BuildingTypes;
(function (BuildingTypes) {
    BuildingTypes["Building"] = "Building";
})(BuildingTypes || (BuildingTypes = {}));
