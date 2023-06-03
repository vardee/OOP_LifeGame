"use strict";
var PlantNamespace;
(function (PlantNamespace) {
    class Bushes extends PlantNamespace.Plant {
        constructor(damage, haveFruit, recoveryTime, growingSpeed) {
            super(recoveryTime, growingSpeed);
            this.damage = damage;
            this.haveFruit = haveFruit;
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
            this.damage = damage;
            this.haveFruit = haveFruit;
        }
    }
    PlantNamespace.Bushes = Bushes;
    function dropFruit() {
    }
})(PlantNamespace || (PlantNamespace = {}));
