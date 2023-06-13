import { BushTypes } from "./Plant/types.js";
import { GrassTypes } from "./Plant/types.js";
import { TreeTypes } from "./Plant/types.js";
import { RandomValues } from "./randomValues.js";
import { Coordinates } from "./Plant/PlantClasses/Coordinates.js";
import { Trees } from "./Plant/PlantClasses/Trees.js";
import { BruhDataBase } from "./image/BruhDataBase.js";

export class beginning{
    public createPlantStarterPack(dataBase: BruhDataBase){

        const randomizer = new RandomValues

        const treeTypesArray: TreeTypes[] = [TreeTypes.Spruce, TreeTypes.Birch, TreeTypes.Oak];

        const grassTypesArray: GrassTypes[] = [GrassTypes.MeadowGrass, GrassTypes.Dandelions, GrassTypes.Roses];

        const bushTypesArray: BushTypes[] = [BushTypes.Currant, BushTypes.Hawthorn, BushTypes.Raspberries];

        let randomStartPosition: Coordinates 
        randomStartPosition = randomizer.createRandomCoordinate(randomizer.createRandomValue(5, 20), randomizer.createRandomValue(5, 20), 1)
        
        const oakTree = new Trees(
            randomizer.createRandomValue(5, 20), 
            randomizer.createRandomValue(5, 20), 
            randomizer.createRandomValue(5, 20), 
            randomizer.createRandomValue(5, 20), 
            randomStartPosition, TreeTypes.Oak);

        dataBase.addPlant(oakTree)

        treeTypesArray.forEach((type) => {
            const data = {
              [type]: new Trees(
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomCoordinate(
                  randomStartPosition.x,
                  randomStartPosition.y,
                  randomizer.createRandomValue(5, 20)
                ),
                TreeTypes[type as keyof typeof TreeTypes]
              )
            };
            dataBase.addPlant(data[type]);
          });  
          
          treeTypesArray.forEach((type) => {
            const data = {
              [type]: new Trees(
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomValue(5, 20),
                randomizer.createRandomCoordinate(
                  randomStartPosition.x,
                  randomStartPosition.y,
                  randomizer.createRandomValue(5, 20)
                ),
                TreeTypes[type as keyof typeof TreeTypes]
              )
            };
            dataBase.addPlant(data[type]);
          }); 
    }
}