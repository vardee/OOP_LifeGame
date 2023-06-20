import { Animal } from "./AnimalsAbstractClass.js";
import { Sex } from "./sex.js";
import { OmnivoresTypes } from "../AnimalTypes.js";
import { DataBaseAnimals } from "../../image/BruhDataBase.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { EuristicCalculation } from "./EuristicCalculation.js";
import { PlantDataBase } from "../../image/BruhDataBase.js";
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
    findFood(index) {
        const animalDataBase = DataBaseAnimals.getInstance();
        const plantDataBase = PlantDataBase.getInstance();
        let plantIndex = 0;
        let animalIndex = 0;
        let last = "plant";
        let euristic;
        const maxValue = 9999999;
        let minimumEuristic = maxValue;
        for (let i = 0; i < Math.min(plantDataBase.getDataBaseSize(), animalDataBase.getDataBaseSize()); i++) {
            const euristicCalculation = EuristicCalculation.getInstance();
            if ((euristic = euristicCalculation.manhattanHeuristic(this, plantDataBase.getObject(i))) < minimumEuristic && plantDataBase.getDataBaseSize() != 0)
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
            animalDataBase.getObject(index).use(this);
        }
        else {
            index = plantIndex;
            this.teleportation(plantDataBase.getObject(index));
            plantDataBase.getObject(index).use(this);
        }
    }
    eat() {
        const plantDataBase = PlantDataBase.getInstance();
        const animalDataBase = DataBaseAnimals.getInstance();
        if (this.hungerValue < 40 && (plantDataBase.getDataBaseSize() != 0 || animalDataBase.getDataBaseSize() != 0)) {
            this.findFood(0);
        }
    }
    getType() {
        return this.type;
    }
    setDeath() {
        this.type = OmnivoresTypes.Dead;
    }
    overrideuse(animal) {
        animal.setHungerValue(this.satiety);
        this.die(this, "use");
    }
    use(animal) {
        animal.setHungerValue(this.satiety);
        this.die(this, "use");
    }
}
