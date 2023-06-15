import { SimulationMap } from "../ts/ts/SimulationOfLife.js";
import { DataBaseAnimals } from "../ts/ts/DataBaseAnimals.js";
import { HerbivoresTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";
import { OmnivoresTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";
import { PredatorTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";

export class Drawable {
    private static instance: Drawable;
  
    private constructor() {}
  
    public static getInstance(): Drawable {
      if (!Drawable.instance) {
        Drawable.instance = new Drawable();
      }
      return Drawable.instance;
    }
  
    public drawObject(map: SimulationMap, coordinateX: number, coordinateY: number, type: any) {
        map.table.rows[coordinateX].cells[coordinateY].style.backgroundColor = this.getColor(type);
    }
  
    public drawCountOfObjects(dataBase: DataBaseAnimals) {
      const countElement = document.getElementById("count");
      if (countElement) {
        countElement.textContent = `Количество объектов: ${dataBase.getAnimalDataBaseSize()}`;
      }
    }


    private getColor <T>(type: T): string{
        switch (type){
            case HerbivoresTypes.Sheep:
                return "#4EFF80";
            case HerbivoresTypes.Capybara:
                return "#DAE359";
            case HerbivoresTypes.Cow:
                return "#C3FEF1";
            case OmnivoresTypes.Bear:
                    return "#7AFF16";
            case OmnivoresTypes.Hedgehog:
                    return "#B7FFCC";
            case OmnivoresTypes.Rat:
                    return "#00FFCF";
            case PredatorTypes.Crocodile:
                    return "#7AFF16";
            case PredatorTypes.Lynx:
                    return "red";
            case PredatorTypes.Wolf:
                    return "red";
            default:
                return "#FFFFFF"
        }
            
    }
}
