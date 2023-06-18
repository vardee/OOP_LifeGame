import { BushTypes } from "../Plant/types.js";
import { GrassTypes } from "../Plant/types.js";
import { TreeTypes } from "../Plant/types.js";
import { RandomValues } from "./randomValues.js";
import { Coordinates } from "../Plant/PlantClasses/Coordinates.js";
import { Trees } from "../Plant/PlantClasses/Trees.js";
import { DataBaseAnimals, PlantDataBase } from "../image/BruhDataBase.js";
import { Grass } from "../Plant/PlantClasses/Grass.js";
import { Bushes } from "../Plant/PlantClasses/Bushes.js";
import { SimulationMap } from "./Map.js";
import { PredatorTypes, OmnivoresTypes, HerbivoresTypes } from "../Animals/AnimalTypes.js";
import { Sex } from "../Animals/AnimalsObjects/sex.js";
import { Herbivores } from "../Animals/AnimalsObjects/Herbivores.js";
import { Omnivores } from "../Animals/AnimalsObjects/Omnivores.js";
import { Predator } from "../Animals/AnimalsObjects/Predator.js";

export class startElements{

    public createStarterPack(plantDataBase: PlantDataBase, animalDataBase: DataBaseAnimals, map: SimulationMap){
      this.createPlantStarterPack(plantDataBase, map)
      this.createAnimalStarterPack(animalDataBase, map)
    }

    private createPlantStarterPack(dataBase: PlantDataBase, map: SimulationMap){

        const randomizer = RandomValues.getInstance();

        const treeTypesArray: TreeTypes[] = [TreeTypes.Spruce, TreeTypes.Birch];

        const grassTypesArray: GrassTypes[] = [GrassTypes.MeadowGrass, GrassTypes.Dandelions, GrassTypes.Roses];

        const bushTypesArray: BushTypes[] = [BushTypes.Currant, BushTypes.Hawthorn, BushTypes.Raspberries];

        let randomStartPosition: Coordinates 
        randomStartPosition = randomizer.createRandomCoordinate(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 70), 1, "", map)
        
        const oakTree = new Trees(
          randomizer.createRandomValue(3, 8), 
            randomizer.createRandomValue(12, 20), 
            randomizer.createRandomValue(5, 20), 
            randomizer.createRandomValue(1, 1), 
            randomStartPosition, TreeTypes.Oak);

        dataBase.addObject(oakTree)

        treeTypesArray.forEach((type) => {
            const data = {
              [type]: new Trees(
                randomizer.createRandomValue(3, 8),
                randomizer.createRandomValue(12, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(1, 1),
                randomizer.createRandomCoordinate(
                  randomStartPosition.x,
                  randomStartPosition.y,
                  randomizer.createRandomValue(5, 20),
                  "",
                  map
                ),
                TreeTypes[type as keyof typeof TreeTypes]
              )
            };
            dataBase.addObject(data[type]);
          });  
          
          grassTypesArray.forEach((type) => {
            const data = {
              [type]: new Grass(
                randomizer.createRandomValue(12, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(1, 1),
                randomizer.createRandomCoordinate(
                  randomStartPosition.x,
                  randomStartPosition.y,
                  randomizer.createRandomValue(5, 20),
                  "",
                  map
                ),
                GrassTypes[type as keyof typeof GrassTypes]
              )
            };
            dataBase.addObject(data[type]);
          });
          bushTypesArray.forEach((type) => {
            const data = {
              [type]: new Bushes(
                randomizer.createRandomValue(12, 20),
                randomizer.createRandomValue(12, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(1, 1),
                randomizer.createRandomCoordinate(
                  randomStartPosition.x,
                  randomStartPosition.y,
                  randomizer.createRandomValue(5, 20),
                  "",
                  map
                ),
                BushTypes[type as keyof typeof BushTypes]
              )
            };
            dataBase.addObject(data[type]);
          });  
    }
    private createAnimalStarterPack(dataBase: DataBaseAnimals, map: SimulationMap){

      const randomizer = RandomValues.getInstance();

      const herbivoresTypesArray: HerbivoresTypes[] = [HerbivoresTypes.Capybara, HerbivoresTypes.Cow];

      const OmnivoresTypesArray: OmnivoresTypes[] = [OmnivoresTypes.Bear, OmnivoresTypes.Hedgehog, OmnivoresTypes.Rat];

      const PredatorTypesArray: PredatorTypes[] = [PredatorTypes.Crocodile, PredatorTypes.Lynx, PredatorTypes.Wolf];

      

      let randomStartPosition: Coordinates 
      randomStartPosition = randomizer.createRandomCoordinate(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 70), 1, '', map)


      
      const Sheep = new Herbivores(
          randomizer.createRandomValue(5, 20), 
          randomizer.createRandomValue(5, 10),
          randomizer.createRandomValue(5, 10),
          randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male,
          randomizer.createRandomValue(20, 30),
          randomizer.createRandomValue(5, 10),
          randomizer.createRandomValue(60, 100),
          randomizer.createRandomValue(60, 100),
          randomizer.createRandomValue(60, 100),
          randomStartPosition, HerbivoresTypes.Sheep);

      dataBase.addObject(Sheep)
    for (let i = 0; i < 3; i++) {
      herbivoresTypesArray.forEach((type) => {
          const data = {
            [type]: new Herbivores(
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male,
              randomizer.createRandomValue(20, 30),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(60, 100),
              randomizer.createRandomValue(60, 100),
              randomizer.createRandomCoordinate(
                randomStartPosition.x,
                randomStartPosition.y,
                randomizer.createRandomValue(5, 20),
                "",
                map
              ),
              HerbivoresTypes[type as keyof typeof HerbivoresTypes]
            )
          };
          dataBase.addObject(data[type]);
        });  
        
        OmnivoresTypesArray.forEach((type) => {
          const data = {
            [type]: new Omnivores(
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male,
              randomizer.createRandomValue(30, 40),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(60, 100),
              randomizer.createRandomValue(60, 100),
              randomizer.createRandomCoordinate(
                randomStartPosition.x,
                randomStartPosition.y,
                randomizer.createRandomValue(5, 20),
                "",
                map
              ),
              OmnivoresTypes[type as keyof typeof OmnivoresTypes]
            )
          };
          dataBase.addObject(data[type]);
        });

        PredatorTypesArray.forEach((type) => {
          const data = {
            [type]: new Predator(
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male,
              randomizer.createRandomValue(40, 50),
              randomizer.createRandomValue(5, 10),
              randomizer.createRandomValue(60, 100),
              randomizer.createRandomValue(60, 100),
              randomizer.createRandomValue(60, 100),
              randomizer.createRandomCoordinate(
                randomStartPosition.x,
                randomStartPosition.y,
                randomizer.createRandomValue(5, 20),
                "",
                map
              ),
              PredatorTypes[type as keyof typeof PredatorTypes]
            )
          };
          dataBase.addObject(data[type]);
        }); 
      } 
  }
}
    
