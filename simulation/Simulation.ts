import { SimulationMap } from "./Map.js";
import { PlantDataBase } from "../image/BruhDataBase.js";
import { startElements } from "./starterPackForSimulation.js";
import { ImageProvider } from "../image/ImageProvider.js";
import { Timer } from "./timer.js";
import { DataBaseAnimals } from "../image/BruhDataBase.js";
 
class Simulation{
    constructor(private simulationStarted: boolean){
        simulationStarted = this.simulationStarted
    }

    public startSimulation(){

        const mapSize = 100
        const map =  SimulationMap.getInstance(mapSize);
        const plantDataBase = PlantDataBase.getInstance();
        const animalDataBase = DataBaseAnimals.getInstance();
        const drawer =  ImageProvider.getInstance();
        const beginOfSimulation = new startElements

        const timer = Timer.getInstance();
        timer.timeRunning();

        if (!this.simulationStarted){
            map.createMap(); 
            beginOfSimulation.createStarterPack(plantDataBase, animalDataBase, map);
        }

        this.simulationStarted = true 
        this.supportSimulation(timer, plantDataBase, animalDataBase, map, drawer)
    }

    private supportSimulation(
        timer: Timer,
        plantDataBase: PlantDataBase,
        animalDataBase: DataBaseAnimals,
        map: SimulationMap,
        drawer: ImageProvider
    ){
        timer.addTickListener((time) => {
           // drawer.drawMap(map)
           for (let i = 0; i < animalDataBase.getDataBaseSize(); i++) {
            animalDataBase.getObject(i).move();
            if (animalDataBase.getObject(i).getHungerValue() >= 0)
                animalDataBase.getObject(i).setHungerValue(-5);
            if (animalDataBase.getDataBaseSize() < 70) {
                animalDataBase.getObject(i).reproduction(animalDataBase, timer.getTime(), map);
            }
            animalDataBase.getObject(i).eat(plantDataBase);
            drawer.getObject(animalDataBase, map, i);
    }
            for (let i = 0; i < plantDataBase.getDataBaseSize(); i++) {
                if (plantDataBase.getDataBaseSize() < 250)
                    plantDataBase.getObject(i).grow(plantDataBase, plantDataBase.getObject(i), time, map);
                drawer.getObject(plantDataBase, map, i)
                plantDataBase.removeDeads(plantDataBase.getObject(i), i)
        }
          }); 
    }

    public endSimulation(){
        const map = SimulationMap.getInstance(100);
        const plantDataBase = PlantDataBase.getInstance();
        const animalDataBase = DataBaseAnimals.getInstance();
        map.clearMap(map)
        plantDataBase.clearAll();
        animalDataBase.clearAll();
        Timer.getInstance().zeroTime()
        this.simulationStarted = false
    }
}



class Buttons {
    constructor(private simulate: Simulation) {}

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



