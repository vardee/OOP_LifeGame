export class PlantDataBase {
    static instance;
    plantArray = [];
    constructor() { }
    static getInstance() {
        if (!PlantDataBase.instance) {
            PlantDataBase.instance = new PlantDataBase();
        }
        return PlantDataBase.instance;
    }
    addObject(plant) {
        this.plantArray.push(plant);
    }
    removeDeads(plant, index) {
        if (plant.getType().toString() === "Dead") {
            this.plantArray.splice(index, 1);
        }
    }
    getObject(index) {
        return this.plantArray[index];
    }
    getDataBaseSize() {
        return this.plantArray.length;
    }
    clearAll() {
        this.plantArray = [];
    }
}
export class DataBaseAnimals {
    static instance;
    animalArray = [];
    constructor() { }
    static getInstance() {
        if (!DataBaseAnimals.instance) {
            DataBaseAnimals.instance = new DataBaseAnimals();
        }
        return DataBaseAnimals.instance;
    }
    addObject(animal) {
        this.animalArray.push(animal);
    }
    removeDeads(plant, index) {
        if (plant.getType().toString() === "Dead") {
            this.animalArray.splice(index, 1);
        }
    }
    getObject(index) {
        return this.animalArray[index];
    }
    getDataBaseSize() {
        return this.animalArray.length;
    }
    clearAll() {
        this.animalArray = [];
    }
}
export class HumanDataBase {
    static instance;
    humanArray = [];
    constructor() { }
    static getInstance() {
        if (!HumanDataBase.instance) {
            HumanDataBase.instance = new HumanDataBase();
        }
        return HumanDataBase.instance;
    }
    addObject(animal) {
        this.humanArray.push(animal);
    }
    removeDeads(human, index) {
        if (human.getType().toString() === "Dead") {
            this.humanArray.splice(index, 1);
        }
    }
    getObject(index) {
        return this.humanArray[index];
    }
    getDataBaseSize() {
        return this.humanArray.length;
    }
    clearAll() {
        this.humanArray = [];
    }
}
export class BuildingDataBase {
    static instance;
    buildingArray = [];
    constructor() { }
    static getInstance() {
        if (!BuildingDataBase.instance) {
            BuildingDataBase.instance = new BuildingDataBase();
        }
        return BuildingDataBase.instance;
    }
    addObject(building) {
        this.buildingArray.push(building);
    }
    removeDeads(human, index) {
        if (human.getType().toString() === "Dead") {
            this.buildingArray.splice(index, 1);
        }
    }
    getObject(index) {
        return this.buildingArray[index];
    }
    getDataBaseSize() {
        return this.buildingArray.length;
    }
    getAllObjects() {
        return this.buildingArray;
    }
    clearAll() {
        this.buildingArray = [];
    }
}
