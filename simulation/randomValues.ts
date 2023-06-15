import { Coordinates } from "../Plant/PlantClasses/Coordinates.js";
import { PlantDataBase } from "../image/BruhDataBase.js";

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
      distance: number,
      type: string,
    ): Coordinates {
      let randomX = randomStartX + Math.random() * distance;
      let randomY = randomStartY + Math.random() * distance;
    
      if (type != "plant"){
        const existingCoordinates = this.getExistingCoordinates();
       while (this.coordinatesExist(existingCoordinates, randomX, randomY) || randomX > 100 || randomY > 100) {
        randomX = randomStartX + Math.random() * distance;
        randomY = randomStartY + Math.random() * distance;
      }
    }
    
      return new Coordinates(Math.min(Math.round(randomX), 100), Math.min(Math.round(randomY), 100));
    }
    
    private getExistingCoordinates(): Coordinates[] {
      const existingCoordinates: Coordinates[] = [];
      const database = PlantDataBase.getInstance();
    
      for (let i = 0; i < database.getDataBaseSize(); i++) {
        const plant = database.getObject(i);
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
