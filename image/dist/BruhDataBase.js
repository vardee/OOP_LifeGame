"use strict";
exports.__esModule = true;
exports.BruhDataBase = void 0;
var BruhDataBase = /** @class */ (function () {
    function BruhDataBase() {
        this.plantArray = [];
    }
    BruhDataBase.prototype.addPlant = function (plant) {
        this.plantArray.push(plant);
    };
    BruhDataBase.prototype.removePlant = function (plant) {
        var coordinatesToRemove = plant.getCoordinates;
        for (var i = 0; i < this.plantArray.length; i++) {
            var plant_1 = this.plantArray[i];
            if (plant_1.getCoordinates === coordinatesToRemove) {
                this.plantArray.splice(i, 1);
                break;
            }
        }
    };
    return BruhDataBase;
}());
exports.BruhDataBase = BruhDataBase;
