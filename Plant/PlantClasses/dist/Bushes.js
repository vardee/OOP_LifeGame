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
exports.Bushes = void 0;
var AbstractPlant_js_1 = require("./AbstractPlant.js");
var Bushes = /** @class */ (function (_super) {
    __extends(Bushes, _super);
    function Bushes(timeToDeath, damage, haveFruit, recoveryTime, growingSpeed, coordinates, type) {
        var _this = _super.call(this, timeToDeath, recoveryTime, growingSpeed, coordinates) || this;
        _this.timeToDeath = timeToDeath;
        _this.damage = damage;
        _this.haveFruit = haveFruit;
        _this.recoveryTime = recoveryTime;
        _this.growingSpeed = growingSpeed;
        _this.coordinates = coordinates;
        _this.type = type;
        _this.damage = damage;
        _this.haveFruit = haveFruit;
        return _this;
    }
    Bushes.prototype.dropFruit = function () { }; //Нужно подвязать сюда Fruit
    Bushes.prototype.getDamage = function () {
        return this.damage;
    };
    Bushes.prototype.getHaveFruit = function () {
        return this.haveFruit;
    };
    Bushes.prototype.grow = function (dataBase) {
    };
    Bushes.prototype.getType = function () {
        return this.type;
    };
    return Bushes;
}(AbstractPlant_js_1.Plant));
exports.Bushes = Bushes;
