"use strict";
var PlantNamespace;
(function (PlantNamespace) {
    class Spruce extends PlantNamespace.Trees {
        constructor(numberOfWood, recoveryTime, growingSpeed) {
            super(growingSpeed, recoveryTime, numberOfWood);
            this.numberOfWood = numberOfWood;
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
        }
        grow() {
        }
    }
    PlantNamespace.Spruce = Spruce;
})(PlantNamespace || (PlantNamespace = {}));
