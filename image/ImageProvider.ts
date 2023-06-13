import { SimulationMap } from "../SimulationOfLife.js"
import { BruhDataBase } from "./BruhDataBase.js";
import { Drawable } from "./Drawable.js";

export class ImageProvider{
    public getObject(dataBase: BruhDataBase, map: SimulationMap){
        const drawer = new Drawable
        dataBase.plantArray.forEach(element => {
            drawer.drawObject(map, element.getCoordinates().x, element.getCoordinates().y, element.getType())
        });
        drawer.drawCountOfObjects(dataBase)
    }
}


//Нужен какой-то параметр, по которому будем отслеживать, съели растение или нет. Если съели, то закрашиваем клетку белым, а после этого удаляем объект из базы данных