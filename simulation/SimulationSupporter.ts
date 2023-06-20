import { DataBaseAnimals } from "../image/BruhDataBase.js";
import { HumanDataBase } from "../image/BruhDataBase.js";
import { ImageProvider } from "../image/ImageProvider.js";
import { PlantDataBase } from "../image/BruhDataBase.js";
import { SimulationMap } from "./Map.js";
import { BuildingDataBase } from "../image/BruhDataBase.js";



export class SimulatonSupporter {
    public simulationSupport(plantDataBase: PlantDataBase,
        animalDataBase: DataBaseAnimals,
        humanDataBase: HumanDataBase,
        map: SimulationMap,
        time: number,
        drawer: ImageProvider,
        buildingDataBase: BuildingDataBase) {
        this.plantSupport(plantDataBase, map, time, drawer);
        this.animalSupport(animalDataBase, map, time, drawer);
        this.humanSupport(humanDataBase, map, time, drawer, plantDataBase, animalDataBase, buildingDataBase);
        this.buildingSupport(drawer, buildingDataBase, map);
    }
    private plantSupport(plantDataBase: PlantDataBase, map: SimulationMap, time: number, drawer: ImageProvider) {
        for (let i = 0; i < plantDataBase.getDataBaseSize(); i++) {
            if (plantDataBase.getDataBaseSize() < 300)
                plantDataBase.getObject(i).grow(plantDataBase, plantDataBase.getObject(i), time, map);
            plantDataBase.getObject(i).die(plantDataBase.getObject(i), "")
            drawer.getObject(plantDataBase, map, i)
            plantDataBase.removeDeads(plantDataBase.getObject(i), i)
        }
    }
    private animalSupport(animalDataBase: DataBaseAnimals, map: SimulationMap, time: number, drawer: ImageProvider) {
        for (let i = 0; i < animalDataBase.getDataBaseSize(); i++) {
            animalDataBase.getObject(i).move();
            if (animalDataBase.getObject(i).getHungerValue() >= 0)
                animalDataBase.getObject(i).setHungerValue(-2);
            if (animalDataBase.getDataBaseSize() < 50) {
                animalDataBase.getObject(i).reproduction(animalDataBase, time, map);
            }
            if (animalDataBase.getObject(i).getHungerValue() <= 20)
                animalDataBase.getObject(i).die(animalDataBase.getObject(i), "die")
            if (animalDataBase.getObject(i).getHungerValue() < 40) {
                animalDataBase.getObject(i).eat();
            }
            drawer.getObject(animalDataBase, map, i);
            animalDataBase.removeDeads(animalDataBase.getObject(i), i)
        }
    }
    private humanSupport(humanDataBase: HumanDataBase, map: SimulationMap, time: number, drawer: ImageProvider, plantDataBase: PlantDataBase, animalDataBase: DataBaseAnimals, buildingDataBase: BuildingDataBase) {
        for (let i = 0; i < humanDataBase.getDataBaseSize(); i++) {
            humanDataBase.getObject(i).move();
            console.log( humanDataBase.getObject(i).getHungerValue())
            humanDataBase.getObject(i).setHungerValue(-1);
            if (humanDataBase.getObject(i).getWoodInHands() < 100 && plantDataBase.getDataBaseSize() != 0) {
                humanDataBase.getObject(i).getWood(plantDataBase);
            }
            if (humanDataBase.getObject(i).getWoodInHands() >= 100 && humanDataBase.getObject(i).getNumberOfBuildings() <= 2) {
                humanDataBase.getObject(i).createBuilding(buildingDataBase, 0, map);
                humanDataBase.getObject(i).setNumberOfBuildings()
                humanDataBase.getObject(i).setCountOfWood(-100);
            }
            else {
                for (let j = 0; j < buildingDataBase.getDataBaseSize(); j++) {

                }
            }
            if (humanDataBase.getObject(i).getHungerValue() >= 60 && humanDataBase.getObject(i).getNumberOfBuildings() >= 1) {
                for (let j = 0; j < buildingDataBase.getDataBaseSize(); j++) {
                    buildingDataBase.getObject(j).setAmountOfFood(+5);
                    humanDataBase.getObject(i).setHungerValue(-5);
                }
            }
            else if (plantDataBase.getDataBaseSize() != 0 && animalDataBase.getDataBaseSize() != 0 && buildingDataBase.getDataBaseSize() != 0 && humanDataBase.getObject(i).getHungerValue() < 40) {
                humanDataBase.getObject(i).eat();
            }
            if (humanDataBase.getObject(i).getWoodInHands() >= 100 && humanDataBase.getObject(i).getNumberOfBuildings() >= 1) {
                for (let j = 0; j < buildingDataBase.getDataBaseSize(); j++) {
                    buildingDataBase.getObject(j).setAmountOfWood(+(100 - humanDataBase.getObject(i).getWoodInHands()));
                    humanDataBase.getObject(i).setCountOfWood(-humanDataBase.getObject(i).getWoodInHands());
                }
            }
            if (humanDataBase.getDataBaseSize() < 15) {
                humanDataBase.getObject(i).reproduction(humanDataBase, time, map);
            }
            if (humanDataBase.getObject(i).getHungerValue() <= 0) {
                humanDataBase.getObject(i).die(humanDataBase.getObject(i), "die");
            }
            drawer.getObject(humanDataBase, map, i);
            humanDataBase.removeDeads(humanDataBase.getObject(i), i)
        }
    }
    private buildingSupport(drawer: ImageProvider, buildingDataBase: BuildingDataBase, map: SimulationMap) {
        for (let i = 0; i < buildingDataBase.getDataBaseSize(); i++) {
            drawer.getObject(buildingDataBase, map, i);
        }
    }
}
