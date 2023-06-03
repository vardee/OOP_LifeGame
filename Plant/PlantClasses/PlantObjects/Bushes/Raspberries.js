"use strict";
var PlantNamespace;
(function (PlantNamespace) {
    class Raspberries extends PlantNamespace.Bushes {
        constructor(damage, haveFruit, recoveryTime, growingSpeed) {
            super(damage, haveFruit, recoveryTime, growingSpeed);
            this.damage = damage;
            this.haveFruit = haveFruit;
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
        }
        grow() {
        }
    }
    PlantNamespace.Raspberries = Raspberries;
})(PlantNamespace || (PlantNamespace = {}));
