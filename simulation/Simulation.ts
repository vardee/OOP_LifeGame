import { SimulationMap } from "./Map.js";
import { PlantDataBase } from "../image/BruhDataBase.js";
import { startElements } from "./starterPackForSimulation.js";
import { ImageProvider } from "../image/ImageProvider.js";
import { Timer } from "./timer.js";
import { DataBaseAnimals } from "../image/BruhDataBase.js";
import { HumanDataBase } from "../image/BruhDataBase.js";

class Simulation {
    constructor(private simulationStarted: boolean) {
        simulationStarted = this.simulationStarted
    }

    public startSimulation() {

        const mapSize = 100
        const map = SimulationMap.getInstance(mapSize);
        const plantDataBase = PlantDataBase.getInstance();
        const animalDataBase = DataBaseAnimals.getInstance();
        const humanDataBase = HumanDataBase.getInstance();
        const drawer = ImageProvider.getInstance();
        const beginOfSimulation = new startElements

        const timer = Timer.getInstance();
        timer.timeRunning();

        if (!this.simulationStarted) {
            map.createMap();
            beginOfSimulation.createStarterPack(plantDataBase, animalDataBase, humanDataBase, map);
        }

        this.simulationStarted = true
        this.supportSimulation(timer, humanDataBase, plantDataBase, animalDataBase, map, drawer)
    }

    private supportSimulation(
        timer: Timer,
        humanDataBase : HumanDataBase,
        plantDataBase: PlantDataBase,
        animalDataBase: DataBaseAnimals,
        map: SimulationMap,
        drawer: ImageProvider
    ) {
        timer.addTickListener((time) => {
            for (let i = 0; i < plantDataBase.getDataBaseSize(); i++) {
                if (plantDataBase.getDataBaseSize() < 300)
                    plantDataBase.getObject(i).grow(plantDataBase, plantDataBase.getObject(i), time, map);
                drawer.getObject(plantDataBase, map, i)
                plantDataBase.removeDeads(plantDataBase.getObject(i), i)
            }
            for (let i = 0; i < animalDataBase.getDataBaseSize(); i++) {
                animalDataBase.getObject(i).move();
                if (animalDataBase.getObject(i).getHungerValue() >= 0)
                    animalDataBase.getObject(i).setHungerValue(-2);
                if (animalDataBase.getDataBaseSize() < 40) {
                    animalDataBase.getObject(i).reproduction(animalDataBase, timer.getTime(), map);
                }
                if (animalDataBase.getObject(i).getHungerValue() <= 20)
                    animalDataBase.getObject(i).die(animalDataBase.getObject(i), "die")
                if (animalDataBase.getObject(i).getHungerValue() < 40)
                {
                    animalDataBase.getObject(i).eat();
                }
                drawer.getObject(animalDataBase, map, i);
                animalDataBase.removeDeads(animalDataBase.getObject(i), i)
            }
            for (let i = 0; i < humanDataBase.getDataBaseSize(); i++) {
                humanDataBase.getObject(i).move();
                if (humanDataBase.getObject(i).getWoodInHands() < 100 && plantDataBase.getDataBaseSize() != 0) {
                    humanDataBase.getObject(i).getWood(plantDataBase);
                }
                if (humanDataBase.getObject(i).getWoodInHands() >= 100) {
                    humanDataBase.getObject(i).setCountOfWood(-100)
                }
                if (humanDataBase.getObject(i).getHungerValue() >= 0)
                    humanDataBase.getObject(i).setHungerValue(-5);
                if (humanDataBase.getDataBaseSize() < 10) {
                    humanDataBase.getObject(i).reproduction(humanDataBase, timer.getTime(), map);
                }
                if (humanDataBase.getObject(i).getWoodInHands() < 100 && plantDataBase.getDataBaseSize() != 0 && animalDataBase.getDataBaseSize() != 0 && humanDataBase.getObject(i).getHungerValue() < 40) {
                humanDataBase.getObject(i).eat();
                }
                drawer.getObject(humanDataBase, map, i);
                animalDataBase.removeDeads(humanDataBase.getObject(i), i)
                console.log(humanDataBase.getDataBaseSize())
            }
        });
    }

    public endSimulation() {
        const map = SimulationMap.getInstance(100);
        const plantDataBase = PlantDataBase.getInstance();
        const animalDataBase = DataBaseAnimals.getInstance();
        const humanDataBase = HumanDataBase.getInstance();
        map.clearMap(map)
        plantDataBase.clearAll();
        animalDataBase.clearAll();
        humanDataBase.clearAll();
        Timer.getInstance().zeroTime()
        this.simulationStarted = false
    }
}





class Buttons {
    constructor(private simulate: Simulation) { }

    public startSimulationButton() {
        const startSimulation = document.getElementById('startSimulation');

        if (startSimulation) {
            startSimulation.addEventListener('click', () => {
                this.simulate.startSimulation();
            });
        }
    }

    public endSimulationButton() {
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



