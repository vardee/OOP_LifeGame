import { Plant } from "../Plant/PlantClasses/AbstractPlant.js"


interface DataBase{
  addObject (object: any)
  removeDeads (object: any, index:number)
  getObject (index: number)
  getDataBaseSize(): number
  clearAll()
}


//Singleton

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



// export class AnimalDataBase implements DataBase{

//   private animalArray: Animals[] = [];

//    public addObject(plant: Animals) {
//     this.animalArray.push(plant);
//   }

//   public removeDeads(animal: any, index) {
//       if (animal.getType().toString() === "Dead") {
//         this.animalArray.splice(index, 1);
//       }
//   }

//   public getObject(index: number): Animals{
//       return this.animalArray[index]
//   }
//   public getDataBaseSize(): number{
//     return this.animalArray.length
//   }
// }

