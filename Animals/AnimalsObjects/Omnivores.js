import { Animal } from "./AnimalsAbstractClass.js";
import { Sex } from "./sex.js";
import { OmnivoresTypes } from "../AnimalTypes.js";
import { DataBaseAnimals } from "../../image/BruhDataBase.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { EuristicCalculation } from "./EuristicCalculation.js";
export class Omnivores extends Animal {
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
                const newAnimal = new Omnivores(randomizer.createRandomValue(1, 4), randomizer.createRandomValue(25, 40), 100, randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, tick + randomizer.createRandomValue(30, 40), randomizer.createRandomValue(60, 80), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), tick + randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 20, '', map), this.getType());
                dataBase.addObject(newAnimal);
                this.setTimeToReproduction(tick);
                break; // Прерываем цикл после первого размножения
            }
        }
    }
    findFood(plantDataBase, index) {
        const animalDataBase = DataBaseAnimals.getInstance();
        let plantIndex = 0;
        let animalIndex = 0;
        let last = "plant";
        let euristic;
        const maxValue = 9999999;
        let minimumEuristic = maxValue;
        for (let i = 0; i < Math.min(plantDataBase.getDataBaseSize(), animalDataBase.getDataBaseSize()); i++) {
            const euristicCalculation = EuristicCalculation.getInstance();
            if ((euristic = euristicCalculation.manhattanHeuristic(this, plantDataBase.getObject(i))) < minimumEuristic)
                minimumEuristic = euristic;
            plantIndex = i;
            last = "plant";
            if ((euristic = euristicCalculation.manhattanHeuristic(this, animalDataBase.getObject(i))) < minimumEuristic)
                minimumEuristic = euristic;
            animalIndex = i;
            last = "animal";
        }
        if (last = "animal") {
            index = animalIndex;
            this.teleportation(animalDataBase.getObject(index));
        }
        else {
            index = animalIndex;
            this.teleportation(plantDataBase.getObject(index));
        }
        return index;
    }
    eat(dataBase) {
        if (this.hungerValue < 40) {
            let index = this.findFood(dataBase, 0);
            dataBase.getObject(index).use(this);
        }
    }
    getType() {
        return this.type;
    }
    setDeath() {
        this.type = OmnivoresTypes.Dead;
    }
    use(animal) {
        animal.setHungerValue(this.satiety);
        this.die(this, "use");
        return this.satiety;
    }
}
