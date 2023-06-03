"use strict";
var PlantNamespace;
(function (PlantNamespace) {
    class Grass extends PlantNamespace.Plant {
        constructor(satiety, recoveryTime, growingSpeed) {
            super(growingSpeed, recoveryTime);
            this.satiety = satiety;
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
            this.satiety = satiety;
        }
    }
    PlantNamespace.Grass = Grass;
})(PlantNamespace || (PlantNamespace = {}));
