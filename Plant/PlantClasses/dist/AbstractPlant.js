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
exports.Plant = void 0;
var creature_js_1 = require("./creature.js");
var Plant = /** @class */ (function (_super) {
    __extends(Plant, _super);
    function Plant(timeToDeath, recoveryTime, growingSpeed, coordinates) {
        var _this = _super.call(this, timeToDeath) || this;
        _this.timeToDeath = timeToDeath;
        _this.recoveryTime = recoveryTime;
        _this.growingSpeed = growingSpeed;
        _this.coordinates = coordinates;
        _this.recoveryTime = recoveryTime;
        _this.growingSpeed = growingSpeed;
        _this.coordinates = coordinates;
        return _this;
    }
    Plant.prototype.getRecoveryTime = function () {
        return this.recoveryTime;
    };
    Plant.prototype.getGrowingSpeed = function () {
        return this.growingSpeed;
    };
    Plant.prototype.getCoordinates = function () {
        return this.coordinates;
    };
    return Plant;
}(creature_js_1.Creature));
exports.Plant = Plant;
