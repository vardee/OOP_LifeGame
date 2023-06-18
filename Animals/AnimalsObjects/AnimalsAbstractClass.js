import { Coordinates } from "../../Plant/PlantClasses/Coordinates.js";
import { Creature } from "../../creature.js";
import { DataBaseAnimals } from "../../image/BruhDataBase.js";
import { SimulationMap } from "../../simulation/Map.js";
import { RandomValues } from "../../simulation/randomValues.js";
import { Drawable } from "../../image/Drawable.js";
export class Animal extends Creature {
    timeToDeath;
    speed;
    satiety;
    health;
    sex;
    timeToReproduction;
    damage;
    timeToRest;
    coordinates;
    hungerValue;
    constructor(timeToDeath, speed, satiety, health, sex, timeToReproduction, damage, timeToRest, coordinates, hungerValue) {
        super(satiety, timeToDeath, coordinates);
        this.timeToDeath = timeToDeath;
        this.speed = speed;
        this.satiety = satiety;
        this.health = health;
        this.sex = sex;
        this.timeToReproduction = timeToReproduction;
        this.damage = damage;
        this.timeToRest = timeToRest;
        this.coordinates = coordinates;
        this.hungerValue = hungerValue;
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
    move() {
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
        let newCoordinates;
        if (randomValue === 0) {
            newCoordinates = new Coordinates(currentCoordinates.x, currentCoordinates.y + 5);
        }
        else if (randomValue === 1) {
            newCoordinates = new Coordinates(currentCoordinates.x + 5, currentCoordinates.y);
        }
        else if (randomValue === 2) {
            newCoordinates = new Coordinates(currentCoordinates.x, currentCoordinates.y - 5);
        }
        else if (randomValue === 3) {
            newCoordinates = new Coordinates(currentCoordinates.x - 5, currentCoordinates.y);
        }
        if (this.canMoveTo(newCoordinates, maxX, maxY)) {
            this.setCoordinates(newCoordinates);
        }
        if (this.hungerValue <= 70) {
            // Действия, если значение голода меньше или равно 70
        }
    }
    canMoveTo(coordinates, maxX, maxY) {
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
    teleportation(objectToTeleport) {
        const drawable = Drawable.getInstance();
        const map = SimulationMap.getInstance(100);
        const currentCoordinates = this.getCoordinates();
        const randomizer = RandomValues.getInstance();
        this.setCoordinates(randomizer.createRandomCoordinate(objectToTeleport.getCoordinates().x, objectToTeleport.getCoordinates().y, 3, '', map));
        drawable.drawObject(map, currentCoordinates.x, currentCoordinates.y, "");
    }
    defence() {
        // добавьте логику защиты
    }
    getSpeed() {
        return this.speed;
    }
    getSatiety() {
        return this.satiety;
    }
    getHealth() {
        return this.health;
    }
    getDamage() {
        return this.damage;
    }
    getTimeToRest() {
        return this.timeToRest;
    }
    getHungerValue() {
        return this.hungerValue;
    }
    getSex() {
        return this.sex;
    }
    setTimeToReproduction(tick) {
        this.timeToReproduction += tick;
    }
    getTimeToReproduction() {
        return this.timeToReproduction;
    }
    setCoordinates(coordinates) {
        this.coordinates = coordinates;
    }
    setHungerValue(newhungerValue) {
        this.hungerValue += newhungerValue;
    }
    setHealth(value) {
        this.health += value;
    }
}
