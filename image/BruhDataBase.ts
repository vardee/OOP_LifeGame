import { Plant } from "../Plant/PlantClasses/AbstractPlant.js"

export class BruhDataBase{
    plantArray: Plant[] = []

    public addPlant (plant: Plant){
        this.plantArray.push(plant);
    }
    public removePlant(plant: Plant){
        const coordinatesToRemove = plant.getCoordinates;
        for (let i = 0; i < this.plantArray.length; i++) {
            const plant = this.plantArray[i];
            if (plant.getCoordinates === coordinatesToRemove) {
              this.plantArray.splice(i, 1);
              break;
            }
          }
    }
}

