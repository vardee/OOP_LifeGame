import { SimulationMap } from "../simulation/SimulationOfLife.js";
import { PlantDataBase } from "./BruhDataBase.js";
import { BushTypes, GrassTypes, TreeTypes } from "../Plant/types.js";

export class Drawable {
    private static instance: Drawable;
  
    private constructor() {}
  
    public static getInstance(): Drawable {
      if (!Drawable.instance) {
        Drawable.instance = new Drawable();
      }
      return Drawable.instance;
    }
  
    public drawObject<T>(map: SimulationMap, coordinateX: number, coordinateY: number, type: T) {
        map.table.rows[coordinateX].cells[coordinateY].style.backgroundColor = this.getColor(type);
    }
  
    public drawCountOfObjects(dataBase: any) {
      const countElement = document.getElementById("count");
      if (countElement) {
        countElement.textContent = `Количество объектов: ${dataBase.getDataBaseSize()}`;
      }
    }
  
    private getColor<T>(type: T): string {
      switch (type) {
        case TreeTypes.Oak:
          return "#4DF0D4";
        case TreeTypes.Birch:
          return "#3FFA77";
        case TreeTypes.Spruce:
          return "#C3FEF1";
        case BushTypes.Currant:
          return "#7AFF16";
        case BushTypes.Hawthorn:
          return "#B7FFCC";
        case BushTypes.Raspberries:
          return "#00FFCF";
        case GrassTypes.Dandelions:
          return "#7AFF16";
        case GrassTypes.MeadowGrass:
          return "#5EE329";
        case GrassTypes.Roses:
          return "#3F991C";
        case GrassTypes.Dead:
        case TreeTypes.Dead:
        case BushTypes.Dead:
            return "white";
        default:
          return "white";
      }
    }
  }
