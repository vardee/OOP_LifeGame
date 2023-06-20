export class Building {
    ID;
    owner;
    amountOfFood;
    amountOfWood;
    coordinates;
    type;
    constructor(ID, owner, amountOfFood, amountOfWood, coordinates, type) {
        this.ID = ID;
        this.owner = owner;
        this.amountOfFood = amountOfFood;
        this.amountOfWood = amountOfWood;
        this.coordinates = coordinates;
        this.type = type;
    }
    getOwner() {
        return this.owner;
    }
    setOwner(Owner) {
        this.owner = Owner;
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
    getCoordinates() {
        return this.coordinates;
    }
    getID() {
        return this.ID;
    }
    getType() {
        return this.type;
    }
    use(animal) {
        animal.setHungerValue(+(100 - animal.getHungerValue()));
        this.setAmountOfFood(-(100 - animal.getHungerValue()));
    }
}
export var BuildingTypes;
(function (BuildingTypes) {
    BuildingTypes["Building"] = "Building";
})(BuildingTypes || (BuildingTypes = {}));
