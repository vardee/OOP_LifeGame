import { Coordinates } from "../Plant/PlantClasses/Coordinates.js";

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
      const randomX = randomStartX + Math.random() * distance;
      const randomY = randomStartY + Math.random() * distance;
      return new Coordinates(Math.round(randomX), Math.round(randomY));
    }
  }