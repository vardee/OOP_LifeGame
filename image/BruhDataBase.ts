import { Plant } from "../Plant/PlantClasses/AbstractPlant"
import { Animal } from "../Animals/AnimalsObjects/AnimalsAbstractClass"


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

  public removeDeads(animal: Animal) {
    const coordinatesToRemove = animal.getCoordinates();
    for (let i = 0; i < this.animalArray.length; i++) {
      const currentAnimal = this.animalArray[i];
      if (currentAnimal.getCoordinates() === coordinatesToRemove) {
        this.animalArray.splice(i, 1);
        break;
      }
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

