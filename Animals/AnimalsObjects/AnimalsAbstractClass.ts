import { Coordinates } from "../../Plant/PlantClasses/Coordinates.js";
import { Creature } from "../../creature.js";
import { Sex } from "./sex.js";
import { DataBaseAnimals } from "../../image/BruhDataBase.js";
import { SimulationMap } from "../../simulation/Map.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { Drawable } from "../../image/Drawable.js";
export abstract class Animal extends Creature {
    constructor(
        protected timeToDeath: number,
        protected speed: number,
        protected satiety: number,
        protected health: number,
        protected sex: Sex,
        protected timeToReproduction: number,
        protected damage: number,
        protected timeToRest: number,
        protected coordinates: Coordinates,
        protected hungerValue: number
    ) {
        super(satiety, timeToDeath, coordinates);
        this.speed = speed;
        this.satiety = satiety;
        this.health = health;
        this.sex = sex;
        this.timeToReproduction = timeToReproduction;
        this.damage = damage;
        this.coordinates = coordinates;
        this.timeToRest = timeToRest;
        this.hungerValue = hungerValue;
    }

    abstract eat()

    abstract reproduction(dataBase: any, tick: number, map: SimulationMap)

    public move() {
      const currentCoordinates = this.getCoordinates();
      const maxX = 100; // Максимальное значение координаты X
      const maxY = 100; // Максимальное значение координаты Y
    
      // Генерация случайного числа для определения направления движения
      const randomDirection = RandomValues.getInstance();
      const randomValue = randomDirection.createRandomValue(0, 3);
    
      // Закрасить текущие координаты белым цветом
      const drawable = Drawable.getInstance();
      const map = SimulationMap.getInstance(100);
      drawable.drawObject(map, currentCoordinates.x, currentCoordinates.y, "");
    
      let newCoordinates: Coordinates;
    
      if (randomValue === 0) {
        newCoordinates = new Coordinates(currentCoordinates.x, currentCoordinates.y + 5);
      } else if (randomValue === 1) {
        newCoordinates = new Coordinates(currentCoordinates.x + 5, currentCoordinates.y);
      } else if (randomValue === 2) {
        newCoordinates = new Coordinates(currentCoordinates.x, currentCoordinates.y - 5);
      } else if (randomValue === 3) {
        newCoordinates = new Coordinates(currentCoordinates.x - 5, currentCoordinates.y);
      }
    
      if (this.canMoveTo(newCoordinates, maxX, maxY)) {
        this.setCoordinates(newCoordinates);
      }
    
      if (this.hungerValue <= 70) {
        // Действия, если значение голода меньше или равно 70
      }
    }
    
    private canMoveTo(coordinates: Coordinates, maxX: number, maxY: number): boolean {
      const database = DataBaseAnimals.getInstance();
      const animals = database.getDataBaseSize();
    
      if (coordinates.x < 0 || coordinates.x >= maxX || coordinates.y < 0 || coordinates.y >= maxY) {
        return false; // Новые координаты выходят за границы
      }
    
      for (let i = 0; i < animals; i++) {
        const animal = database.getObject(i);
        if (animal !== this && animal.getCoordinates().x === coordinates.x && animal.getCoordinates().y === coordinates.y) {
          return false; // Найдено другое животное на новых координатах
        }
      }
    
      return true;
    }

    public teleportation(objectToTeleport: any){
      const drawable = Drawable.getInstance();
      const map = SimulationMap.getInstance(100);
      const currentCoordinates = this.getCoordinates();
      const randomizer = RandomValues.getInstance();
      this.setCoordinates(randomizer.createRandomCoordinate(objectToTeleport.getCoordinates().x, objectToTeleport.getCoordinates().y, 10, '', map));
      drawable.drawObject(map, currentCoordinates.x, currentCoordinates.y, "");
    }

    public defence() {
        // добавьте логику защиты
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getSatiety(): number {
        return this.satiety;
    }

    public getHealth(): number {
        return this.health;
    }

    public getDamege(): number {
        return this.damage;
    }

    public getTimeToRest(): number {
        return this.timeToRest;
    }

    public getHungerValue(): number {
        return this.hungerValue;
    }
    public getSex(): Sex {
      return this.sex;
  }

    public setTimeToReproduction(tick: number){
        this.timeToReproduction += tick;
    }

    public getTimeToReproduction(): number{
        return this.timeToReproduction;
    }
    public setCoordinates(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }
    public setHungerValue(newhungerValue: number) {
        this.hungerValue += newhungerValue
    }

    public setHealth(value: number){
        this.health += value
    }

    abstract findFood(dataBase: any, index: number);

}
