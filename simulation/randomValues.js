import { Coordinates } from "../ts/ts/Animals/Coordinates.js";
import { DataBaseAnimals } from "../ts/ts/DataBaseAnimals.js";
//Singleton
export class RandomValues {
    static instance;
    constructor() { }
    static getInstance() {
        if (!RandomValues.instance) {
            RandomValues.instance = new RandomValues();
        }
        return RandomValues.instance;
    }
    createRandomValue(minimum, maximum) {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    }
    createRandomCoordinate(randomStartX, randomStartY, distance) {
        const existingCoordinates = this.getExistingCoordinates();
        let randomX = randomStartX + Math.random() * distance;
        let randomY = randomStartY + Math.random() * distance;
        // Проверка на совпадение существующих координат
        while (this.coordinatesExist(existingCoordinates, randomX, randomY) || randomX >= 100 || randomY >= 100) {
            randomX = randomStartX + Math.random() * distance;
            randomY = randomStartY + Math.random() * distance;
        }
        return new Coordinates(Math.min(Math.round(randomX), 99), Math.min(Math.round(randomY), 99));
    }
    getExistingCoordinates() {
        const existingCoordinates = [];
        const database = DataBaseAnimals.getInstance();
        for (let i = 0; i < database.getAnimalDataBaseSize(); i++) {
            const plant = database.getAnimal(i);
            existingCoordinates.push(plant.getCoordinates());
        }
        return existingCoordinates;
    }
    coordinatesExist(existingCoordinates, x, y) {
        for (const coord of existingCoordinates) {
            if (coord.x === Math.round(x) && coord.y === Math.round(y)) {
                return true;
            }
        }
        return false;
    }
}
