"use strict";
var PlantNamespace;
(function (PlantNamespace) {
    class Birch extends PlantNamespace.Trees {
        constructor(numberOfWood, recoveryTime, growingSpeed) {
            super(growingSpeed, recoveryTime, numberOfWood);
            this.numberOfWood = numberOfWood;
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
        }
        grow() {
        }
    }
    PlantNamespace.Birch = Birch;
})(PlantNamespace || (PlantNamespace = {}));
