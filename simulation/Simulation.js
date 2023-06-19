import { SimulationMap } from "./Map.js";
import { BuildingDataBase, PlantDataBase } from "../image/BruhDataBase.js";
import { startElements } from "./starterPackForSimulation.js";
import { ImageProvider } from "../image/ImageProvider.js";
import { Timer } from "./timer.js";
import { DataBaseAnimals } from "../image/BruhDataBase.js";
import { HumanDataBase } from "../image/BruhDataBase.js";
import { SimulatonSupporter } from "./SimulationSupporter.js";
class Simulation {
    simulationStarted;
    constructor(simulationStarted) {
        this.simulationStarted = simulationStarted;
        simulationStarted = this.simulationStarted;
    }
    startSimulation() {
        const mapSize = 100;
        const map = SimulationMap.getInstance(mapSize);
        const plantDataBase = PlantDataBase.getInstance();
        const animalDataBase = DataBaseAnimals.getInstance();
        const humanDataBase = HumanDataBase.getInstance();
        const buildingDataBase = BuildingDataBase.getInstance();
        const drawer = ImageProvider.getInstance();
        let simulationSupporter = new SimulatonSupporter();
        const beginOfSimulation = new startElements;
        const timer = Timer.getInstance();
        timer.timeRunning();
        if (!this.simulationStarted) {
            map.createMap();
            beginOfSimulation.createStarterPack(plantDataBase, animalDataBase, humanDataBase, map);
        }
        this.simulationStarted = true;
        this.supportSimulation(timer, humanDataBase, plantDataBase, animalDataBase, buildingDataBase, map, drawer, simulationSupporter);
    }
    supportSimulation(timer, humanDataBase, plantDataBase, animalDataBase, buildingDataBase, map, drawer, simulationSupporter) {
        timer.addTickListener((time) => {
            simulationSupporter.simulationSupport(plantDataBase, animalDataBase, humanDataBase, map, time, drawer, buildingDataBase);
        });
    }
    endSimulation() {
        const map = SimulationMap.getInstance(100);
        const plantDataBase = PlantDataBase.getInstance();
        const animalDataBase = DataBaseAnimals.getInstance();
        const humanDataBase = HumanDataBase.getInstance();
        map.clearMap(map);
        plantDataBase.clearAll();
        animalDataBase.clearAll();
        humanDataBase.clearAll();
        Timer.getInstance().zeroTime();
        this.simulationStarted = false;
    }
}
class Buttons {
    simulate;
    constructor(simulate) {
        this.simulate = simulate;
    }
    startSimulationButton() {
        const startSimulation = document.getElementById('startSimulation');
        if (startSimulation) {
            startSimulation.addEventListener('click', () => {
                this.simulate.startSimulation();
            });
        }
    }
    endSimulationButton() {
        const endSimulation = document.getElementById('endSimulation');
        if (endSimulation) {
            endSimulation.addEventListener('click', () => {
                this.simulate.endSimulation();
            });
        }
    }
}
const simulate = new Simulation(false);
const buttons = new Buttons(simulate);
buttons.startSimulationButton();
buttons.endSimulationButton();
