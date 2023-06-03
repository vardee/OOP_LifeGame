"use strict";
var PlantNamespace;
(function (PlantNamespace) {
    class Trees extends PlantNamespace.Plant {
        constructor(numberOfWood, recoveryTime, growingSpeed) {
            super(growingSpeed, recoveryTime);
            this.numberOfWood = numberOfWood;
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
            this.numberOfWood = numberOfWood;
        }
    }
    PlantNamespace.Trees = Trees;
})(PlantNamespace || (PlantNamespace = {}));
