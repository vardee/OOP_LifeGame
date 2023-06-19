import { Timer } from "./simulation/timer.js"
import { Coordinates } from "./Plant/PlantClasses/Coordinates.js"

export abstract class Creature{
    constructor(
        protected satiety: number,
        protected timeToDeath: number,
        protected coordinates: Coordinates,
        ){
        this.timeToDeath = timeToDeath
        this.coordinates = coordinates

    }
    
    public die(creature: any, reason: string){
        const tick = Timer.getInstance()
        if (creature.getTimeToDeath() === tick.getTime() || reason === "use" || reason === "die"){
            creature.setDeath()
        }
    }

    public getCoordinates(){
        return this.coordinates
    }

    public getTimeToDeath(){
        return this.timeToDeath
    }

    abstract getType()
}
