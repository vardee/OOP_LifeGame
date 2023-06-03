"use strict";
var PlantNamespace;
(function (PlantNamespace) {
    class Plant {
        constructor(recoveryTime, growingSpeed) {
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
            this.recoveryTime = recoveryTime;
            this.growingSpeed = growingSpeed;
        }
        grow() {
        }
    } //Cвязать с EventBus и PlantBornEvent
    PlantNamespace.Plant = Plant;
})(PlantNamespace || (PlantNamespace = {}));
