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
    removeDeads(animal) {
        const coordinatesToRemove = animal.getCoordinates();
        for (let i = 0; i < this.animalArray.length; i++) {
            const currentAnimal = this.animalArray[i];
            if (currentAnimal.getCoordinates() === coordinatesToRemove) {
                this.animalArray.splice(i, 1);
                break;
            }
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
    removeDeads(human) {
        const coordinatesToRemove = human.getCoordinates();
        for (let i = 0; i < this.humanArray.length; i++) {
            const currentAnimal = this.humanArray[i];
            if (currentAnimal.getCoordinates() === coordinatesToRemove) {
                this.humanArray.splice(i, 1);
                break;
            }
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
// export class BuildingDataBase  implements DataBase{
//   private static instance: BuildingDataBase;
//   private buildingArray: Building[] = [];
//   private constructor() {}
//   public static getInstance(): BuildingDataBase {
//     if (!BuildingDataBase.instance) {
//       BuildingDataBase.instance = new BuildingDataBase();
//     }
//     return BuildingDataBase.instance;
//   }
//   public addObject(animal: Animal) {
//     this.buildingArray.push(animal);
//   }
//   public removeDeads(building: Building) {
//     const coordinatesToRemove = building.getCoordinates();
//     for (let i = 0; i < this.buildingArray.length; i++) {
//       const currentBuilding = this.buildingArray[i];
//       if (currentBuilding.getCoordinates() === coordinatesToRemove) {
//         this.buildingArray.splice(i, 1);
//         break;
//       }
//     }
//   }
//   public getObject(index: number): Building{
//       return this.buildingArray[index]
//   }
//   public getDataBaseSize(): number{
//     return this.buildingArray.length
//   }
//   public clearAll(){
//     this.buildingArray = [];
//   }
// }
