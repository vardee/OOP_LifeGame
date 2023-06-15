import { Drawable } from "./Drawable.js";
export class ImageProvider {
    static instance;
    constructor() { }
    static getInstance() {
        if (!ImageProvider.instance) {
            ImageProvider.instance = new ImageProvider();
        }
        return ImageProvider.instance;
    }
    getObject(dataBase, map, index) {
        const drawer = Drawable.getInstance();
        drawer.drawObject(map, dataBase.getAnimal(index).getCoordinates().x, dataBase.getAnimal(index).getCoordinates().y, dataBase.getAnimal(index).getType());
        drawer.drawCountOfObjects(dataBase);
    }
}
//Нужен какой-то параметр, по которому будем отслеживать, съели растение или нет. Если съели, то закрашиваем клетку белым, а после этого удаляем объект из базы данных
