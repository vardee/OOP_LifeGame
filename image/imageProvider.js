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
        drawer.drawObject(map, dataBase.getObject(index).getCoordinates().x, dataBase.getObject(index).getCoordinates().y, dataBase.getObject(index).getType());
        drawer.drawCountOfObjects();
    }
    drawMap(map) {
        const drawer = Drawable.getInstance();
        for (let x = 0; x < 100; x++) {
            for (let y = 0; y < 100; y++) {
                drawer.drawObject(map, x, y, "");
            }
        }
    }
}
