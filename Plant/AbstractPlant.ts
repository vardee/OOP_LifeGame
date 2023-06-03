namespace PlantNamespace{
    export abstract class Plant{
        constructor(protected recoveryTime: number, protected growingSpeed: number){
            this.recoveryTime = recoveryTime
            this.growingSpeed = growingSpeed
        }

        public grow(){
            
        } 
    } //Cвязать с EventBus и PlantBornEvent
}