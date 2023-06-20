import { SimulationMap } from "../simulation/Map.js"
import { PlantDataBase } from "./BruhDataBase.js";
import { Drawable } from "./Drawable.js";

export class ImageProvider {
  private static instance: ImageProvider;

  private constructor() { }

  public static getInstance(): ImageProvider {
    if (!ImageProvider.instance) {
      ImageProvider.instance = new ImageProvider();
    }
    return ImageProvider.instance;
  }

  public getObject(dataBase: any, map: SimulationMap, index: number) {
    const drawer = Drawable.getInstance();
    drawer.drawObject(map, dataBase.getObject(index).getCoordinates().x, dataBase.getObject(index).getCoordinates().y, dataBase.getObject(index).getType());
    drawer.drawCountOfObjects();
  }
}
