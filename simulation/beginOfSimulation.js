import { HerbivoresTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";
import { OmnivoresTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";
import { PredatorTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";
import { RandomValues } from "./randomValues.js";
import { Omnivores } from "../ts/ts/Animals/AnimalsObjects/Omnivores.js";
import { Predator } from "../ts/ts/Animals/AnimalsObjects/Predator.js";
import { Herbivores } from "../ts/ts/Animals/AnimalsObjects/Herbivores.js";
import { sex } from "../ts/ts/sex.js";
export class Beginning {
    createPlantStarterPack(dataBase) {
        const randomizer = RandomValues.getInstance();
        const herbivoresTypesArray = [HerbivoresTypes.Capybara, HerbivoresTypes.Cow];
        const OmnivoresTypesArray = [OmnivoresTypes.Bear, OmnivoresTypes.Hedgehog, OmnivoresTypes.Rat];
        const PredatorTypesArray = [PredatorTypes.Crocodile, PredatorTypes.Lynx, PredatorTypes.Wolf];
        let randomStartPosition;
        randomStartPosition = randomizer.createRandomCoordinate(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 70), 1);
        const Sheep = new Herbivores(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? sex.female : sex.male, randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomStartPosition, HerbivoresTypes.Sheep);
        dataBase.addAnimal(Sheep);
        for (let i = 0; i < 3; i++) {
            herbivoresTypesArray.forEach((type) => {
                const data = {
                    [type]: new Herbivores(randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? sex.female : sex.male, randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20)), HerbivoresTypes[type])
                };
                dataBase.addAnimal(data[type]);
            });
            OmnivoresTypesArray.forEach((type) => {
                const data = {
                    [type]: new Omnivores(randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? sex.female : sex.male, randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20)), OmnivoresTypes[type])
                };
                dataBase.addAnimal(data[type]);
            });
            PredatorTypesArray.forEach((type) => {
                const data = {
                    [type]: new Predator(randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(0, 1) === 0 ? sex.female : sex.male, randomizer.createRandomValue(5, 10), randomizer.createRandomValue(5, 10), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomValue(60, 100), randomizer.createRandomCoordinate(randomStartPosition.x, randomStartPosition.y, randomizer.createRandomValue(5, 20)), PredatorTypes[type])
                };
                dataBase.addAnimal(data[type]);
            });
        }
    }
}
