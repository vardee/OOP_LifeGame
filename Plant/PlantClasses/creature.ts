import { Timer } from "../../simulation/timer.js"
import { Coordinates } from "./Coordinates.js"

export class Creature{
    constructor(
        protected timeToDeath: number,
        protected coordinates: Coordinates,
        ){
        this.timeToDeath = timeToDeath
        this.coordinates = coordinates

    }
    public die(creature: any, reason: string){
        const tick = Timer.getInstance()
        if (creature.getTimeToDeath() === tick.getTime() || reason === "use"){
            creature.setDeath()
        }
    }

    public getCoordinates(){
        return this.coordinates
    }

    public getTimeToDeath(){
        return this.timeToDeath
    }
}
