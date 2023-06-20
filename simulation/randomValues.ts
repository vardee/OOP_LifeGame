import { Coordinates } from "../Plant/PlantClasses/Coordinates.js";
import { DataBaseAnimals, PlantDataBase } from "../image/BruhDataBase.js";
import { SimulationMap } from "./Map.js";

//Singleton

export class RandomValues {
  private static instance: RandomValues;

  private constructor() { }

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
    randomStartX: number,
    randomStartY: number,
    distance: number,
    type: string,
    map: SimulationMap
  ): Coordinates {
    let randomX = randomStartX + Math.random() * distance;
    let randomY = randomStartY + Math.random() * distance;


    if (type !== "plant") {
      const existingCoordinates = this.getExistingCoordinates();
      while (this.coordinatesExist(existingCoordinates, randomX, randomY) || randomX >= map.getSize() || randomY >= map.getSize()) {
        randomX = randomStartX + Math.random() * distance;
        randomY = randomStartY + Math.random() * distance;
      }
    }

    return new Coordinates(Math.min(Math.round(randomX), map.getSize() - 1), Math.min(Math.round(randomY), map.getSize() - 1));
  }

  private getExistingCoordinates(): Coordinates[] {
    const existingCoordinates: Coordinates[] = [];
    const database = DataBaseAnimals.getInstance();

    for (let i = 0; i < database.getDataBaseSize(); i++) {
      const animal = database.getObject(i);
      existingCoordinates.push(animal.getCoordinates());
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

  public generateRandomName(length: number): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let name = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      const character = letters.charAt(randomIndex);
      name += character;
    }

    return name;
  }
}




