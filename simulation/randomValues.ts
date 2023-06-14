import { Coordinates } from "../Plant/PlantClasses/Coordinates.js";
import { BruhDataBase } from "../image/BruhDataBase.js";

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
      randomStartX: number,
      randomStartY: number,
      distance: number
    ): Coordinates {
      const existingCoordinates = this.getExistingCoordinates();
      let randomX = randomStartX + Math.random() * distance;
      let randomY = randomStartY + Math.random() * distance;
    
      // Проверка на совпадение существующих координат
      while (this.coordinatesExist(existingCoordinates, randomX, randomY) || randomX > 99 || randomY > 99) {
        randomX = randomStartX + Math.random() * distance;
        randomY = randomStartY + Math.random() * distance;
      }
    
      return new Coordinates(Math.min(Math.round(randomX), 99), Math.min(Math.round(randomY), 99));
    }
    
    private getExistingCoordinates(): Coordinates[] {
      const existingCoordinates: Coordinates[] = [];
      const database = BruhDataBase.getInstance();
    
      for (let i = 0; i < database.getPlantDataBaseSize(); i++) {
        const plant = database.getPlant(i);
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
