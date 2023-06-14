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

  public removeDeads(plant: any, index) {
      if (plant.getType().toString() === "Dead") {
        this.plantArray.splice(index, 1);
      }
  }

  public getPlant(index: number): Plant{
      return this.plantArray[index]
  }
  public getPlantDataBaseSize(): number{
    return this.plantArray.length
  }
}

