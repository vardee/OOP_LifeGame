import { SimulationMap } from "../simulation/SimulationOfLife.js"
import { BruhDataBase } from "./BruhDataBase.js";
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
  
    public getObject(dataBase: BruhDataBase, map: SimulationMap, index) {
      const drawer = Drawable.getInstance();
        drawer.drawObject(map, dataBase.getPlant(index).getCoordinates().x, dataBase.getPlant(index).getCoordinates().y, dataBase.getPlant(index).getType());
      drawer.drawCountOfObjects(dataBase);
    }
  }


//Нужен какой-то параметр, по которому будем отслеживать, съели растение или нет. Если съели, то закрашиваем клетку белым, а после этого удаляем объект из базы данных