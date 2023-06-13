import { SimulationMap } from "../SimulationOfLife.js";
import { BruhDataBase } from "./BruhDataBase.js";
import { Plant } from "../Plant/PlantClasses/AbstractPlant.js";
import { Coordinates } from "../Plant/PlantClasses/Coordinates.js";
import { BushTypes, GrassTypes, TreeTypes } from "../Plant/types.js";

export class Drawable{
    public drawObject<T>(map: SimulationMap, coordinateX: number, coordinateY: number, type: T) {
          map.table.rows[coordinateX].cells[coordinateY].style.backgroundColor = this.getColor(type);
      }
    public drawCountOfObjects(dataBase: BruhDataBase){
        const countElement = document.getElementById("count");  
        if (countElement) {
            countElement.textContent = `Количество объектов: ${dataBase.plantArray.length}`;
          }
    }

    private getColor <T>(type: T): string{
        switch (type){
            case TreeTypes.Oak:
                return "#4EFF80";
            case TreeTypes.Birch:
                return "#DAE359";
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
                    return "red";
            case GrassTypes.Roses:
                    return "red";
            default:
                return "#FFFFFF"
        }
            
    }
}
