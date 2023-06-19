import { Animal } from "./AnimalsAbstractClass.js";
import { Sex } from "./sex.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { HerbivoresTypes } from "../AnimalTypes.js";
import { PlantDataBase } from "../../image/BruhDataBase.js";
export class Herbivores extends Animal {
    type;
    constructor(speed, satiety, health, sex, excitement, damage, timeToRest, hungerValue, timetoDeath, coordinates, type) {
        super(speed, satiety, health, sex, excitement, damage, timeToRest, hungerValue, coordinates, timetoDeath);
        this.type = type;
    }
    reproduction(dataBase, tick, map) {
        const animalDataBaseSize = dataBase.getDataBaseSize();
        for (let i = 0; i < animalDataBaseSize; i++) {
            if ((dataBase.getObject(i).getType() == this.type) && (tick === dataBase.getObject(i).getTimeToReproduction() && tick === this.timeToReproduction) && (dataBase.getObject(i).getSex() == this.sex)) {
                this.teleportation(dataBase.getObject(i));
                const randomizer = RandomValues.getInstance();
                const newAnimal = new Herbivores(randomizer.createRandomValue(1, 4), randomizer.createRandomValue(25, 40), 100, randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, tick + randomizer.createRandomValue(20, 40), randomizer.createRandomValue(20, 60), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), tick + randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 20, '', map), this.getType());
                dataBase.addObject(newAnimal);
                this.setTimeToReproduction(tick);
                break; // Прерываем цикл после первого размножения
            }
        }
    }
    eat() {
        let dataBase = PlantDataBase.getInstance();
        if (this.hungerValue < 40 && dataBase.getDataBaseSize() != 0) {
            let index = this.findFood(dataBase, 0);
            dataBase.getObject(index).use(this);
        }
    }
    getType() {
        return this.type;
    }
    findFood(dataBase, index) {
        const randomizer = RandomValues.getInstance();
        index = randomizer.createRandomValue(0, dataBase.getDataBaseSize() - 1);
        this.teleportation(dataBase.getObject(index));
        return index;
    }
    use(animal) {
        animal.setHungerValue(this.satiety);
        this.die(this, "use");
    }
    setDeath() {
        this.type = HerbivoresTypes.Dead;
    }
}
