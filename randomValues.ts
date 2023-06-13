import { Coordinates } from "./Plant/PlantClasses/Coordinates.js";

export class RandomValues{
    public createRandomValue(minimum: number, maximum: number){
        return Math.random() * (maximum - minimum) + minimum;
    }

    public createRandomCoordinate(randomStartX: number, randomStartY: number, distance): Coordinates{
        const randomX = randomStartX + Math.random() * distance;
        const randomY = randomStartY + Math.random() * distance;
        return new Coordinates(Math.round(randomX), Math.round(randomY));
    }
}