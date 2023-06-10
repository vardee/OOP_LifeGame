import { SimulationMap } from "../SimulationOfLife.js"
import { BruhDataBase } from "./BruhDataBase.js";

export class ImageProvider{

    public drawObject <T>(map: SimulationMap, object: T){
        map.table.rows[4].cells[4].style.backgroundColor = object.getColor();
    }
    public getObject(dataBase: BruhDataBase, map: SimulationMap){
        dataBase.plantArray.forEach(element => {
            this.drawObject(map, element)
        });
    }
}