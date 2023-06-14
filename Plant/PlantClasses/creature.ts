import { Timer } from "../../simulation/timer.js"

export class Creature{
    constructor(protected timeToDeath: number){
        this.timeToDeath = timeToDeath
    }
    public die(creature: any, reason: string){
        const tick = Timer.getInstance()
        if (creature.getTimeToDeath() === tick.getTime() || reason === "use"){
            creature.setDeath(creature)
        }
    }
    public getTimeToDeath(){
        return this.timeToDeath
    }
}
