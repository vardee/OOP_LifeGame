import { Animal } from "./AnimalsAbstractClass.js";
import { HumanType } from "../AnimalTypes.js";
import { Sex } from "./sex.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { DataBaseAnimals } from "../../image/BruhDataBase.js";
import { PlantDataBase } from "../../image/BruhDataBase.js";
import { Trees } from "../../Plant/PlantClasses/Trees.js";
import { EuristicCalculation } from "./EuristicCalculation.js";
import { BuildingDataBase } from "../../image/BruhDataBase.js";
import { Building } from "../Building/building.js";
import { BuildingTypes } from "../Building/building.js";
export class Human extends Animal {
    numberOfHouses;
    name;
    surname;
    age;
    woodInHands;
    foodInHands;
    type;
    constructor(numberOfHouses, speed, name, surname, age, woodInHands, foodInHands, 
    //private  house: Building,
    satiety, health, sex, excitement, damage, timeToRest, hungerValue, timetoDeath, coordinates, type) {
        super(speed, satiety, health, sex, excitement, damage, timeToRest, hungerValue, coordinates, timetoDeath);
        this.numberOfHouses = numberOfHouses;
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
                const newAnimal = new Human(0, randomizer.createRandomValue(5, 10), randomizer.generateRandomName(randomizer.createRandomValue(2, 10)), randomizer.generateRandomName(randomizer.createRandomValue(5, 10)), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, tick + randomizer.createRandomValue(10, 20), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), tick + randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 20, '', map), this.getType());
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
    getNumberOfBuildings() {
        return this.numberOfHouses;
    }
    setNumberOfBuildings() {
        this.numberOfHouses++;
    }
    findFood(index) {
        const animalDataBase = DataBaseAnimals.getInstance();
        const plantDataBase = PlantDataBase.getInstance();
        const buildingDataBase = BuildingDataBase.getInstance();
        let plantIndex = 0;
        let animalIndex = 0;
        let buildIndex = 0;
        let last = "plant";
        let euristic;
        const maxValue = 9999999;
        let minimumEuristic = maxValue;
        const euristicCalculation = EuristicCalculation.getInstance();
        for (let i = 0; i < Math.min((Math.min(plantDataBase.getDataBaseSize(), animalDataBase.getDataBaseSize())), buildingDataBase.getDataBaseSize()); i++) {
            const plantObject = plantDataBase.getObject(i);
            if (plantObject instanceof Trees) {
                continue;
            }
            if ((euristic = euristicCalculation.manhattanHeuristic(this, plantDataBase.getObject(i))) < minimumEuristic && plantDataBase.getDataBaseSize() != 0) {
                minimumEuristic = euristic;
                plantIndex = i;
                last = "plant";
            }
            if ((euristic = euristicCalculation.manhattanHeuristic(this, animalDataBase.getObject(i))) < minimumEuristic) {
                minimumEuristic = euristic;
                animalIndex = i;
                last = "animal";
            }
            if ((euristic = euristicCalculation.manhattanHeuristic(this, buildingDataBase.getObject(i))) < minimumEuristic) {
                minimumEuristic = euristic;
                buildIndex = i;
                last = "build";
            }
        }
        if (last = "animal") {
            index = animalIndex;
            this.teleportation(animalDataBase.getObject(index));
        }
        else if (last = "plant") {
            index = plantIndex;
            this.teleportation(plantDataBase.getObject(index));
        }
        else if (last = "build") {
            index = buildIndex;
            this.teleportation(buildingDataBase.getObject(index));
        }
        return index;
    }
    eat() {
        const dataBase = PlantDataBase.getInstance();
        if (this.hungerValue < 40 && dataBase.getDataBaseSize() != 0) {
            let index = this.findFood(0);
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
    createBuilding(dataBase, index, map) {
        const buildingCoordinates = this.getCoordinates();
        //      let objectsAround = this.getObjectsAround(dataBase, buildingCoordinates);
        //       while (objectsAround.length > 0) {
        //         const newBuildingCoordinates = this.getCoordinates();
        //        objectsAround = this.getObjectsAround(dataBase, newBuildingCoordinates);
        //      }
        const randomizer = RandomValues.getInstance();
        const newBuilding = new Building(dataBase.getDataBaseSize() - 1, this, 1, 1, randomizer.createRandomCoordinate(buildingCoordinates.x, buildingCoordinates.y, 1, '', map), BuildingTypes.Building);
        dataBase.addObject(newBuilding);
        console.log("Building");
    }
}
