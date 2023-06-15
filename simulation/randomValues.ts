import { Coordinates } from "../ts/ts/Animals/Coordinates.js";
import { DataBaseAnimals } from "../ts/ts/DataBaseAnimals.js";
import { SimulationMap } from "ts/ts/SimulationOfLife.js";

//Singleton

export class RandomValues {
  private static instance: RandomValues;

  private constructor() {}

  public static getInstance(): RandomValues {
    if (!RandomValues.instance) {
      RandomValues.instance = new RandomValues();
    }
    return RandomValues.instance;
  }

  public createRandomValue(minimum: number, maximum: number): number {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
  }

  public createRandomCoordinate(
    dataBase: any,
    randomStartX: number,
    randomStartY: number,
    distance: number,
    type: string,
    map: SimulationMap
  ): Coordinates {
    let randomX = randomStartX + Math.random() * distance;
    let randomY = randomStartY + Math.random() * distance;
    
  
    if (type != "plant"){
      const existingCoordinates = this.getExistingCoordinates(dataBase);
     while (this.coordinatesExist(existingCoordinates, randomX, randomY) || randomX > map.getSize() || randomY > map.getSize()) {
      randomX = randomStartX + Math.random() * distance;
      randomY = randomStartY + Math.random() * distance;
    }
  }
  
    return new Coordinates(Math.min(Math.round(randomX), map.getSize()), Math.min(Math.round(randomY), map.getSize()));
  }
  
  private getExistingCoordinates(dataBase: any): Coordinates[] {
    const existingCoordinates: Coordinates[] = [];
  
    for (let i = 0; i < dataBase.getDataBaseSize(); i++) {
      const plant = dataBase.getObject(i);
      existingCoordinates.push(plant.getCoordinates());
    }
  
    return existingCoordinates;
  }
  
  private coordinatesExist(existingCoordinates: Coordinates[], x: number, y: number): boolean {
    for (const coord of existingCoordinates) {
      if (coord.x === Math.round(x) && coord.y === Math.round(y)) {
        return true;
      }
    }
    return false;
  }
}
