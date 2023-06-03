"use strict";
var PlantNamespace;
(function (PlantNamespace) {
    class Roses extends PlantNamespace.Grass {
        constructor(satiety, recoveryTime, growingSpeed) {
            super(growingSpeed, recoveryTime, satiety);
            this.satiety = satiety;
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
        }
        grow() {
        }
    }
    PlantNamespace.Roses = Roses;
})(PlantNamespace || (PlantNamespace = {}));
