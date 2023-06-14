import { Plant } from "../Plant/PlantClasses/AbstractPlant.js"

//Singleton

export class BruhDataBase {
  private static instance: BruhDataBase;
  private plantArray: Plant[] = [];

  private constructor() {}

  public static getInstance(): BruhDataBase {
    if (!BruhDataBase.instance) {
      BruhDataBase.instance = new BruhDataBase();
    }
    return BruhDataBase.instance;
  }

  public addPlant(plant: Plant) {
    this.plantArray.push(plant);
  }

  public removePlant(plant: Plant) {
    const coordinatesToRemove = plant.getCoordinates();
    for (let i = 0; i < this.plantArray.length; i++) {
      const currentPlant = this.plantArray[i];
      if (currentPlant.getCoordinates() === coordinatesToRemove) {
        this.plantArray.splice(i, 1);
        break;
      }
    }
  }

  public getPlant(index: number): Plant{
      return this.plantArray[index]
  }
  public getPlantDataBaseSize(): number{
    return this.plantArray.length
  }
}

