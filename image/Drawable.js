import { HerbivoresTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";
import { OmnivoresTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";
import { PredatorTypes } from "../ts/ts/Animals/AnimalsTypes/AnimalTypes.js";
export class Drawable {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Drawable.instance) {
            Drawable.instance = new Drawable();
        }
        return Drawable.instance;
    }
    drawObject(map, coordinateX, coordinateY, type) {
        map.table.rows[coordinateX].cells[coordinateY].style.backgroundColor = this.getColor(type);
    }
    drawCountOfObjects(dataBase) {
        const countElement = document.getElementById("count");
        if (countElement) {
            countElement.textContent = `Количество объектов: ${dataBase.getAnimalDataBaseSize()}`;
        }
    }
    getColor(type) {
        switch (type) {
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
                return "#FFFFFF";
        }
    }
}
