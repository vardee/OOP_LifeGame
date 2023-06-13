"use strict";
exports.__esModule = true;
exports.Drawable = void 0;
var types_js_1 = require("../Plant/types.js");
var Drawable = /** @class */ (function () {
    function Drawable() {
    }
    Drawable.prototype.drawObject = function (map, coordinateX, coordinateY, type) {
        map.table.rows[coordinateX].cells[coordinateY].style.backgroundColor = this.getColor(type);
    };
    Drawable.prototype.drawCountOfObjects = function (dataBase) {
        var countElement = document.getElementById("count");
        if (countElement) {
            countElement.textContent = "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432: " + dataBase.plantArray.length;
        }
    };
    Drawable.prototype.getColor = function (type) {
        switch (type) {
            case types_js_1.TreeTypes.Oak:
                return "#4EFF80";
            case types_js_1.TreeTypes.Birch:
                return "#DAE359";
            case types_js_1.TreeTypes.Spruce:
                return "#C3FEF1";
            case types_js_1.BushTypes.Currant:
                return "#7AFF16";
            case types_js_1.BushTypes.Hawthorn:
                return "#B7FFCC";
            case types_js_1.BushTypes.Raspberries:
                return "#00FFCF";
            case types_js_1.GrassTypes.Dandelions:
                return "#7AFF16";
            case types_js_1.GrassTypes.MeadowGrass:
                return "red";
            case types_js_1.GrassTypes.Roses:
                return "red";
            default:
                return "#FFFFFF";
        }
    };
    return Drawable;
}());
exports.Drawable = Drawable;
