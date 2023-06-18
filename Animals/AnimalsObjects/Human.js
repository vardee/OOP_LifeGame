import { Animal } from "./AnimalsAbstractClass.js";
import { Sex } from "./sex.js";
import { HumanType } from "../AnimalTypes.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { EuristicCalculation } from "./EuristicCalculation.js";
import { Trees } from "../../Plant/PlantClasses/Trees.js";
import { DataBaseAnimals } from "../../image/BruhDataBase.js";
export class Human extends Animal {
    name;
    surname;
    age;
    woodInHands;
    foodInHands;
    type;
    constructor(speed, name, surname, age, woodInHands, foodInHands, 
    //private  house: Building,
    satiety, health, sex, excitement, damage, timeToRest, hungerValue, timetoDeath, coordinates, type) {
        super(speed, satiety, health, sex, excitement, damage, timeToRest, hungerValue, coordinates, timetoDeath);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.woodInHands = woodInHands;
        this.foodInHands = foodInHands;
        this.type = type;
        this.age = age;
        this.name = name;
        this.surname = surname;
        this.woodInHands = woodInHands;
        this.foodInHands = foodInHands;
    }
    reproduction(dataBase, tick, map) {
        const animalDataBaseSize = dataBase.getDataBaseSize();
        for (let i = 0; i < animalDataBaseSize; i++) {
            if ((dataBase.getObject(i).getType() == this.type) && (tick === dataBase.getObject(i).getTimeToReproduction() && tick === this.timeToReproduction) && (dataBase.getObject(i).getSex() == this.sex)) {
                this.teleportation(dataBase.getObject(i));
                const randomizer = RandomValues.getInstance();
                const newAnimal = new Human(randomizer.createRandomValue(5, 10), randomizer.generateRandomName(randomizer.createRandomValue(2, 10)), randomizer.generateRandomName(randomizer.createRandomValue(5, 10)), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, randomizer.createRandomValue(30, 40), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 20, '', map), this.getType());
                dataBase.addObject(newAnimal);
                this.setTimeToReproduction(tick);
                break; // Прерываем цикл после первого размножения
            }
        }
    }
    getName() {
        return this.name;
    }
    getSurName() {
        return this.surname;
    }
    getAge() {
        return this.age;
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
            const plantObject = plantDataBase.getObject(i);
            if (plantObject instanceof Trees) { // Skip objects belonging to the Tree class
                continue;
            }
            if ((euristic = euristicCalculation.manhattanHeuristic(this, plantObject)) < minimumEuristic) {
                minimumEuristic = euristic;
                plantIndex = i;
                last = "plant";
            }
            const animalObject = animalDataBase.getObject(i);
            if ((euristic = euristicCalculation.manhattanHeuristic(this, animalObject)) < minimumEuristic) {
                minimumEuristic = euristic;
                animalIndex = i;
                last = "animal";
            }
        }
        if (last === "animal") {
            index = animalIndex;
            this.teleportation(animalDataBase.getObject(index));
        }
        else {
            index = plantIndex;
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
        this.type = HumanType.Dead;
    }
    getWoodInHands() {
        return this.woodInHands;
    }
    getWood(dataBase) {
        if (this.woodInHands < 100) {
            let index = this.findWood(dataBase, 0);
            dataBase.getObject(index).use(this);
        }
    }
    use(animal) {
        animal.setHungerValue(this.satiety);
        this.die(this, "use");
        return this.satiety;
    }
    findWood(dataBase, index) {
        const randomizer = RandomValues.getInstance();
        index = randomizer.createRandomValue(0, dataBase.getDataBaseSize() - 1);
        if (dataBase.getObject(index) instanceof Trees) {
            this.teleportation(dataBase.getObject(index));
        }
        return index;
    }
    setCountOfWood(countOfWood) {
        this.woodInHands += countOfWood;
    }
}
