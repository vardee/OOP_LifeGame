import { DataBaseAnimals, PlantDataBase } from "./BruhDataBase.js";
import { BushTypes, GrassTypes, TreeTypes } from "../Plant/types.js";
import { PredatorTypes, OmnivoresTypes, HerbivoresTypes, HumanType } from "../Animals/AnimalTypes.js";
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
        map.getTable().rows[coordinateX].cells[coordinateY].style.backgroundColor = this.getColor(type);
    }
    drawCountOfObjects() {
        const countElement = document.getElementById("count");
        if (countElement) {
            const plantDataBase = PlantDataBase.getInstance();
            const animalDataBase = DataBaseAnimals.getInstance();
            countElement.textContent = `Количество объектов: ${plantDataBase.getDataBaseSize() + animalDataBase.getDataBaseSize()}`;
        }
    }
    getColor(type) {
        switch (type) {
            //Plants
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
            //Animals
            case HerbivoresTypes.Sheep:
                return "#FA91FF";
            case HerbivoresTypes.Capybara:
                return "#FA9100";
            case HerbivoresTypes.Cow:
                return "#872F45";
            case OmnivoresTypes.Bear:
                return "#AD6545";
            case OmnivoresTypes.Hedgehog:
                return "#784D4D";
            case OmnivoresTypes.Rat:
                return "#336E82";
            case PredatorTypes.Crocodile:
                return "#2B5927";
            case PredatorTypes.Lynx:
                return "#9B6363";
            case PredatorTypes.Wolf:
                return "#636363";
            case HumanType.Human:
                return "#636363";
            case GrassTypes.Dead:
            case TreeTypes.Dead:
            case BushTypes.Dead:
            case OmnivoresTypes.Dead:
            case PredatorTypes.Dead:
            case HerbivoresTypes.Dead:
            case HumanType.Dead:
                return "white";
            default:
                return "white";
        }
    }
}
