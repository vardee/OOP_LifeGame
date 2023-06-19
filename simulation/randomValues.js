import { Coordinates } from "../Plant/PlantClasses/Coordinates.js";
import { DataBaseAnimals } from "../image/BruhDataBase.js";
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
    createRandomCoordinate(randomStartX, randomStartY, distance, type, map) {
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
    getExistingCoordinates() {
        const existingCoordinates = [];
        const database = DataBaseAnimals.getInstance();
        for (let i = 0; i < database.getDataBaseSize(); i++) {
            const animal = database.getObject(i);
            existingCoordinates.push(animal.getCoordinates());
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
    generateRandomName(length) {
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
