import { Animal } from "../AnimalsAbstractClass.js";
import { sex } from "../../sex.js";
import { RandomValues } from "../../../../simulation/randomValues.js";
export class Herbivores extends Animal {
    type;
    constructor(speed, satiety, health, sex, excitement, damage, timeToRest, hungerValue, timetoDeath, coordinates, type) {
        super(speed, satiety, health, sex, excitement, damage, timeToRest, hungerValue, coordinates, timetoDeath);
        this.type = type;
    }
    reproduction(dataBase, tick) {
        const animalDataBaseSize = dataBase.getAnimalDataBaseSize();
        for (let i = 0; i < animalDataBaseSize; i++) {
            if ((dataBase.getAnimal(i).getType() == this.type) && (tick === dataBase.getAnimal(i).getTimeToReproduction() && tick === this.timeToReproduction) && (dataBase.getAnimal(i).getSex() == this.sex)) {
                console.log("asdasdasdasdasd");
                this.teleportation(dataBase.getAnimal(i));
                const randomizer = RandomValues.getInstance();
                const newAnimal = new Herbivores(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(100, 100), 100, randomizer.createRandomValue(0, 1) === 0 ? sex.female : sex.male, tick + randomizer.createRandomValue(100, 100), randomizer.createRandomValue(100, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), tick + randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 1), this.getType());
                dataBase.addAnimal(newAnimal);
                this.setTimeToReproduction(tick);
                break; // Прерываем цикл после первого размножения
            }
        }
    }
    findGrass() {
    }
    eat() {
    }
    getType() {
        return this.type;
    }
}
