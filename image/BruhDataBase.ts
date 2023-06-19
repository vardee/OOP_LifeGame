import { Plant } from "../Plant/PlantClasses/AbstractPlant"
import { Animal } from "../Animals/AnimalsObjects/AnimalsAbstractClass"
import { Building } from "../Animals/Building/building"
import { Human } from "../Animals/AnimalsObjects/Humans"


interface DataBase{
  addObject (object: any)
  removeDeads (object: any, index:number)
  getObject (index: number)
  getDataBaseSize(): number
  clearAll()
}


export class PlantDataBase implements DataBase{
  private static instance: PlantDataBase;
  private plantArray: Plant[] = [];

  private constructor() {}

  public static getInstance(): PlantDataBase {
    if (!PlantDataBase.instance) {
      PlantDataBase.instance = new PlantDataBase();
    }
    return PlantDataBase.instance;
  }

  public addObject(plant: Plant) {
    this.plantArray.push(plant);
  }

  public removeDeads(plant: any, index) {
      if (plant.getType().toString() === "Dead") {
        this.plantArray.splice(index, 1);
      }
  }

  public getObject(index: number): Plant{
      return this.plantArray[index]
  }
  public getDataBaseSize(): number{
    return this.plantArray.length
  }

  public clearAll(){
    this.plantArray = [];
  }
}

export class DataBaseAnimals  implements DataBase{
  private static instance: DataBaseAnimals;
  private animalArray: Animal[] = [];

  private constructor() {}

  public static getInstance(): DataBaseAnimals {
    if (!DataBaseAnimals.instance) {
      DataBaseAnimals.instance = new DataBaseAnimals();
    }
    return DataBaseAnimals.instance;
  }

  public addObject(animal: Animal) {
    this.animalArray.push(animal);
  }

  public removeDeads(plant: any, index) {
    if (plant.getType().toString() === "Dead") {
      this.animalArray.splice(index, 1);
    }
}
  public getObject(index: number): Animal{
      return this.animalArray[index]
  }
  public getDataBaseSize(): number{
    return this.animalArray.length
  }

  public clearAll(){
    this.animalArray = [];
  }
}

export class HumanDataBase implements DataBase{
  private static instance: HumanDataBase;
  private humanArray: Human[] = [];

  private constructor() {}

  public static getInstance(): HumanDataBase {
    if (!HumanDataBase.instance) {
      HumanDataBase.instance = new HumanDataBase();
    }
    return HumanDataBase.instance;
  }

  public addObject(animal: Human) {
    this.humanArray.push(animal);
  }

  public removeDeads(human: any, index) {
    if (human.getType().toString() === "Dead") {
      this.humanArray.splice(index, 1);
    }
}

  public getObject(index: number): Human{
      return this.humanArray[index]
  }
  public getDataBaseSize(): number{
    return this.humanArray.length
  }

  public clearAll(){
    this.humanArray = [];
  }
}


export class BuildingDataBase implements DataBase{
  private static instance: BuildingDataBase;
  private buildingArray: Building[] = [];

  private constructor() {}

  public static getInstance(): BuildingDataBase {
    if (!BuildingDataBase.instance) {
      BuildingDataBase.instance = new BuildingDataBase();
    }
    return BuildingDataBase.instance;
  }

  public addObject(building: Building) {
    this.buildingArray.push(building);
  }

  public removeDeads(human: any, index) {
    if (human.getType().toString() === "Dead") {
      this.buildingArray.splice(index, 1);
    }
  }

  public getObject(index: number): Building{
      return this.buildingArray[index]
  }
  

  public getDataBaseSize(): number{
    return this.buildingArray.length
  }
  
  public getAllObjects(): Building[] {
    return this.buildingArray;
}

  public clearAll(){
    this.buildingArray = [];
  }
}

