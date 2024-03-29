import { Animal } from "./AnimalsAbstractClass.js";
import { Coordinates } from "../../Plant/PlantClasses/Coordinates.js";
import { HumanType } from "../AnimalTypes.js";
import { HumanDataBase } from "../../image/BruhDataBase.js";
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
    constructor(
        private numberOfHouses: number,
        speed: number,
        private name: string,
        private surname: string,
        private woodInHands: number,
        private foodInHands: number,
        satiety: number,
        health: number,
        sex: Sex,
        excitement: number,
        damage: number,
        timeToRest: number,
        hungerValue: number,
        timetoDeath: number,
        coordinates: Coordinates,
        protected type: HumanType) {
        super(speed, satiety, health, sex, excitement, damage, timeToRest, hungerValue, coordinates, timetoDeath)
        this.name = name;
        this.surname = surname;
        this.woodInHands = woodInHands;
        this.foodInHands = foodInHands;
    }
    public override reproduction(dataBase: HumanDataBase, tick: number, map) {
        const animalDataBaseSize = dataBase.getDataBaseSize();
        for (let i = 0; i < animalDataBaseSize; i++) {
            if ((dataBase.getObject(i).getType() == this.type) && (tick === dataBase.getObject(i).getTimeToReproduction() && tick === this.timeToReproduction) && (dataBase.getObject(i).getSex() == this.sex)) {
                this.teleportation(dataBase.getObject(i));

                const randomizer = RandomValues.getInstance();

                const newAnimal = new Human(
                    0,
                    randomizer.createRandomValue(5, 10),
                    randomizer.generateRandomName(randomizer.createRandomValue(2, 10)),
                    this.surname,
                    0,
                    0,
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male,
                    tick + randomizer.createRandomValue(10, 20),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(200, 300),
                    tick + randomizer.createRandomValue(100, 120),
                    randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 20, '', map),
                    this.getType()
                );

                dataBase.addObject(newAnimal);
                this.setTimeToReproduction(tick);
                break; // Прерываем цикл после первого размножения
            }
        }
    }

    public getName(): string {
        return this.name;
    }
    public getSurName(): string {
        return this.surname;
    }

    public getNumberOfBuildings(): number {
        return this.numberOfHouses;
    }

    public setNumberOfBuildings() {
        this.numberOfHouses++
    }

    public findFood(index) {
        const animalDataBase = DataBaseAnimals.getInstance()
        const plantDataBase = PlantDataBase.getInstance()
        const buildingDataBase = BuildingDataBase.getInstance()
        let plantIndex = 0
        let animalIndex = 0
        let buildIndex = 0
        let last = "animal"
        let euristic: number;
        const maxValue = 9999999
        let minimumEuristic = maxValue
        const euristicCalculation = EuristicCalculation.getInstance();
        
        for (let i = 0; i < Math.min((Math.min(plantDataBase.getDataBaseSize(), animalDataBase.getDataBaseSize())), buildingDataBase.getDataBaseSize()); i++) {
            const plantObject = plantDataBase.getObject(i);

            if (plantObject instanceof Trees) {
                continue;
            }
            if (plantDataBase.getDataBaseSize() != 0)
            {if ((euristic = euristicCalculation.manhattanHeuristic(this, plantDataBase.getObject(i))) < minimumEuristic && plantDataBase.getDataBaseSize() != 0) {
                minimumEuristic = euristic
                plantIndex = i;
                last = "plant"
            }}
            if (animalDataBase.getDataBaseSize() != 0)
            {if ((euristic = euristicCalculation.manhattanHeuristic(this, animalDataBase.getObject(i))) < minimumEuristic) {
                minimumEuristic = euristic
                animalIndex = i;
                last = "animal"
            }}
            if (buildingDataBase.getDataBaseSize() != 0)
            if ((euristic = euristicCalculation.manhattanHeuristic(this, buildingDataBase.getObject(i))) < minimumEuristic) {
                minimumEuristic = euristic
                buildIndex = i;
                last = "build"
            }
        }
        
        if (last == "animal" && (animalDataBase.getDataBaseSize() != 0)) {
            index = animalIndex
            this.teleportation(animalDataBase.getObject(index))
            console.log("JIJA")
            animalDataBase.getObject(index).use(this)
        }

        else if (last == "plant" && (plantDataBase.getDataBaseSize() != 0)) {
            index = plantIndex
            this.teleportation(plantDataBase.getObject(index))
            console.log("JIJA")
            plantDataBase.getObject(index).use(this)
        }
        else if (last == "build" && (buildingDataBase.getDataBaseSize() != 0)) {
            index = buildIndex
            this.teleportation(buildingDataBase.getObject(index))
            console.log("JIJA")
            buildingDataBase.getObject(index).use(this)
        }
    }

    public override eat() {
        this.findFood(0)
    }



    public override getType() {
        return this.type
    }

    public setDeath() {
        this.type = HumanType.Dead
    }


    public getWoodInHands() {
        return this.woodInHands
    }


    public getWood(dataBase: PlantDataBase) {
        if (this.woodInHands < 100) {
            let index = this.findWood(dataBase, 0)
            dataBase.getObject(index).use(this)
        }
    }

    public use(animal: any): number {
        animal.setHungerValue(this.satiety)
        this.die(this, "use")
        return this.satiety
    }

    public findWood(dataBase: PlantDataBase, index): number {
        const randomizer = RandomValues.getInstance()
        index = randomizer.createRandomValue(0, dataBase.getDataBaseSize() - 1)
        if (dataBase.getObject(index) instanceof Trees) {
            this.teleportation(dataBase.getObject(index))
        }
        return index
    }
    public setCountOfWood(countOfWood: number) {
        this.woodInHands += countOfWood;
    }
    public createBuilding(dataBase: BuildingDataBase, index: number, map) {
        const buildingCoordinates = this.getCoordinates();
        const randomizer = RandomValues.getInstance();
        const newBuilding = new Building(
            false,
            this,
            1,
            1,
            randomizer.createRandomCoordinate(buildingCoordinates.x, buildingCoordinates.y, 1, '', map),
            BuildingTypes.Building
        );
        dataBase.addObject(newBuilding);
    }
}


