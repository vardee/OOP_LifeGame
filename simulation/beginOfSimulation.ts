import { BushTypes } from "../Plant/types.js";
import { GrassTypes } from "../Plant/types.js";
import { TreeTypes } from "../Plant/types.js";
import { RandomValues } from "./randomValues.js";
import { Coordinates } from "../Plant/PlantClasses/Coordinates.js";
import { Trees } from "../Plant/PlantClasses/Trees.js";
import { PlantDataBase } from "../image/BruhDataBase.js";
import { Grass } from "../Plant/PlantClasses/Grass.js";
import { Bushes } from "../Plant/PlantClasses/Bushes.js";

export class Beginning{
    public createPlantStarterPack(dataBase: PlantDataBase){

        const randomizer = RandomValues.getInstance();

        const treeTypesArray: TreeTypes[] = [TreeTypes.Spruce, TreeTypes.Birch];

        const grassTypesArray: GrassTypes[] = [GrassTypes.MeadowGrass, GrassTypes.Dandelions, GrassTypes.Roses];

        const bushTypesArray: BushTypes[] = [BushTypes.Currant, BushTypes.Hawthorn, BushTypes.Raspberries];

        let randomStartPosition: Coordinates 
        randomStartPosition = randomizer.createRandomCoordinate(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 70), 1, "")
        
        const oakTree = new Trees(
            randomizer.createRandomValue(12, 20), 
            randomizer.createRandomValue(5, 20), 
            randomizer.createRandomValue(5, 8), 
            randomStartPosition, TreeTypes.Oak);

        dataBase.addObject(oakTree)

        treeTypesArray.forEach((type) => {
            const data = {
              [type]: new Trees(
                randomizer.createRandomValue(12, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(5, 8),
                randomizer.createRandomCoordinate(
                  randomStartPosition.x,
                  randomStartPosition.y,
                  randomizer.createRandomValue(5, 20),
                  ""
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
                randomizer.createRandomValue(5, 8),
                randomizer.createRandomCoordinate(
                  randomStartPosition.x,
                  randomStartPosition.y,
                  randomizer.createRandomValue(5, 20),
                  ""
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
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomCoordinate(
                  randomStartPosition.x,
                  randomStartPosition.y,
                  randomizer.createRandomValue(5, 20),
                  ""
                ),
                BushTypes[type as keyof typeof BushTypes]
              )
            };
            dataBase.addObject(data[type]);
          });  
    }
}