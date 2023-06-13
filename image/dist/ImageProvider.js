"use strict";
exports.__esModule = true;
exports.ImageProvider = void 0;
var Drawable_js_1 = require("./Drawable.js");
var ImageProvider = /** @class */ (function () {
    function ImageProvider() {
    }
    ImageProvider.prototype.getObject = function (dataBase, map) {
        var drawer = new Drawable_js_1.Drawable;
        dataBase.plantArray.forEach(function (element) {
            drawer.drawObject(map, element.getCoordinates().x, element.getCoordinates().y, element.getType());
        });
        drawer.drawCountOfObjects(dataBase);
    };
    return ImageProvider;
}());
exports.ImageProvider = ImageProvider;
//Нужен какой-то параметр, по которому будем отслеживать, съели растение или нет. Если съели, то закрашиваем клетку белым, а после этого удаляем объект из базы данных
