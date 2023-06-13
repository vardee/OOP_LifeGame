"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Grass = void 0;
var AbstractPlant_js_1 = require("./AbstractPlant.js");
var Grass = /** @class */ (function (_super) {
    __extends(Grass, _super);
    function Grass(timeToDeath, satiety, recoveryTime, growingSpeed, coordinates, type) {
        var _this = _super.call(this, timeToDeath, growingSpeed, recoveryTime, coordinates) || this;
        _this.timeToDeath = timeToDeath;
        _this.satiety = satiety;
        _this.recoveryTime = recoveryTime;
        _this.growingSpeed = growingSpeed;
        _this.coordinates = coordinates;
        _this.type = type;
        _this.satiety = satiety;
        return _this;
    }
    Grass.prototype.getSatiety = function () {
        return this.satiety;
    };
    Grass.prototype.grow = function (dataBase) {
    };
    Grass.prototype.getType = function () {
        return this.type;
    };
    return Grass;
}(AbstractPlant_js_1.Plant));
exports.Grass = Grass;
