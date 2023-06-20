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

interface bruh{

}

export class Human extends Animal{
    constructor(
        speed: number,
        private name: String,
        private surname: String,
        private age: number,
        private woodInHands: number,
        private foodInHands: number,
        //private  house: Building,
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
        this.age = age;
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
                    randomizer.createRandomValue(5, 10),
                    randomizer.generateRandomName(randomizer.createRandomValue(2, 10)),
                    randomizer.generateRandomName(randomizer.createRandomValue(5, 10)),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male,
                    tick + randomizer.createRandomValue(10, 20),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(5, 10),
                    randomizer.createRandomValue(60, 100),
                    tick + randomizer.createRandomValue(60, 100),
                    randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 20, '', map),
                    this.getType()
                );

                dataBase.addObject(newAnimal);
                this.setTimeToReproduction(tick);
                break; // Прерываем цикл после первого размножения
            }
        }
    }

    public getName(): String {
        return this.name;
    }
    public getSurName(): String {
        return this.surname;
    }
    public getAge(): number {
        return this.age;
    }



    public findFood(index) {
        const animalDataBase = DataBaseAnimals.getInstance()
        const plantDataBase = PlantDataBase.getInstance()
        let plantIndex = 0
        let animalIndex = 0
        let last = "plant"
        let euristic: number;
        const maxValue = 9999999
        let minimumEuristic = maxValue
        const euristicCalculation = EuristicCalculation.getInstance();
        for (let i = 0; i < Math.min(plantDataBase.getDataBaseSize(), animalDataBase.getDataBaseSize()); i++) {
            const plantObject = plantDataBase.getObject(i);

            if (plantObject instanceof Trees) {
                continue;
            }

            if ((euristic = euristicCalculation.manhattanHeuristic(this, plantDataBase.getObject(i))) < minimumEuristic && plantDataBase.getDataBaseSize() != 0) {
                minimumEuristic = euristic
                plantIndex = i;
                last = "plant"
            }

            if ((euristic = euristicCalculation.manhattanHeuristic(this, animalDataBase.getObject(i))) < minimumEuristic) {
                minimumEuristic = euristic
                animalIndex = i;
                last = "animal"
            }
        }

        if (last = "animal") {
            index = animalIndex
            this.teleportation(animalDataBase.getObject(index))
            animalDataBase.getObject(index).use(this)
        }

        else {
            index = plantIndex
            this.teleportation(plantDataBase.getObject(index))
            plantDataBase.getObject(index).use(this)
        }

    }

    public override eat() {
        const plantDataBase = PlantDataBase.getInstance()
        const animalDataBase = DataBaseAnimals.getInstance()
        if (this.hungerValue < 40 && (plantDataBase.getDataBaseSize() != 0 || animalDataBase.getDataBaseSize() != 0)) {
            this.findFood(0)
        }
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

    public use(animal: any) {
        animal.setHungerValue(this.satiety)
        this.die(this, "use")
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


}

