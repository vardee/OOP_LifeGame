import { SimulationMap } from "../ts/ts/SimulationOfLife.js";
import { DataBaseAnimals } from "../ts/ts/DataBaseAnimals.js";
import { Drawable } from "./Drawable.js";

export class ImageProvider {
    private static instance: ImageProvider;
  
    private constructor() {}
  
    public static getInstance(): ImageProvider {
      if (!ImageProvider.instance) {
        ImageProvider.instance = new ImageProvider();
      }
      return ImageProvider.instance;
    }
  
    public getObject(dataBase: DataBaseAnimals, map: SimulationMap, index) {
      const drawer = Drawable.getInstance();
        drawer.drawObject(map, dataBase.getAnimal(index).getCoordinates().x, dataBase.getAnimal(index).getCoordinates().y, dataBase.getAnimal(index).getType());
      drawer.drawCountOfObjects(dataBase);
    }
  }



//Нужен какой-то параметр, по которому будем отслеживать, съели растение или нет. Если съели, то закрашиваем клетку белым, а после этого удаляем объект из базы данных
