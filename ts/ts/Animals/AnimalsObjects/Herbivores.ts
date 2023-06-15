import { Animal } from "../AnimalsAbstractClass.js"
import { sex } from "../../sex.js"
import { HerbivoresTypes } from "../AnimalsTypes/AnimalTypes.js"
import { Coordinates } from "../Coordinates.js"
import { RandomValues } from "../../../../simulation/randomValues.js"
import { DataBaseAnimals } from "../../../../ts/ts/DataBaseAnimals.js"
import { PlantDataBase } from "ts/ts/BruhDataBase.js"
export class Herbivores extends Animal{
    constructor(
        speed: number,
        satiety: number,
        health: number,
        sex: sex,
        excitement:number,
        damage: number,
        timeToRest: number, 
        hungerValue: number,
        timetoDeath: number,
        coordinates: Coordinates,
        protected type: HerbivoresTypes){
        super(speed,satiety,health,sex,excitement,damage,timeToRest,hungerValue,coordinates,timetoDeath)

    }
    public override reproduction(dataBase: DataBaseAnimals, tick: number, map) {
      const animalDataBaseSize = dataBase.getAnimalDataBaseSize();
      for (let i = 0; i < animalDataBaseSize; i++) {
         if ((dataBase.getAnimal(i).getType() == this.type) && (tick === dataBase.getAnimal(i).getTimeToReproduction() && tick === this.timeToReproduction) && (dataBase.getAnimal(i).getSex() == this.sex))
         {
          console.log("asdasdasdasdasd")
          this.teleportation(dataBase.getAnimal(i));
    
          const randomizer = RandomValues.getInstance();
    
          const newAnimal = new Herbivores(
            randomizer.createRandomValue(5, 20),
            randomizer.createRandomValue(100, 100),
            100,
            randomizer.createRandomValue(0, 1) === 0 ? sex.female : sex.male,
            tick + randomizer.createRandomValue(100, 100),
            randomizer.createRandomValue(100, 100), 
            randomizer.createRandomValue(60, 100),
            randomizer.createRandomValue(60, 100),
            tick + randomizer.createRandomValue(60, 100),
            randomizer.createRandomCoordinate(dataBase, this.getCoordinates().x, this.getCoordinates().y, 1, '', map),
            this.getType()
          );
    
          dataBase.addAnimal(newAnimal);
          this.setTimeToReproduction(tick);
          break; // Прерываем цикл после первого размножения
          }
    }    
}

    
    public findGrass(){

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

  public findFood(dataBase: PlantDataBase, index): number{
    let minimumEuristic = 9999999
    for (let i = 0; i < dataBase.getDataBaseSize(); i++){
      const euristicCalculation = EuristicCalculation.getInstance();
        if (euristicCalculation.manhattanHeuristic(this, dataBase.getObject(i)) < minimumEuristic)
          index = i;
    }
    this.teleportation(dataBase.getObject(index))
    return index
  }

  public use(animal: any): number{
    animal.setHungerValue(this.satiety)
    this.die(this, "use")
    return this.satiety
  }

  



}


