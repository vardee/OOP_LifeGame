import { Animal } from "./AnimalsAbstractClass.js";
import { Sex } from "./sex.js";
import { Coordinates } from "../../Plant/PlantClasses/Coordinates.js";
import { PredatorTypes } from "../AnimalTypes.js";
import { DataBaseAnimals } from "../../image/BruhDataBase.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { EuristicCalculation } from "./EuristicCalculation.js";

export class Predator extends Animal{
    constructor(
        speed: number, 
        satiety: number, 
        health: number, 
        sex: Sex, 
        excitement: number,
        damage: number, 
        timeToRest: number, 
        hungerValue: number,
        timetoDeath: number,
        coordinates: Coordinates,
        protected type: PredatorTypes){
            super(speed,satiety,health,sex,excitement,damage,timeToRest,hungerValue,coordinates,timetoDeath)
    }
    public override reproduction(dataBase: DataBaseAnimals, tick: number, map) {
      const animalDataBaseSize = dataBase.getDataBaseSize();
      for (let i = 0; i < animalDataBaseSize; i++) {
         if ((dataBase.getObject(i).getType() == this.type) && (tick === dataBase.getObject(i).getTimeToReproduction() && tick === this.timeToReproduction) && (dataBase.getObject(i).getSex() == this.sex))
         {
          this.teleportation(dataBase.getObject(i));
    
          const randomizer = RandomValues.getInstance();
    
          const newAnimal = new Predator(
            randomizer.createRandomValue(1, 4),
            randomizer.createRandomValue(40, 60),
            100,
            randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male,
            tick + randomizer.createRandomValue(40, 50),
            randomizer.createRandomValue(60, 90), 
            randomizer.createRandomValue(60, 100),
            randomizer.createRandomValue(60, 100),
            tick + randomizer.createRandomValue(60, 100),
            randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 20, '', map),
            this.getType()
          );
    
          dataBase.addObject(newAnimal);
          this.setTimeToReproduction(tick);
          break; // Прерываем цикл после первого размножения
          }
    }    
}
    public findFood(dataBase: DataBaseAnimals, index): number{
      let minimumEuristic = 9999999
      for (let i = 0; i < dataBase.getDataBaseSize(); i++){
        const euristicCalculation = EuristicCalculation.getInstance();
          if (euristicCalculation.manhattanHeuristic(this, dataBase.getObject(i)) < minimumEuristic)
            index = i;
      }
      this.teleportation(dataBase.getObject(index))
      return index
    }


    public override eat(dataBase: any){
        if (this.hungerValue < 40){
          let index = this.findFood(dataBase, 0)
          dataBase.getObject(index).use(this)
        }
    }

    public override getType(){
      return this.type
  }

  public setDeath(){
    this.type = PredatorTypes.Dead
}

  public use(animal: any): number{
    animal.setHungerValue(this.satiety)
    this.die(this, "use")
    return this.satiety
  }


}
