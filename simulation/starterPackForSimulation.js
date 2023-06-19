import { BushTypes, TreeTypes, GrassTypes } from "../Plant/types.js";
import { RandomValues } from "./randomValues.js";
import { Trees } from "../Plant/PlantClasses/Trees.js";
import { Grass } from "../Plant/PlantClasses/Grass.js";
import { Bushes } from "../Plant/PlantClasses/Bushes.js";
import { PredatorTypes, OmnivoresTypes, HerbivoresTypes } from "../Animals/AnimalTypes.js";
import { Sex } from "../Animals/AnimalsObjects/sex.js";
import { Herbivores } from "../Animals/AnimalsObjects/Herbivores.js";
import { Omnivores } from "../Animals/AnimalsObjects/Omnivores.js";
import { Predator } from "../Animals/AnimalsObjects/Predator.js";
import { Human } from "../Animals/AnimalsObjects/Humans.js";
import { HumanType } from "../Animals/AnimalTypes.js";
export class startElements {
    createStarterPack(plantDataBase, animalDataBase, humanDataBase, map) {
        this.createPlantStarterPack(plantDataBase, map);
        this.createAnimalStarterPack(animalDataBase, map);
        this.createHumanStarterPack(humanDataBase, map);
    }
    createPlantStarterPack(dataBase, map) {
        const randomizer = RandomValues.getInstance();
        const treeTypesArray = [TreeTypes.Spruce, TreeTypes.Birch];
        const grassTypesArray = [GrassTypes.MeadowGrass, GrassTypes.Dandelions, GrassTypes.Roses];
        const bushTypesArray = [BushTypes.Currant, BushTypes.Hawthorn, BushTypes.Raspberries];
        let randomStartPosition;
        randomStartPosition = randomizer.createRandomCoordinate(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 70), 1, "", map);
        for (let i = 0; i < 3; i++) {
            const oakTree = new Trees(randomizer.createRandomValue(3, 8), randomizer.createRandomValue(12, 20), randomizer.createRandomValue(5, 20), randomizer.createRandomValue(1, 1), randomStartPosition, TreeTypes.Oak);
            dataBase.addObject(oakTree);
            treeTypesArray.forEach((type) => {
                const data = {
                    [type]: new Trees(randomizer.createRandomValue(3, 8), randomizer.createRandomValue(12, 20), randomizer.createRandomValue(5, 20), randomizer.createRandomValue(1, 1), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20), "", map), TreeTypes[type])
                };
                dataBase.addObject(data[type]);
            });
            grassTypesArray.forEach((type) => {
                const data = {
                    [type]: new Grass(randomizer.createRandomValue(12, 20), randomizer.createRandomValue(5, 20), randomizer.createRandomValue(1, 1), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20), "", map), GrassTypes[type])
                };
                dataBase.addObject(data[type]);
            });
            bushTypesArray.forEach((type) => {
                const data = {
                    [type]: new Bushes(randomizer.createRandomValue(12, 20), randomizer.createRandomValue(12, 20), randomizer.createRandomValue(5, 20), randomizer.createRandomValue(1, 1), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20), "", map), BushTypes[type])
                };
                dataBase.addObject(data[type]);
            });
        }
    }
    createAnimalStarterPack(dataBase, map) {
        const randomizer = RandomValues.getInstance();
        const herbivoresTypesArray = [HerbivoresTypes.Capybara, HerbivoresTypes.Cow];
        const OmnivoresTypesArray = [OmnivoresTypes.Bear, OmnivoresTypes.Hedgehog, OmnivoresTypes.Rat];
        const PredatorTypesArray = [PredatorTypes.Crocodile, PredatorTypes.Lynx, PredatorTypes.Wolf];
        let randomStartPosition;
        randomStartPosition = randomizer.createRandomCoordinate(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 70), 1, '', map);
        const Sheep = new Herbivores(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, randomizer.createRandomValue(30, 40), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomStartPosition, HerbivoresTypes.Sheep);
        dataBase.addObject(Sheep);
        for (let i = 0; i < 2; i++) {
            herbivoresTypesArray.forEach((type) => {
                const data = {
                    [type]: new Herbivores(randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, randomizer.createRandomValue(30, 40), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20), "", map), HerbivoresTypes[type])
                };
                dataBase.addObject(data[type]);
            });
            OmnivoresTypesArray.forEach((type) => {
                const data = {
                    [type]: new Omnivores(randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, randomizer.createRandomValue(50, 60), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20), "", map), OmnivoresTypes[type])
                };
                dataBase.addObject(data[type]);
            });
            PredatorTypesArray.forEach((type) => {
                const data = {
                    [type]: new Predator(randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, randomizer.createRandomValue(70, 80), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20), "", map), PredatorTypes[type])
                };
                dataBase.addObject(data[type]);
            });
        }
    }
    createHumanStarterPack(dataBase, map) {
        const randomizer = RandomValues.getInstance();
        const HumanTypeArray = [HumanType.Human];
        let randomStartPosition;
        randomStartPosition = randomizer.createRandomCoordinate(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 70), 1, '', map);
        for (let i = 0; i < 3; i++) {
            HumanTypeArray.forEach((type) => {
                const data = {
                    [type]: new Human(0, randomizer.createRandomValue(5, 10), randomizer.generateRandomName(randomizer.createRandomValue(2, 10)), randomizer.generateRandomName(randomizer.createRandomValue(5, 10)), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male, randomizer.createRandomValue(40, 50), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20), "", map), HumanType[type])
                };
                dataBase.addObject(data[type]);
            });
        }
    }
}
