import { Animal } from "./AnimalsAbstractClass.js";
import { Sex } from "./sex.js";
import { Coordinates } from "../../Plant/PlantClasses/Coordinates.js";
import { OmnivoresTypes } from "../AnimalTypes.js";
import { DataBaseAnimals } from "../../image/BruhDataBase.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { EuristicCalculation } from "./EuristicCalculation.js";

export class Omnivores extends Animal {
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
        protected type: OmnivoresTypes) {
        super(speed, satiety, health, sex,excitement, damage, timeToRest, hungerValue,coordinates,timetoDeath);
    }
    public override reproduction(dataBase: DataBaseAnimals, tick: number, map) {
        const animalDataBaseSize = dataBase.getDataBaseSize();
        for (let i = 0; i < animalDataBaseSize; i++) {
           if ((dataBase.getObject(i).getType() == this.type) && (tick === dataBase.getObject(i).getTimeToReproduction() && tick === this.timeToReproduction) && (dataBase.getObject(i).getSex() == this.sex))
           {
            this.teleportation(dataBase);
      
            const randomizer = RandomValues.getInstance();
      
            const newAnimal = new Omnivores(
              randomizer.createRandomValue(1, 4),
              randomizer.createRandomValue(25, 40),
              100,
              randomizer.createRandomValue(0, 1) === 0 ? Sex.female : Sex.male,
              tick + randomizer.createRandomValue(30, 40),
              randomizer.createRandomValue(60, 80), 
              randomizer.createRandomValue(60, 100),
              randomizer.createRandomValue(60, 100),
              tick + randomizer.createRandomValue(60, 100),
              randomizer.createRandomCoordinate(this.getCoordinates().x, this.getCoordinates().y, 1, '', map),
              this.getType()
            );
      
            dataBase.addObject(newAnimal);
            this.setTimeToReproduction(tick);
            break; // Прерываем цикл после первого размножения
            }
      }     
}

public findFood(plantDataBase: any, index): number{
    const animalDataBase = DataBaseAnimals.getInstance()
    let plantIndex = 0
    let animalIndex = 0
    let last = "plant"
    let minimumEuristic = 9999999
    for (let i = 0; i < Math.min(plantDataBase.getDataBaseSize(), animalDataBase.getDataBaseSize()); i++){
      const euristicCalculation = EuristicCalculation.getInstance();
        if (euristicCalculation.manhattanHeuristic(this, plantDataBase.getObject(i)) < minimumEuristic)
          plantIndex = i;
          last = "plant"
        if (euristicCalculation.manhattanHeuristic(this, animalDataBase.getObject(i)) < minimumEuristic)
          animalIndex = i;
          last = "animal"
    }
    if (last = "animal"){
        index = animalIndex
        this.teleportation(animalDataBase.getObject(index))
    }
    else{
        index = animalIndex
        this.teleportation(plantDataBase.getObject(index))
        }
    return index
  }

    public override eat(dataBase: any){
        if (this.hungerValue < 60){
          let index = this.findFood(dataBase, 0)
          dataBase.getObject(index).use(this)
        }
    }

    public override getType(){
        return this.type
    }

    public setDeath(){
      this.type = OmnivoresTypes.Dead
  }

    public use(animal: any): number{
        animal.setHungerValue(this.satiety)
        this.die(this, "use")
        return this.satiety
      }

}
