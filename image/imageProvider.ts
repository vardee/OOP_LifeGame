import { SimulationMap } from "../simulation/Map.js"
import { PlantDataBase } from "./BruhDataBase.js";
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
  
    public getObject(dataBase: any, map: SimulationMap, index: number) {
      const drawer = Drawable.getInstance();
        drawer.drawObject(map, dataBase.getObject(index).getCoordinates().x, dataBase.getObject(index).getCoordinates().y, dataBase.getObject(index).getType());
      drawer.drawCountOfObjects();
    }
    public drawMap(map: SimulationMap){
      const drawer = Drawable.getInstance();
        for (let x = 0; x < 100; x++){
          for (let y = 0; y < 100; y++){
            drawer.drawObject(map, x, y, "")
          }
        }
    }
  }
