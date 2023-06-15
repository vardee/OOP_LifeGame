import { Coordinates } from "./Animals/Coordinates"
import { Timer } from "simulation/timer"

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

    public setSatiety(newSatiety: number){
        return this.satiety += newSatiety
    }

    public getSatiety(){
        return this.satiety
    }

    abstract use(object: any);
}
